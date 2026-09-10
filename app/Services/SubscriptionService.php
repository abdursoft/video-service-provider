<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserSubscription;
use App\Models\SubscriptionPackage;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Stripe\StripeClient;

class SubscriptionService
{
    protected StripeClient $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient(
            config('services.stripe.secret')
        );
    }

    /**
     * Subscribe user to a package.
     */
    public function subscribe(
        User $user,
        SubscriptionPackage $package
    ): UserSubscription {

        return DB::transaction(function () use ($user, $package) {

            $current = $user->activeSubscription;

            // Already subscribed to this package
            if (
                $current &&
                $current->subscription_package_id === $package->id
            ) {
                throw ValidationException::withMessages([
                    'package' => 'You are already subscribed to this plan.',
                ]);
            }

            /*
             * If user already has a subscription,
             * switch the existing Stripe subscription.
             */
            if ($current && $current->stripe_subscription_id) {

                return $this->switchPlan(
                    $user,
                    $current,
                    $package
                );
            }

            /*
             * No existing Stripe subscription.
             *
             * Usually the initial subscription should be created
             * from Checkout or Payment Element.
             */
            return UserSubscription::create([
                'user_id' => $user->id,
                'subscription_package_id' => $package->id,
                'status' => 'pending',
                'price' => ($package->amount / 100),
                'currency' => $package->currency,
            ]);
        });
    }

    public function createCheckoutSession(
        User $user,
        SubscriptionPackage $package
    ) {
        if (!$package->stripe_price_id) {
            throw new \Exception(
                'This package does not have a Stripe price.'
            );
        }

        /*
         * Make sure the user has a Stripe customer.
         */
        if (!$user->stripe_customer_id) {

            $customer = $this->stripe->customers->create([
                'name' => $user->name,
                'email' => $user->email,
            ]);

            $user->update([
                'stripe_customer_id' => $customer->id,
            ]);

            $user->refresh();
        }

        /*
         * Create pending local subscription.
         */
        $subscription = UserSubscription::create([
            'user_id' => $user->id,
            'subscription_package_id' => $package->id,
            'stripe_price_id' => $package->stripe_price_id,
            'status' => 'pending',
            'price' => $package->amount,
            'currency' => $package->currency,
        ]);

        /*
         * Create Stripe Checkout Session.
         */
        $session = $this->stripe->checkout->sessions->create([
            'customer' => $user->stripe_customer_id,

            'mode' => 'subscription',

            'line_items' => [
                [
                    'price' => $package->stripe_price_id,
                    'quantity' => 1,
                ],
            ],

            'success_url' => route(
                'subscription.success'
            ) . '?session_id={CHECKOUT_SESSION_ID}',

            'cancel_url' => route(
                'subscription.cancel'
            ),

            'metadata' => [
                'user_id' => $user->id,
                'subscription_id' => $subscription->id,
                'package_id' => $package->id,
            ],

            'subscription_data' => [
                'metadata' => [
                    'user_id' => $user->id,
                    'subscription_id' => $subscription->id,
                    'package_id' => $package->id,
                ],
            ],
        ]);

        return $session;
    }


    public function verifyCheckoutSession(string $sessionId)
    {
        $session = $this->stripe->checkout->sessions->retrieve(
            $sessionId,
            [
                'expand' => [
                    'subscription',
                ],
            ]
        );

        return $session;
    }

    /**
     * Switch an existing subscription to another package.
     */
    public function switchPlan(
        User $user,
        UserSubscription $current,
        SubscriptionPackage $newPackage
    ): UserSubscription {

        if (!$current->stripe_subscription_id) {
            throw ValidationException::withMessages([
                'subscription' => 'This subscription is not connected to Stripe.',
            ]);
        }

        if (!$newPackage->stripe_price_id) {
            throw ValidationException::withMessages([
                'package' => 'The selected package does not have a Stripe price.',
            ]);
        }

        if (
            $current->subscription_package_id === $newPackage->id
        ) {
            throw ValidationException::withMessages([
                'package' => 'You are already subscribed to this plan.',
            ]);
        }

        /*
         * Retrieve Stripe subscription.
         */
        $stripeSubscription = $this->stripe->subscriptions->retrieve(
            $current->stripe_subscription_id
        );

        if (empty($stripeSubscription->items->data)) {
            throw ValidationException::withMessages([
                'subscription' => 'Stripe subscription has no subscription item.',
            ]);
        }

        $subscriptionItem = $stripeSubscription->items->data[0];

        /*
         * Change Stripe price.
         *
         * proration_behavior = create_prorations
         * means Stripe calculates the price difference
         * automatically.
         */
        $updatedStripeSubscription =
            $this->stripe->subscriptions->update(
                $current->stripe_subscription_id,
                [
                    'items' => [
                        [
                            'id' => $subscriptionItem->id,
                            'price' => $newPackage->stripe_price_id,
                        ],
                    ],

                    'proration_behavior' => 'create_prorations',
                ]
            );

        /*
         * Update local subscription.
         */
        $current->update([
            'subscription_package_id' => $newPackage->id,
            'price' => $newPackage->price,
            'currency' => $newPackage->currency,
            'status' => $this->mapStripeStatus(
                $updatedStripeSubscription->status
            ),
        ]);

        return $current->fresh([
            'user',
            'subscriptionPackage',
        ]);
    }

    /**
     * comlete checkout session.
     */
    public function handleCheckoutSessionCompleted($session, $user){
       $user_subscription = UserSubscription::find($session->metadata->subscription_id);

       $package = $user_subscription->subscriptionPackage->slug;

        if (!$user_subscription) {
            throw ValidationException::withMessages([
                'subscription' => 'Local subscription not found.',
            ]);
        }

        $user_subscription->update([
            'trial_ends_at' => $session->subscription->trial_end
                ? \Carbon\Carbon::createFromTimestamp(
                    $session->subscription->trial_end
                )
                : null,
                'trial_starts_at' => $session->subscription->trial_start
                ? \Carbon\Carbon::createFromTimestamp(
                    $session->subscription->trial_start
                )
                : null,
            'starts_at' => $session->subscription->start_date,
            'ends_at' => $session->subscription->end_date,
            'stripe_subscription_id' => $session->subscription->id,
            'stripe_subscription_item_id' => $session->invoice,
            'status' => $this->mapStripeStatus($session->subscription->status),
        ]);

        $user->update([
            'package' => $package,
            'package_status' => $session->subscription->status == 'active' ? 'active' : 'inactive'
        ]);

        return $user_subscription->fresh(); 
    }

    /**
     * Cancel subscription.
     */
    public function cancel(
        UserSubscription $subscription,
        bool $immediately = false
    ): UserSubscription {

        if (!$subscription->stripe_subscription_id) {

            $subscription->update([
                'status' => 'canceled',
            ]);

            return $subscription->fresh();
        }

        if ($immediately) {

            $stripeSubscription =
                $this->stripe->subscriptions->cancel(
                    $subscription->stripe_subscription_id
                );

            $subscription->update([
                'status' => 'canceled',
                'ends_at' => now(),
            ]);
        } else {

            /*
             * Cancel at the end of current billing period.
             */
            $stripeSubscription =
                $this->stripe->subscriptions->update(
                    $subscription->stripe_subscription_id,
                    [
                        'cancel_at_period_end' => true,
                    ]
                );

            $subscription->update([
                'status' => 'active',
                'ends_at' => \Carbon\Carbon::createFromTimestamp(
                    $stripeSubscription->current_period_end
                ),
            ]);
        }

        return $subscription->fresh();
    }

    /**
     * Stripe status -> local status.
     */
    protected function mapStripeStatus(string $status): string
    {
        return match ($status) {

            'active',
            'trialing' => 'active',

            'canceled',
            'unpaid',
            'incomplete_expired' => 'expired',

            default => 'active',
        };
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Stripe\Exception\ApiErrorException;
use Stripe\StripeClient;
use Stripe\Webhook;
use Stripe\Exception\SignatureVerificationException;

class StripeWebhookController extends Controller
{
    protected StripeClient $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient(
            config('services.stripe.secret')
        );
    }

    public function handle(Request $request)
    {
        $payload = $request->getContent();

        $signature = $request->header(
            'Stripe-Signature'
        );

        if (!$signature) {
            return response()->json([
                'message' => 'Missing Stripe signature.',
            ], 400);
        }

        try {

            $event = Webhook::constructEvent(
                $payload,
                $signature,
                config('services.stripe.webhook_secret')
            );

        } catch (\UnexpectedValueException $e) {

            Log::warning('Stripe webhook invalid payload', [
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'message' => 'Invalid payload.',
            ], 400);

        } catch (SignatureVerificationException $e) {

            Log::warning('Stripe webhook invalid signature', [
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'message' => 'Invalid signature.',
            ], 400);
        }

        try {

            switch ($event->type) {

                /*
                 * Initial Checkout completed.
                 */
                case 'checkout.session.completed':

                    $this->checkoutCompleted(
                        $event->data->object
                    );

                    break;


                /*
                 * Subscription created/updated.
                 *
                 * This handles:
                 * - upgrade
                 * - downgrade
                 * - renewal changes
                 * - cancellation scheduled
                 * - status changes
                 */
                case 'customer.subscription.created':
                case 'customer.subscription.updated':

                    $this->subscriptionUpdated(
                        $event->data->object
                    );

                    break;


                /*
                 * Subscription completely canceled.
                 */
                case 'customer.subscription.deleted':

                    $this->subscriptionDeleted(
                        $event->data->object
                    );

                    break;


                /*
                 * Invoice payment failed.
                 */
                case 'invoice.payment_failed':

                    $this->paymentFailed(
                        $event->data->object
                    );

                    break;


                /*
                 * Invoice successfully paid.
                 *
                 * Useful for renewals.
                 */
                case 'invoice.paid':

                    $this->invoicePaid(
                        $event->data->object
                    );

                    break;
            }

        } catch (\Throwable $e) {

            Log::error('Stripe webhook processing failed', [
                'event_id' => $event->id,
                'event_type' => $event->type,
                'error' => $e->getMessage(),
            ]);

            /*
             * Return 500 so Stripe retries the webhook.
             */
            return response()->json([
                'message' => 'Webhook processing failed.',
            ], 500);
        }

        return response()->json([
            'received' => true,
        ]);
    }

        protected function checkoutCompleted($session): void
    {
        $localSubscriptionId =
            $session->metadata->subscription_id ?? null;

        if (!$localSubscriptionId) {
            Log::warning(
                'Stripe checkout missing subscription metadata.',
                [
                    'session_id' => $session->id,
                ]
            );

            return;
        }

        $localSubscription =
            UserSubscription::find($localSubscriptionId);

        if (!$localSubscription) {
            Log::warning(
                'Local subscription not found.',
                [
                    'local_subscription_id' =>
                        $localSubscriptionId,
                ]
            );

            return;
        }

        /*
         * Stripe Checkout should contain a subscription
         * when mode = subscription.
         */
        if (!$session->subscription) {
            Log::warning(
                'Checkout session has no Stripe subscription.',
                [
                    'session_id' => $session->id,
                ]
            );

            return;
        }

        /*
         * Retrieve the complete Stripe subscription.
         */
        $stripeSubscription =
            $this->stripe->subscriptions->retrieve(
                $session->subscription
            );

        /*
         * Make sure the Stripe customer belongs
         * to the same local user.
         */
        $user = $localSubscription->user;

        if (
            $user->stripe_customer_id &&
            $user->stripe_customer_id !== $session->customer
        ) {
            Log::critical(
                'Stripe customer mismatch.',
                [
                    'user_id' => $user->id,
                    'expected' => $user->stripe_customer_id,
                    'received' => $session->customer,
                ]
            );

            return;
        }

        $this->syncSubscription(
            $localSubscription,
            $stripeSubscription
        );
    }

        protected function syncSubscription(
        UserSubscription $localSubscription,
        $stripeSubscription
    ): void {

        $item = $stripeSubscription
            ->items
            ->data[0] ?? null;

        if (!$item) {
            throw new \RuntimeException(
                'Stripe subscription has no subscription item.'
            );
        }

        $stripePriceId = $item->price->id;

        /*
         * Find the local package using Stripe Price ID.
         */
        $package =
            \App\Models\SubscriptionPackage::where(
                'stripe_price_id',
                $stripePriceId
            )->first();

        /*
         * If the Stripe price doesn't exist locally,
         * don't corrupt the subscription.
         */
        if (!$package) {

            Log::error(
                'Stripe price does not exist locally.',
                [
                    'stripe_price_id' => $stripePriceId,
                    'stripe_subscription_id' =>
                        $stripeSubscription->id,
                ]
            );

            return;
        }

        $status = $this->mapStripeStatus(
            $stripeSubscription->status
        );

        $currentPeriodStart =
            $stripeSubscription->current_period_start
                ? Carbon::createFromTimestamp(
                    $stripeSubscription->current_period_start
                )
                : null;

        $currentPeriodEnd =
            $stripeSubscription->current_period_end
                ? Carbon::createFromTimestamp(
                    $stripeSubscription->current_period_end
                )
                : null;

        $localSubscription->update([

            /*
             * Package
             */
            'subscription_package_id' =>
                $package->id,

            /*
             * Stripe identifiers
             */
            'stripe_subscription_id' =>
                $stripeSubscription->id,

            'stripe_subscription_item_id' =>
                $item->id,

            'stripe_price_id' =>
                $stripePriceId,

            /*
             * Subscription state
             */
            'status' => $status,

            /*
             * Local package price
             */
            'price' => $package->price,

            'currency' => $package->currency,

            /*
             * Dates
             */
            'starts_at' =>
                $localSubscription->starts_at
                    ?? now(),

            'current_period_start' =>
                $currentPeriodStart,

            'current_period_end' =>
                $currentPeriodEnd,

            'ends_at' =>
                $stripeSubscription->cancel_at_period_end
                    ? $currentPeriodEnd
                    : null,

            /*
             * Cancellation
             */
            'cancel_at_period_end' =>
                (bool) $stripeSubscription
                    ->cancel_at_period_end,

            'canceled_at' =>
                $stripeSubscription->canceled_at
                    ? Carbon::createFromTimestamp(
                        $stripeSubscription->canceled_at
                    )
                    : null,

            /*
             * Trial
             */
            'trial_ends_at' =>
                $stripeSubscription->trial_end
                    ? Carbon::createFromTimestamp(
                        $stripeSubscription->trial_end
                    )
                    : null,
        ]);
    }

        protected function subscriptionUpdated(
        $stripeSubscription
    ): void {

        $localSubscription =
            UserSubscription::where(
                'stripe_subscription_id',
                $stripeSubscription->id
            )->first();

        if (!$localSubscription) {

            Log::warning(
                'Local subscription not found for Stripe update.',
                [
                    'stripe_subscription_id' =>
                        $stripeSubscription->id,
                ]
            );

            return;
        }

        $this->syncSubscription(
            $localSubscription,
            $stripeSubscription
        );
    }

        protected function subscriptionDeleted(
        $stripeSubscription
    ): void {

        $localSubscription =
            UserSubscription::where(
                'stripe_subscription_id',
                $stripeSubscription->id
            )->first();

        if (!$localSubscription) {
            return;
        }

        $localSubscription->update([
            'status' => 'expired',

            'cancel_at_period_end' => false,

            'ends_at' => now(),

            'canceled_at' => now(),
        ]);
    }

        protected function paymentFailed(
        $invoice
    ): void {

        $stripeSubscriptionId =
            $invoice->subscription;

        if (!$stripeSubscriptionId) {
            return;
        }

        $localSubscription =
            UserSubscription::where(
                'stripe_subscription_id',
                $stripeSubscriptionId
            )->first();

        if (!$localSubscription) {
            return;
        }

        /*
         * Don't immediately mark the subscription expired.
         *
         * Stripe may retry the payment.
         */
        $localSubscription->update([
            'status' => 'past_due',
        ]);
    }


        protected function invoicePaid(
        $invoice
    ): void {

        $stripeSubscriptionId =
            $invoice->subscription;

        if (!$stripeSubscriptionId) {
            return;
        }

        $localSubscription =
            UserSubscription::where(
                'stripe_subscription_id',
                $stripeSubscriptionId
            )->first();

        if (!$localSubscription) {
            return;
        }

        /*
         * Retrieve latest subscription state.
         */
        $stripeSubscription =
            $this->stripe->subscriptions->retrieve(
                $stripeSubscriptionId
            );

        $this->syncSubscription(
            $localSubscription,
            $stripeSubscription
        );
    }

        protected function mapStripeStatus(
        string $status
    ): string {

        return match ($status) {

            'active',
            'trialing' => 'active',

            'past_due' => 'past_due',

            'unpaid' => 'unpaid',

            'canceled',
            'incomplete_expired' => 'expired',

            'incomplete' => 'pending',

            default => 'pending',
        };
    }
}
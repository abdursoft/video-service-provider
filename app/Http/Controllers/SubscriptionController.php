<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionPackage;
use App\Models\UserSubscription;
use App\Services\SubscriptionService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    public function __construct(
        protected SubscriptionService $subscriptionService
    ) {}

    /**
     * Show available plans.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $packages = SubscriptionPackage::query()
            ->where('is_active', 'true')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Subscription/Index', [
            'packages' => $packages,

            'currentSubscription' =>
            $user->activeSubscription?->load(
                'subscriptionPackage'
            ),
        ]);
    }

    public function success(Request $request)
    {

        $user = $request->user();

        $request->validate([
            'session_id' => ['required', 'string'],
        ]);

        $session = $this->subscriptionService
            ->verifyCheckoutSession(
                $request->session_id
            );

        $userSubscription = $this->subscriptionService
            ->handleCheckoutSessionCompleted(
                $session,
                $user
            );


        return Inertia::render('Subscription/Success', [
            'paymentStatus' => $session->payment_status,
            'userSubscription' => $userSubscription,
        ]);
    }

    /**
     * change subscription
     */
    public function change(Request $request)
    {

        $active = UserSubscription::with('subscriptionPackage')->where('user_id', auth()->id())->where('status', 'active')->latest()->first();
        $target = SubscriptionPackage::findOrFail($request->input('package_id'));
        $user = $request->user();

        if ($active->price > 0 || !in_array($active?->subscriptionPackage?->slug,['free', 'freee'])) {
            $this->subscriptionService->switchPlan(
                $user,
                $active,
                $target
            );

            return Inertia::render('Subscription/Index')->with('success', 'Subscription package successfully updated');
        }
        return $this->subscribe($request, $target);
    }

    /**
     * Subscribe / change plan.
     */
    public function subscribe(
        Request $request,
        SubscriptionPackage $package,
    ) {
        $user = $request->user();

        if ($package->slug == 'free' || $package->amount <= 0) {
            UserSubscription::create([
                'user_id' => $user->id,
                'subscription_package_id' => $package->id,
                'stripe_price_id' => $package->stripe_price_id,
                'status' => 'active',
                'price' => $package->amount,
                'currency' => $package->currency,
                'starts_at' => now(),
                'ends_at' => now()->addMonth(),
            ]);
            return redirect()->route('auth.dashboard');
        } else {
            $session = $this->subscriptionService
                ->createCheckoutSession(
                    $user,
                    $package
                );

            return Inertia::location($session->url);
        }
    }

    /**
     * Cancel subscription.
     */
    public function cancel(Request $request)
    {
        $subscription =
            $request->user()->activeSubscription;

        abort_unless($subscription, 404);

        $this->subscriptionService->cancel(
            $subscription,
            false
        );

        return back()->with(
            'success',
            'Your subscription will be canceled at the end of the billing period.'
        );
    }


    /**
     * Cancel subscription.
     */
    public function resume(Request $request)
    {
        $subscription =
            $request->user()->activeSubscription;

        abort_unless($subscription, 404);

        $this->subscriptionService->cancel(
            $subscription,
            false
        );

        return back()->with(
            'success',
            'Your subscription will be canceled at the end of the billing period.'
        );
    }


    /**
     * Cancel immediately.
     */
    public function cancelImmediately(Request $request)
    {
        $subscription =
            $request->user()->activeSubscription;

        abort_unless($subscription, 404);

        $this->subscriptionService->cancel(
            $subscription,
            true
        );

        return back()->with(
            'success',
            'Subscription canceled successfully.'
        );
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionPackage;
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
            ->where('status', 'active')
            ->orderBy('price')
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
        $request->validate([
            'session_id' => ['required', 'string'],
        ]);

        $session = $this->subscriptionService
            ->verifyCheckoutSession(
                $request->session_id
            );

        $userSubscription = $this->subscriptionService
            ->handleCheckoutSessionCompleted(
                $session
            );

        return Inertia::render('Subscription/Success', [
            'paymentStatus' => $session->payment_status,
            'userSubscription' => $userSubscription,
        ]);
    }

    /**
     * Subscribe / change plan.
     */
    public function subscribe(
        Request $request,
        SubscriptionPackage $package
    ) {
        $user = $request->user();

        $session = $this->subscriptionService
            ->createCheckoutSession(
                $user,
                $package
            );

        return Inertia::location($session->url);
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

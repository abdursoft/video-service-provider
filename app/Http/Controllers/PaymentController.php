<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionPackage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $subscription = $user->subscriptions()
            ->with(['SubscriptionPackage'])
            ->latest()
            ->first();

        $packages = SubscriptionPackage::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Subscription/Index', [
            'subscription' => $subscription,
            'packages' => $packages,
        ]);
    }
}

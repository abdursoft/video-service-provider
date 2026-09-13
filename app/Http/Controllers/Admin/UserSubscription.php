<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPackage;
use App\Models\UserSubscription as ModelsUserSubscription;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserSubscription extends Controller
{
    public function index(Request $request)
    {

        $subscriptions = ModelsUserSubscription::query()
            ->with([
                'user:id,name,email',
                'package:id,name,slug,interval',
            ])
            ->when($request->search, function ($query, $search) {
                $query->where(function ($query) use ($search) {
                    $query->where('stripe_subscription_id', 'like', "%{$search}%")
                        ->orWhereHas('user', function ($query) use ($search) {
                            $query->where('name', 'like', "%{$search}%")
                                ->orWhere('email', 'like', "%{$search}%");
                        });
                });
            })
            ->when($request->status, function ($query, $status) {
                $query->where('status', $status);
            })
            ->when($request->package, function ($query, $package) {
                $query->where('subscription_package_id', $package);
            })
            ->when($request->interval, function ($query, $interval) {
                $query->whereHas('package', function ($query) use ($interval) {
                    $query->where('interval', $interval);
                });
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        $packages = SubscriptionPackage::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'name',
                'slug',
                'interval',
            ]);

        return Inertia::render('Admin/Users/Subscriptions', [
            'subscriptions' => $subscriptions,
            'packages' => $packages,
            'filters' => $request->only([
                'search',
                'status',
                'package',
                'interval',
            ]),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Models\SubscriptionPackage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;

class PageController extends Controller
{

    // home page
    public function home()
    {
        return view('app');
    }

    // contact page
    public function contact()
    {
        return view('contact');
    }

    // Demonstration page
    public function demonstration()
    {
        return view('typeset');
    }

    // forgot password page
    public function forgotPassword()
    {
        return view('password.forgot-password');
    }

    // reset new password page
    public function resetNewPassword()
    {
        return view('password.reset-password');
    }

    // dashboard page
    public function dashboard()
    {
        $user = auth()->user();
        $route = "";

        if ($user->hasRole('admin')) {
            $route = route('admin.dashboard');
        } else {
            $route = route('user.dashboard');
        }
        return redirect($route);
    }

    // age verify page
    public function ageVerify()
    {
        Cookie::queue('age_verified', true, 60 * 24 * 30); // Set cookie for 30 days
        return redirect()->route('home');
    }

    // age restriction page
    public function ageRestriction()
    {
        return view('age');
    }

    // pricing page
    public function pricing()
    {
        $packages = SubscriptionPackage::query()
            ->active()
            ->ordered()
            ->get()
            ->map(function (SubscriptionPackage $package) {
                return [
                    'id' => $package->id,
                    'name' => $package->name,
                    'slug' => $package->slug,
                    'description' => $package->description,
                    'amount' => $package->amount,
                    'formatted_amount' => $package->formatted_amount,
                    'currency' => $package->currency,
                    'interval' => $package->interval,
                    'features' => $package->features ?? [],
                    'limits' => $package->limits ?? [],
                    'is_active' => $package->is_active,
                    'sort_order' => $package->sort_order,
                ];
            });

        return Inertia::render('Price', [
            'packages' => $packages,
        ]);
    }

    public function userDashboard()
    {
        $user = auth()->user();

        $subscription = $user->subscriptions()
            ->with('subscriptionPackage')
            ->where('status', 'active')
            ->latest()
            ->first();

        $recentPayments = $user->payments()
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($payment) {
                return [
                    'id' => $payment->id,
                    'invoice' => $payment->stripe_subscription_item_id ?? $payment->stripe_subscription_id ?? 'N/A',
                    'amount' => number_format(($payment->price / 100), 2),
                    'status' => ucfirst($payment->status),
                    'created_at' => $payment->created_at->format('M d, Y'),
                ];
            });

        $recentPlayers = $user->players()
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($player) {
                return [
                    'id' => $player->token_id,
                    'name' => $player->title,
                    'status' => ucfirst($player->status ?? 'active'),
                    'created_at' => $player->created_at->format('M d, Y'),
                ];
            });

        $subscriptionData = null;

        $period = $subscription?->subscriptionPackage?->interval === 'month' ? 'monthly' : 'yearly';

        if ($subscription) {

            $start = $subscription->starts_at
                ? \Carbon\Carbon::parse($subscription->starts_at)
                : $subscription->created_at;

            $end = $subscription->ends_at
                ? \Carbon\Carbon::parse($subscription->ends_at)
                : ($period === 'monthly' ? $start->copy()->addMonth() : $start->copy()->addYear());

            $daysRemaining = $end
                ? max(0, now()->diffInDays($end, false))
                : 0;

            $progress = 0;

            if ($end) {
                $totalDays = max(1, $start->diffInDays($end));
                $elapsedDays = min(
                    $totalDays,
                    max(0, $start->diffInDays(now()))
                );

                $progress = (($totalDays - $elapsedDays) / $totalDays) * 100;
            }

            $subscriptionData = [
                'id' => $subscription->id,
                'days_remaining' => number_format($daysRemaining),
                'progress' => round($progress),
            ];
        }

        return \Inertia\Inertia::render('User/Dashboard', [
            'stats' => [
                'players' => $user->players()->count(),

                'activeSubscription' => $user->subscriptions()
                    ->where('status', 'active')
                    ->count(),

                'totalPayments' => $user->payments()->count(),

                'currentPackage' => (optional(
                    $user->subscriptions()
                        ->where('status', 'active')
                        ->latest()
                        ->first()
                ))->subscriptionPackage?->name,

                'subscription' => $subscriptionData,
            ],

            'recentPayments' => $recentPayments,

            'recentPlayers' => $recentPlayers,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        return Inertia::render('User/Dashboard', [
            'stats' => [
                'players' => $user->players()->count(),

                'activeSubscription' => $user->subscriptions()
                    ->where('status', 'active')
                    ->count(),

                'totalPayments' => $user->payments()->count(),

                'currentPackage' => optional(
                    $user->subscriptions()
                        ->where('status', 'active')
                        ->latest()
                        ->first()
                )->package?->name,
            ],
        ]);
    }
    
}
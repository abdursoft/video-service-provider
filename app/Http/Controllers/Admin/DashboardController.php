<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPackage;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $stats = [
            'total_users' => User::count(),

            'new_users' => User::where(
                'created_at',
                '>=',
                now()->startOfMonth()
            )->count(),

            'packages' => SubscriptionPackage::count(),

            'password_resets' => User::whereNotNull('password_reset_token')
                ->count(),

            'active_users' => User::where(
                'updated_at',
                '>=',
                now()->subDays(30)
            )->count(),
        ];

        $recentUsers = User::query()
            ->latest()
            ->limit(6)
            ->get([
                'id',
                'name',
                'email',
                'created_at',
            ])
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'status' => 'active',
                    'created_at' => $user->created_at->diffForHumans(),
                ];
            });

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentUsers' => $recentUsers,
            'recentActivities' => [],
        ]);
    }
}
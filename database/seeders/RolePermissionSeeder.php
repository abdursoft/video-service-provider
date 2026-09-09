<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            // Dashboard
            'dashboard.view',

            // Users
            'users.view',
            'users.create',
            'users.edit',
            'users.delete',

            // Subscription Packages
            'packages.view',
            'packages.create',
            'packages.edit',
            'packages.delete',

            // Subscriptions
            'subscriptions.view',
            'subscriptions.cancel',

            // Payments
            'payments.view',

            // Settings
            'settings.view',
            'settings.edit',

            // Passwords
            'password.change',

            // Players
            'players.view',
            'players.create',
            'players.edit',
            'players.delete',
            'profile.edit',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate([
                'name' => $permission,
                'guard_name' => 'web',
            ]);
        }

        // Admin role
        $admin = Role::firstOrCreate([
            'name' => 'admin',
            'guard_name' => 'web',
        ]);

        $admin->syncPermissions(
            Permission::where('guard_name', 'web')->get()
        );

        // Optional manager role
        $manager = Role::firstOrCreate([
            'name' => 'manager',
            'guard_name' => 'web',
        ]);

        $manager->syncPermissions([
            'dashboard.view',
            'users.view',
            'packages.view',
            'subscriptions.view',
            'payments.view',
            'players.view',
            'players.create',
            'players.edit',
            'players.delete',
            'settings.view',
            'password.change',
            'profile.edit',
        ]);

        // Optional user role
        $user = Role::firstOrCreate([
            'name' => 'user',
            'guard_name' => 'web',
        ]);

        $user->syncPermissions([
            'dashboard.view',
            'packages.view',
            'subscriptions.view',
            'payments.view',
            'players.view',
            'players.create',
            'players.edit',
            'players.delete',
            'settings.view',
            'password.change',
            'profile.edit',
        ]);
    }
}
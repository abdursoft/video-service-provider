<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SocialAuthController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\SubscriptionPackageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StripeWebhookController;
use App\Http\Controllers\SubscriptionController;

// general pages 
Route::inertia('/', 'Home')->name('home');
Route::inertia('/embed', 'FreeEmbed')->name('embed');
Route::inertia('/create', 'EmbedView')->name('create');
Route::get('/pricing', [PageController::class, 'pricing'])->name('pricing');
Route::inertia('/docs', 'Docs')->name('docs');


// auth routes 
Route::inertia('/login', 'Auth/Signin')->name('login');
Route::inertia('/register', 'Auth/Signup')->name('register');
Route::any('/logout',  [AuthController::class, 'logout'])->name('logout');

// auth actions 
Route::prefix('auth')->name('auth.')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::get('/dashboard', [PageController::class, 'dashboard'])->name('dashboard');
});


// google authentication 
Route::get('/auth/google', [SocialAuthController::class, 'redirectToGoogle'])
    ->name('auth.google');

Route::get('/auth/google/callback', [SocialAuthController::class, 'handleGoogleCallback'])
    ->name('auth.google.callback');

Route::get(
    '/subscription/success',
    [SubscriptionController::class, 'success']
)->name('subscription.success');


Route::post(
    '/stripe/webhook',
    [StripeWebhookController::class, 'handle']
)->name('stripe.webhook');

// password forgotten 
Route::prefix('password')->name('password.')->group(function () {
    Route::inertia('/password-forgot', 'ForgotPassword')->name('forgot');
    Route::inertia('/password-reset', 'ResetPassword')->name('reset');

    Route::post('/send-otp', [PasswordController::class, 'sendPasswordOTP'])->name('send-otp');
    Route::post('/reset-password', [PasswordController::class, 'resetPassword'])->name('reset-password');
});



Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::get('/dashboard', [DashboardController::class, 'index'])
            ->name('dashboard');

        Route::get('/users', function () {
            return inertia('Admin/Users/Index');
        })->name('users.index');

        Route::get('/password-resets', function () {
            return inertia('Admin/PasswordResets/Index');
        })->name('password-resets.index');

        Route::get('/pages', function () {
            return inertia('Admin/Pages/Index');
        })->name('pages.index');

        Route::get('/categories', function () {
            return inertia('Admin/Categories/Index');
        })->name('categories.index');

        Route::get('/notifications', function () {
            return inertia('Admin/Notifications/Index');
        })->name('notifications.index');

        Route::get('/reports', function () {
            return inertia('Admin/Reports/Index');
        })->name('reports.index');

        Route::get('/settings', function () {
            return inertia('Admin/Settings/Index');
        })->name('settings.index');
    });


// Admin routes 

Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::get('/users', [UserController::class, 'index'])
            ->name('users.index');

        Route::get('/users/create', [UserController::class, 'create'])
            ->name('users.create');

        Route::post('/users', [UserController::class, 'store'])
            ->name('users.store');

        Route::get('/users/{user}', [UserController::class, 'show'])
            ->name('users.show');

        Route::get('/users/{user}/edit', [UserController::class, 'edit'])
            ->name('users.edit');

        Route::put('/users/{user}', [UserController::class, 'update'])
            ->name('users.update');

        Route::delete('/users/{user}', [UserController::class, 'destroy'])
            ->name('users.destroy');

        Route::get(
            '/subscription-packages',
            [SubscriptionPackageController::class, 'index']
        )->name('subscription-packages.index');

        Route::get(
            '/subscription-packages/{subscriptionPackage}/edit',
            [SubscriptionPackageController::class, 'edit']
        )->name('subscription-packages.edit');

        Route::get(
            '/subscription-packages/create',
            [SubscriptionPackageController::class, 'create']
        )->name('subscription-packages.create');

        Route::post(
            '/subscription-packages',
            [SubscriptionPackageController::class, 'store']
        )->name('subscription-packages.store');
    });


Route::middleware('auth')->group(function () {

    Route::get(
        '/subscription',
        [SubscriptionController::class, 'index']
    )->name('subscription.index');

    Route::post(
        '/subscription/{package}',
        [SubscriptionController::class, 'subscribe']
    )->name('subscription.subscribe');

    Route::post(
        '/subscription/cancel',
        [SubscriptionController::class, 'cancel']
    )->name('subscription.cancel');

    Route::post(
        '/subscription/cancel-immediately',
        [SubscriptionController::class, 'cancelImmediately']
    )->name('subscription.cancel.immediately');
});
// admin routes end  


// ============================================================
// USER ROUTES
// ============================================================

Route::middleware(['auth', 'role:user'])
    ->name('user.')
    ->group(function () {

        // ----------------------------------------------------
        // Dashboard
        // ----------------------------------------------------

        Route::get('/user/dashboard', [PageController::class, 'userDashboard'])
            ->middleware('permission:dashboard.view')
            ->name('dashboard');


        // ----------------------------------------------------
        // Players
        // ----------------------------------------------------

        Route::get('/user/players', [PlayerController::class, 'index'])
            ->middleware('permission:players.view')
            ->name('players.index');

        Route::get('/user/players/create', [PlayerController::class, 'create'])
            ->middleware('permission:players.create')
            ->name('players.create');

        Route::post('/user/players', [PlayerController::class, 'store'])
            ->middleware('permission:players.create')
            ->name('players.store');

        Route::get('/user/players/{player}/edit', [PlayerController::class, 'edit'])
            ->middleware('permission:players.edit')
            ->name('players.edit');

        Route::put('/user/players/{player}', [PlayerController::class, 'update'])
            ->middleware('permission:players.edit')
            ->name('players.update');

        Route::delete('/user/players/{player}', [PlayerController::class, 'destroy'])
            ->middleware('permission:players.delete')
            ->name('players.destroy');


        // ----------------------------------------------------
        // Packages
        // ----------------------------------------------------

        Route::get('/user/packages', [SubscriptionPackageController::class, 'index'])
            ->middleware('permission:packages.view')
            ->name('packages.index');

        
        Route::get('/settings', function () {
            return inertia('Admin/Settings/Index');
        })->name('settings.index');


        // ----------------------------------------------------
        // Subscriptions
        // ----------------------------------------------------

        Route::get('/user/subscriptions', [SubscriptionController::class, 'index'])
            ->middleware('permission:subscriptions.view')
            ->name('subscriptions.index');

        Route::get('/user/subscriptions/{subscription}', [SubscriptionController::class, 'show'])
            ->middleware('permission:subscriptions.view')
            ->name('subscriptions.show');


        // ----------------------------------------------------
        // Payments
        // ----------------------------------------------------

        Route::get('/user/payments', [PaymentController::class, 'index'])
            ->middleware('permission:payments.view')
            ->name('payments.index');

        Route::get('/user/payments/{payment}', [PaymentController::class, 'show'])
            ->middleware('permission:payments.view')
            ->name('payments.show');



        // ----------------------------------------------------
        // Profile
        // ----------------------------------------------------

        Route::get('/user/profile', [ProfileController::class, 'edit'])
            ->middleware('permission:profile.edit')
            ->name('profile.edit');

        Route::put('/user/profile', [ProfileController::class, 'update'])
            ->middleware('permission:profile.edit')
            ->name('profile.update');


        // ----------------------------------------------------
        // Password
        // ----------------------------------------------------

        Route::get('/user/password', [PasswordController::class, 'edit'])
            ->middleware('permission:password.change')
            ->name('password.edit');

        Route::put('/user/password', [PasswordController::class, 'update'])
            ->middleware('permission:password.change')
            ->name('password.update');

    });
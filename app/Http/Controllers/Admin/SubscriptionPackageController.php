<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPackage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Stripe\StripeClient;

class SubscriptionPackageController extends Controller
{
    protected StripeClient $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient(
            config('services.stripe.secret')
        );
    }

    public function index()
    {
        $packages = SubscriptionPackage::query()
            ->orderBy('sort_order')
            ->orderBy('amount')
            ->get();

        return Inertia::render(
            'Admin/SubscriptionPackages/Index',
            [
                'packages' => $packages,
            ]
        );
    }

    public function create()
    {
        return Inertia::render(
            'Admin/SubscriptionPackages/Create'
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => [
                'required',
                'string',
                'max:255',
            ],

            'description' => [
                'nullable',
                'string',
            ],

            'amount'      => [
                'required',
                'numeric',
                'min:0',
            ],

            'currency'    => [
                'required',
                'string',
                'size:3',
            ],

            'interval'    => [
                'required',
                'in:month,year',
            ],

            'features'    => [
                'nullable',
                'array',
            ],

            'features.*'  => [
                'nullable',
                'string',
                'max:255',
            ],

            'limits'      => [
                'nullable',
                'array',
            ],

            'is_active'   => [
                'boolean',
            ],

            'is_popular'   => [
                'boolean',
            ],

            'sort_order'  => [
                'nullable',
                'integer',
                'min:0',
            ],
        ]);

        $amount = (int) round(
            $validated['amount'] * 100
        );

        DB::beginTransaction();

        try {
            if ($amount > 0) {
                /*
             * Create Stripe Product
             */
                $product = $this->stripe->products->create([
                    'name'        => $validated['name'],
                    'description' => $validated['description'] ?? null,
                ]);

                /*
             * Create Stripe Price
             */
                $price = $this->stripe->prices->create([
                    'product'     => $product->id,

                    'unit_amount' => $amount,

                    'currency'    => strtolower(
                        $validated['currency']
                    ),

                    'recurring'   => [
                        'interval' => $validated['interval'],
                    ],
                ]);
            }

            /*
             * Create local package
             */
            SubscriptionPackage::create([
                'name'              => $validated['name'],

                'slug'              => Str::slug(
                    $validated['name']
                ),

                'description'       =>
                $validated['description'] ?? null,

                'amount'            => $amount,

                'currency'          =>
                strtolower($validated['currency']),

                'interval'          =>
                $validated['interval'],

                'stripe_product_id' =>
                $product->id ?? NULL,

                'stripe_price_id'   =>
                $price->id ?? NULL,

                'features'          =>
                $validated['features'] ?? [],

                'limits'            =>
                $validated['limits'] ?? [],

                'is_active'         =>
                $validated['is_active'] ?? true,

                'is_popular'         =>
                $validated['is_popular'] ?? false,

                'sort_order'        =>
                $validated['sort_order'] ?? 0,
            ]);

            DB::commit();

            return redirect()
                ->route('admin.subscription-packages.index')
                ->with(
                    'success',
                    'Subscription package created successfully.'
                );
        } catch (\Throwable $e) {

            DB::rollBack();

            report($e);

            return back()
                ->withInput()
                ->withErrors([
                    'stripe' =>
                    $e->getMessage(),
                    'msg' => $e->getMessage(),
                ]);
        }
    }

    public function edit(SubscriptionPackage $subscriptionPackage)
    {
        return Inertia::render(
            'Admin/SubscriptionPackages/Edit',
            [
                'package' => $subscriptionPackage,
            ]
        );
    }
}

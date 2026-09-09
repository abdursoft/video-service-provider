<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class SubscriptionPackage extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'amount',
        'currency',
        'interval',
        'stripe_product_id',
        'stripe_price_id',
        'features',
        'limits',
        'is_active',
        'sort_order',
        'is_popular'
    ];

    protected function casts(): array
    {
        return [
            'amount' => 'integer',
            'features' => 'array',
            'limits' => 'array',
            'is_popular' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | Accessors
    |--------------------------------------------------------------------------
    */

    public function getFormattedAmountAttribute(): string
    {
        return number_format($this->amount / 100, 2);
    }

    public function getFormattedPriceAttribute(): string
    {
        return "{$this->currency} {$this->formatted_amount}";
    }

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    public function hasFeature(string $feature): bool
    {
        return in_array($feature, $this->features ?? [], true);
    }

    public function getLimit(string $key, mixed $default = null): mixed
    {
        return data_get($this->limits, $key, $default);
    }

    public function hasStripeProduct(): bool
    {
        return filled($this->stripe_product_id);
    }

    public function hasStripePrice(): bool
    {
        return filled($this->stripe_price_id);
    }

    /*
    |--------------------------------------------------------------------------
    | Scopes
    |--------------------------------------------------------------------------
    */

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy('sort_order')
            ->orderBy('id');
    }

    public function userSubscriptions(): HasMany
    {
        return $this->hasMany(
            UserSubscription::class,
            'subscription_package_id'
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Boot
    |--------------------------------------------------------------------------
    */

    protected static function booted(): void
    {
        static::creating(function (SubscriptionPackage $package) {
            if (blank($package->slug)) {
                $package->slug = Str::slug($package->name);
            }
        });

        static::updating(function (SubscriptionPackage $package) {
            if ($package->isDirty('name') && blank($package->slug)) {
                $package->slug = Str::slug($package->name);
            }
        });
    }
}

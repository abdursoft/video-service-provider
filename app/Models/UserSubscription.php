<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserSubscription extends Model
{
    protected $fillable = [
        'user_id',
        'subscription_package_id',

        'stripe_subscription_id',
        'stripe_subscription_item_id',
        'stripe_price_id',

        'status',

        'price',
        'currency',

        'starts_at',
        'ends_at',
        'trial_ends_at',
        'canceled_at',

        'cancel_at_period_end',

        'current_period_start',
        'current_period_end',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'integer',

            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
            'trial_ends_at' => 'datetime',
            'canceled_at' => 'datetime',

            'cancel_at_period_end' => 'boolean',

            'current_period_start' => 'datetime',
            'current_period_end' => 'datetime',
        ];
    }

    /**
     * The user who owns the subscription.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The subscription package.
     */
    public function subscriptionPackage(): BelongsTo
    {
        return $this->belongsTo(
            SubscriptionPackage::class,
            'subscription_package_id'
        );
    }

    /**
     * Check if subscription is active.
     */
    public function isActive(): bool
    {
        return $this->status === 'active'
            && (!$this->ends_at || $this->ends_at->isFuture());
    }

    /**
     * Check if subscription is expired.
     */
    public function isExpired(): bool
    {
        return $this->status === 'expired'
            || ($this->ends_at && $this->ends_at->isPast());
    }

    /**
     * Check if subscription is canceled.
     */
    public function isCanceled(): bool
    {
        return $this->status === 'canceled';
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Player extends Model
{
    protected $fillable = [
        'title',
        'configuration',
        'user_id',
        'token_id',
        'views'
    ];

    protected $casts = [
        'configuration' => 'array',
    ];

    /**
     * Player belongs to a user.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    public function views(): HasMany
    {
        return $this->hasMany(PlayerView::class);
    }

    public function getTotalViewsAttribute(): int
    {
        return $this->views()->count();
    }

    public function getMonthlyViewsAttribute(): int
    {
        return $this->views()
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->count();
    }
}

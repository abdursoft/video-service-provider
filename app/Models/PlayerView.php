<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PlayerView extends Model
{
    protected $fillable = [
        'agent',
        'browser',
        'os',
        'reffer_from',
        'player_id',
    ];

    /**
     * Player relationship.
     */
    public function player(): BelongsTo
    {
        return $this->belongsTo(Player::class);
    }
}
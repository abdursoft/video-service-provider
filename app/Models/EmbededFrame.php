<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EmbededFrame extends Model
{
    protected $table = 'embeded_frames';

    protected $fillable = [
        'configuration',
        'user_id',
        'token_id',
        'player_id',
    ];

    protected $casts = [
        'configuration' => 'array',
    ];

    /**
     * The user who owns this embed frame.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The player associated with this embed frame.
     */
    public function player(): BelongsTo
    {
        return $this->belongsTo(Player::class);
    }
}
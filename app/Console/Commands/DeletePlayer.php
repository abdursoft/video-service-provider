<?php

namespace App\Console\Commands;

use App\Models\EmbededFrame;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('app:delete-player')]
#[Description('Delete guest embedded frames older than 72 hours')]
class DeletePlayer extends Command
{
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $deleted = EmbededFrame::query()
            ->whereNull('user_id')
            ->where('created_at', '<', now()->subHours(72))
            ->delete();

        $this->info("Deleted {$deleted} embedded frame(s).");

        return self::SUCCESS;
    }
}
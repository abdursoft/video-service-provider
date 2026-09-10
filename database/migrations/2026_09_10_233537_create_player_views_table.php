<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('player_views', function (Blueprint $table) {
            $table->id();
            $table->text('agent')->nullable();
            $table->text('browser')->nullable();
            $table->text('os')->nullable();
            $table->text('reffer_from')->nullable();
            $table->foreignId('player_id')->nullable()->constrained('players')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_views');
    }
};

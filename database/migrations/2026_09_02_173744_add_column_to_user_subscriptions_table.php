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
        Schema::table('user_subscriptions', function (Blueprint $table) {
            $table->after('stripe_subscription_id', function (Blueprint $table) {
                $table->string('stripe_price_id')->nullable();

                $table->timestamp('trial_ends_at')->nullable();
                $table->timestamp('canceled_at')->nullable();

                $table->boolean('cancel_at_period_end')->default(false);

                $table->timestamp('current_period_start')->nullable();
                $table->timestamp('current_period_end')->nullable();
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_subscriptions', function (Blueprint $table) {
            //
        });
    }
};

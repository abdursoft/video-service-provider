<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('subscription_packages', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('slug')->unique();

            $table->text('description')->nullable();

            // Amount displayed/stored in your application.
            // Example: 999 = $9.99
            $table->unsignedBigInteger('amount');

            $table->string('currency', 3)->default('USD');

            // month / year
            $table->string('interval')->default('month');

            // Stripe references
            $table->string('stripe_product_id')->nullable()->unique();
            $table->string('stripe_price_id')->nullable()->unique();

            // Package features
            $table->json('features')->nullable();

            // Limits / configuration
            $table->json('limits')->nullable();

            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('sort_order')->default(0);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subscription_packages');
    }
};
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
        Schema::table('embeded_frames', function (Blueprint $table) {
            $table->after('user_id', function($table){
                $table->enum('status', ['active','inactive','deleted'])->default('active');
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('embeded_frames', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};

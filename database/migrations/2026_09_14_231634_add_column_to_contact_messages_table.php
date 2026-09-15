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
        Schema::table('contact_messages', function (Blueprint $table) {
            $table->after('id', function($table){
                $table->string('name');
                $table->string('email');
                $table->text('subject');
                $table->longText('description');
                $table->bigInteger('is_replay')->comment("0=not replied, 1=replied")->default(0);
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contact_messages', function (Blueprint $table) {
            $table->dropColumn(['name','email','subject','description','is_replay']);
        });
    }
};

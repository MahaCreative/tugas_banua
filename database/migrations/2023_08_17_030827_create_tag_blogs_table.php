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
        Schema::create('tag_blogs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->timestamps();
        });

         Schema::create('article_tag_blog', function (Blueprint $table) {
           $table->foreignId('article_id');
           $table->foreignId('tag_blog_id');
            $table->primary(['article_id', 'tag_blog_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tag_blogs');
        Schema::dropIfExists('article_tag_blog');
    }
};
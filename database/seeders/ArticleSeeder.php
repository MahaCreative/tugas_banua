<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\TagBlog;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(6)->hasArticles(15)->create();
        Article::get()->each(function ($article){
            $article->tags()->attach(
                TagBlog::get()->random(rand(1,3))->pluck('id')
            );
        });
    }
}
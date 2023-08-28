<?php

namespace Database\Seeders;

use App\Models\CategoryBlog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryBlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Blog', 'slug' => str($name)->slug(), 'teaser' => 'Lorem ipsum dolor dolor quies ambrekerd'],
            ['name' => $name = 'Tutorial', 'slug' => str($name)->slug(), 'teaser' => 'Lorem ipsum dolor dolor quies ambrekerd']
        ])->each(fn ($category) => CategoryBlog::create($category));
    }
}
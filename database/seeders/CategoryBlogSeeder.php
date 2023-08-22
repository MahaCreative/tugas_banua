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
            ['name' => $name = 'Blog', 'slug' => str($name)->slug()],
            ['name' => $name = 'Tutorial', 'slug' => str($name)->slug()]
        ])->each(fn ($category) => CategoryBlog::create($category));
    }
}
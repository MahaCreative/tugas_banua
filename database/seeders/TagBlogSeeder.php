<?php

namespace Database\Seeders;

use App\Models\TagBlog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagBlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Laravel', 'slug' => str($name)->slug()],
            ['name' => $name = 'HTML', 'slug' => str($name)->slug()],
            ['name' => $name = 'PHP', 'slug' => str($name)->slug()],
            ['name' => $name = 'CSS', 'slug' => str($name)->slug()],
            ['name' => $name = 'Javascript', 'slug' => str($name)->slug()],
            ['name' => $name = 'Arduino', 'slug' => str($name)->slug()],
        ])->each(fn ($category) => TagBlog::create($category));
    }
}
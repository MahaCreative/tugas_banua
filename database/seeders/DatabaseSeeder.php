<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);


        DB::table('tugas_coreldraws')->insert([
            ['nama_tugas' => $name = 'Tugas Membuat Sertifikat',
            'pelajaran' => 'Corel Draw',
            'foto_tugas' => 'img/SERTIFIKAT.jpg',
            'slug' => \Str::slug($name),
        ],
        ['nama_tugas' => $name =  'Tugas Mengikuti Apel Dengan Pentool',
            'pelajaran' => 'Corel Draw',
            'foto_tugas' => 'img/apel.jpeg',
            'slug' => \Str::slug($name),
        ],
         ['nama_tugas' => $name =  'Tugas Mengikuti logo api dengan coreldraw',
            'pelajaran' => 'Corel Draw',
            'foto_tugas' => 'img/logoapi.jpg',
            'slug' => \Str::slug($name),
        ],
        ['nama_tugas' => $name =  'Tugas Membuat STEMPEL',
            'pelajaran' => 'Corel Draw',
            'foto_tugas' => 'img/STEMPEL.jpg',
            'slug' => \Str::slug($name),
        ],
        ['nama_tugas' => $name =  'Tugas Membuat PADI DAN KAPAS',
            'pelajaran' => 'Corel Draw',
            'foto_tugas' => 'img/padidankapas.png',
            'slug' => \Str::slug($name),
        ],
        ['nama_tugas' => $name =  'Tugas Membuat SPANDUK MAKANAN',
            'pelajaran' => 'Corel Draw',
            'foto_tugas' => 'img/spanduk_makanan.jpg',
            'slug' => \Str::slug($name),
        ],
        ['nama_tugas' => $name =  'TUGAS DESAIN SABLON BAJU',
            'pelajaran' => 'Corel Draw',
            'foto_tugas' => 'img/baju.png',
            'slug' => \Str::slug($name),
        ],
        ['nama_tugas' => $name =  'UNDANGAN',
            'pelajaran' => 'Corel Draw',
            'foto_tugas' => 'img/undangan.jpg',
            'slug' => \Str::slug($name),
        ],

        ]);

        $this->call([
            CategoryBlogSeeder::class,
            TagBlogSeeder::class,
            ArticleSeeder::class

        ]);

    }
}
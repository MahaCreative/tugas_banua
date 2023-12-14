<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('form_tugas_siswas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tugas_coreldraw_id');
            $table->string('nama_siswa');
            $table->string('foto_siswa');
            $table->string('asal_sekolah');
            $table->string('foto_tugas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_tugas_siswas');
    }
};

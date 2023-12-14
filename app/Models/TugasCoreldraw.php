<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TugasCoreldraw extends Model
{
    use HasFactory;
    public function formTugas(){
        return $this->hasMany(FormTugasSiswa::class);
    }
}

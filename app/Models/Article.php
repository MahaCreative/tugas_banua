<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    function getRouteKeyName()
    {
        return 'slug';
    }

    public function tags(){
        return $this->belongsToMany(TagBlog::class);
    }
}
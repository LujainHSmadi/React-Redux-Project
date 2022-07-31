<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description','type', 'image','image_2','image_3','image_4', 'phone', 'location'];
   
}

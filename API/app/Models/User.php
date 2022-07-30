<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
<<<<<<< HEAD
    protected $fillable = ['name', 'email', 'password', 'role','image'];
=======
    protected $fillable = ['name', 'email', 'password', 'role','phonenumber'];
>>>>>>> d89c2903535dfbbb6deeef05c12a8b5120840269
}

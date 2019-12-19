<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Products;

class Categorie extends Model
{
    protected $fillable = ['name']; 
    public function product() {
        return $this->hasMany(Products::class);
    }
}

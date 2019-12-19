<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Products;

class Suppliers extends Model
{
    protected $fillable = ['nameSupplier','nameCompany','addressCompany','phoneCompany','descriptionCompany'];


    public function products() {
		return $this->belongsToMany(Products::class,'products_suppliers');
    }
}

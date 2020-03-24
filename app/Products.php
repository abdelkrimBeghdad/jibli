<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Categorie;
use App\Suppliers;
use App\order_items;

class Products extends Model
{
    protected $fillable = ['code','name','description','category_name','nameCompany','quantity','brand','price','featured','image'];

    public function category() {
        return $this->belongsTo(Categorie::class); 
    }
    public function supplierr() {
        return $this->belongsToMany(Suppliers::class,'products_suppliers');
    }
       

}

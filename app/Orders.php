<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $fillable =['id','OrderGenerale_id','user_id','order_id','product_id','name','price','quantity'];
}

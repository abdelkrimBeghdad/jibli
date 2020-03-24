<?php

namespace App;

use App\Orders;
use App\Products;

use Illuminate\Database\Eloquent\Model;

class order_items extends Model
{
    protected $fillable =['id','orders_id','user_id','product_id','name','price','quantity'];


    
}

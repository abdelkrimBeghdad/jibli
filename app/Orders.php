<?php

namespace App;
use App\order_items;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{   protected $fillable =['id','user_id','state'];
    
    public function orders(){
      return  $this->hasMany('App\order_items','orders_id');
     }
}

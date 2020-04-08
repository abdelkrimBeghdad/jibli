<?php

namespace App;
use App\order_items;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
class Orders extends Model
{  
  use Notifiable;
  
  protected $fillable =['id','user_id','state','nbrOrder','priceTotale'];

  public function user()
  {
      return $this->belongsTo('App\Customer');
  }
  public function userName()
{
    return $this->belongsTo('App\User', 'user_id'); 
}

    public function orders(){
      return  $this->hasMany('App\order_items','orders_id');
     }
}

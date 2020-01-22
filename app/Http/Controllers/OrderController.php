<?php

namespace App\Http\Controllers;
use App\Orders;
use App\OrderGenerale;

use App\Products;
use Illuminate\Http\Request;

class OrderController extends Controller
{

   


    public function store(Request $request){
        
        $a= $request->input('itemOrder');
       

        $order = new OrderGenerale;
        $order->user_id =$a[0][0];
       
        $order->save();



            foreach ($request->input('itemOrder') as $key => $value) {
               orders::create([
                    'OrderGenerale_id' => $order->id,
                    'user_id'  => $value[0],
                    'product_id'  => $value[1],
                    'name'  => $value[2],
                    'price'  => $value[3],
                    'quantity'  => $value[4],
            
                ]); 
              
              }
              
              
        return 'valide';
    }
}

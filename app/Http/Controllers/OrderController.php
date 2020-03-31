<?php

namespace App\Http\Controllers;
use App\Orders;
use App\order_items;

use App\Products;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    public function store(Request $request){
        
        $a= $request->input('itemOrder');
       

        $order = new orders;
        $order->user_id =$a[0][0];
       
        $order->save();

            foreach ($request->input('itemOrder') as $key => $value) {
                order_items::create([
                    'orders_id' => $order->id,
                    'user_id'  => $value[0],
                    'product_id'  => $value[1],
                    'name'  => $value[2],
                    'price'  => $value[3],
                    'quantity'  => $value[4],
            
                ]); 
              
              }
              
              
        return 'valide';
    }

    public function ListeOfOrdersOfClientFrontend($id){
        /*  $order = orders::with('orders')->get(); */
          $listeorders = orders::with('orders')->where('user_id',$id)->get();
  
          /* $order = json_decode(json_encode($order));
          echo "<pre>";print_r($order );die;
          dd($order); */
          return response()->json($listeorders);
 
     }
}

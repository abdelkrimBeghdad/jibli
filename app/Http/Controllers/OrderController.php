<?php

namespace App\Http\Controllers;
use App\Orders;
use App\order_items;
use App\user;
use  App\Customer;
use App\Products;
use Illuminate\Http\Request;


use App\Notifications\newOrderPosted;

class OrderController extends Controller
{

    public function store(Request $request){
        
        $a= $request->input('itemOrder');
       

        $order = new orders;
        $order->user_id =$a[0][0];

        // Get the last order id


        $orders = Orders::all();

            if($orders->isEmpty())
            {
                $lastorderId = 0;
                
            }else{
                $lastorderId = Orders::orderBy('id', 'desc')->first()->id;
              
            }
        

        // Get last 3 digits of last order id
        $lastIncreament = substr($lastorderId, -4);

        // Make a new order id with appending last increment + 1
        $newOrderId = 'TXT' . date('YmdHi') . str_pad($lastIncreament + 1, 3, 0, STR_PAD_LEFT);


        $order->nbrOrder = $newOrderId;
        $order->priceTotale =$a[0][5];
        $order->save();

       /*  if (auth()->guard('api')->check())
        { 
           print_r(auth('api')->user()->firstName);
        }else(print('nooo' )); */
        $user = Customer::first();
        $user->notify(new newOrderPosted($order));
        

        
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

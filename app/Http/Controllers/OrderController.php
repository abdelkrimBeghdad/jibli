<?php

namespace App\Http\Controllers;
use App\Orders;
use App\Products;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        
    }


    public function store(Request $request){
          
            foreach ($request->input('itemOrder') as $key => $value) {
               orders::create([
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

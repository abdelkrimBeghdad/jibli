<?php

namespace App\Http\Controllers;

use App\Orders;
use App\order_items;

use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        
    }

    public function index()
    {
       
       $order = orders::with('orders')->get();
       // $order = orders::with('orders')->where('user_id',1)->get();

        /* $order = json_decode(json_encode($order));
        echo "<pre>";print_r($order );die;
        dd($order); */
        return view('orders.indexOrder',compact('order'));
    }




    public function Delivred($id){
        $order = orders::find($id);
        $order->state = 2;
        $order->save();
        return back();
    }

    public function NoDelivred($id){
        $order = orders::find($id);
        $order->state = 0;
        $order->save();
        return back();
    }

    public function Processing($id){
        $order = orders::find($id);
        $order->state = 1;
        $order->save();
        return back();
    }





    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {       
         
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {  

         }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        }
}

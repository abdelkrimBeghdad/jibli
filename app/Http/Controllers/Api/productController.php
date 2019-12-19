<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Products;

class productController extends Controller
{
    public function index()
    {
       
        $product = Products::all();
       
        return response()->json($product);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {       
         $categorie = Categorie::all();
         $supplier = Suppliers::all();
         return view('product.createProduct',compact('categorie','supplier'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        request()->validate([

            'image' => 'nullable|sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

        ]);
       


        if($request->hasFile('image'))
        {   $filenameWithExtention = $request->file('image')->getClientOriginalName();
            $fileName = pathinfo($filenameWithExtention,PATHINFO_FILENAME);
            $extension = $request->file('image')->getClientOriginalExtension();
            $fileNameStore = $fileName .'_'.time().'.'.$extension;
            $path = $request->file('image')->move(base_path() . '/public/images/', $fileNameStore);
        }else{
            $fileNameStore = 'noImage.jpg';
        }



        Products::create( $request->all(),$fileNameStore);
        return redirect('Admin/product')->with('success', 'Product saved!');
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
        $product = Products::find($id);
        $categorie = Categorie::all();
        return view('product.EditProduct',compact('product','categorie'));
       
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
        $product = Products::findOrFail($id);
        $product->update($request->all());
        return redirect('Admin/product')->with('success', 'Product updated!');
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Products::find($id);
        $product->delete();

        return redirect('/Admin/product')->with('success', 'Product deleted!');
    }
}

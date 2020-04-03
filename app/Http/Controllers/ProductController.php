<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Products;
use App\Categorie;
use App\Suppliers;
use Image;

class ProductController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $product = Products::all();
       
        return view('product.indexProduct',compact('product'));
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
       
            $date=date('YmdHis');
        if($request->hasFile('image'))
        {   $image = $request->file('image');
            $fileName= $request->name.'_'.$date.'.'.$image->getClientOriginalExtension();
    
            $destinationPath = public_path('/upload/image');
            $img = Image::make($image->getRealPath());
            $img->resize(250, 250, function ($constraint) {
                $constraint->aspectRatio();
            })->save($destinationPath.'/'.$fileName);
    
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $fileName);
            
         
        }else{ 
            $fileName = 'noImage.png';
        }

       
        $form_data = array(
            'code'       =>   $request->code,
            'name'        =>   $request->name,
            'description'        =>   $request->description,
            'category_name'        =>   $request->category_name,
            'nameCompany'        =>   $request->nameCompany,
            'quantity'        =>   $request->quantity,
            'brand'        =>   $request->brand,
            'price'        =>   $request->price,
            'featured'        =>   $request->featured,
            'image'            =>   $fileName
        );

       

        Products::create($form_data);
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
        $supplier = Suppliers::all();
        return view('product.EditProduct',compact('product','categorie','supplier'));
       
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

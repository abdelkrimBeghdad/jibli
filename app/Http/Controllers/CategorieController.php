<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Categorie;

class CategorieController extends Controller
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
        $categorie = Categorie::all();
       return view('categorie.indexCategorie',compact('categorie'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {   
        return view('categorie.createCategorie');
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
            'name'        =>   $request->name,
            'name_ar'        =>   $request->name_ar,
            'image'            =>   $fileName
        );


        Categorie::create($form_data);
        return redirect('Admin/categorie/create')->with('success', 'Categorie saved!');
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
        $categorie = Categorie::find($id);
        return view('categorie.EditCategorie',compact('categorie'));
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
        $categorie = Categorie::find($id)->update($request->all());
        return redirect('Admin/categorie')->with('success', 'Categorie updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categorie = Categorie::find($id);
        $categorie->delete();

        return redirect('/Admin/categorie')->with('success', 'Categorie deleted!');
    }
}

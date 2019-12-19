@extends('layouts.appAdmin')
@section('content')

<div class="container">
        <div class="col-sm-12">

                @if(session()->get('success'))
                  <div class="alert alert-success">
                    {{ session()->get('success') }}  
                  </div>
                @endif
              </div>
    <div class="row-cintent-center">
        <div class="card">
            <div class="card-header">Update Product</div>
            <div class="card-body">
            <form action="{{route('product.update',$product->id)}}" method="post">
                @method('PATCH') 
                @csrf
                <div class="form-group row">
                    <label for="code" class="col-sm-2 col-form-label">Code</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" value={{"$product->code"}} name="code" id="code" >
                    </div>
                </div>

                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" value={{"$product->name"}} name="name" id="name" >
                    </div>
                </div>
                
                <div class="form-group row">
                    <label for="description" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" value={{"$product->description"}} name="description" id="description" >
                    </div>
                </div>

                <div class="form-group row">
                    <label for="category_id" class="col-sm-2 col-form-label">category</label>
                      <div class="col-sm-10">
                        <select class="browser-default custom-select" id="category_id" name="category_id">
                          <option value={{ $product->category->id }}>{{ $product->category->name }}</option>                         
                          @foreach ($categorie as $item)
                            <option value={{$item->id}}>{{$item->name}}</option>
                          @endforeach
                        </select>
                      </div>
                    </div> 

                <div class="form-group row">
                    <label for="quantity" class="col-sm-2 col-form-label">quantity</label>
                    <div class="col-sm-10">
                      <input type="number" class="form-control" value={{"$product->quantity"}} name="quantity" id="quantity" >
                    </div>
                </div>

                <div class="form-group row">
                    <label for="brand" class="col-sm-2 col-form-label">brand</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" value={{"$product->brand"}} name="brand" id="brand" >
                    </div>
                </div>

                <div class="form-group row">
                    <label for="price" class="col-sm-2 col-form-label">price</label>
                    <div class="col-sm-10">
                      <input type="number" class="form-control" value={{"$product->price"}} name="price" id="price" >
                    </div>
                </div>
                <div class="form-group row">
                    <label for="featured" class="col-sm-2 col-form-label">featured</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" value={{"$product->featured"}} name="featured" id="featured" >
                    </div>
                </div>
                <div class="form-group row">
                  <label for="image" class="col-sm-2 col-form-label">image</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control-file" id="image">
                  </div>
              </div>
                 <button type="submit" class="btn btn-primary">update</button>        
                </form>
            </div>
        </div>
    </div>
</div>
    
@endsection
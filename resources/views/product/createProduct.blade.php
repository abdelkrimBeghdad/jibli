@extends('layouts.appAdmin')
@section('content')


<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Product</li>
    <li class="breadcrumb-item"><a href="{{route('product.index')}}">Liste</a></li>
    <li class="breadcrumb-item"><a href="{{route('product.create')}}">create</a></li>
  </ol>
</nav>
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
            <div class="card-header">Create Product</div>
            <div class="card-body">
            <form action="{{route('product.store')}}" method="post" enctype="multipart/form-data">
                @csrf
                    <div class="form-group row">
                        <label for="code" class="col-sm-2 col-form-label">Code</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="code" id="code" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="name" id="name" >
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="description" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="description" id="description" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="category_id" class="col-sm-2 col-form-label">Category</label>
                        <div class="col-sm-10">
                          <select class="browser-default custom-select" id="category_id" name="category_id">
                            @foreach ($categorie as $item)
                              <option value={{$item->id}}>{{$item->name}}</option>
                            @endforeach
                            
                          </select>
                        </div>
                    </div>

                    <div class="form-group row">
                      <label for="supplier_id" class="col-sm-2 col-form-label">Supplier</label>
                      <div class="col-sm-10">
                        <select class="browser-default custom-select" id="supplier_id" name="supplier_id">
                          @foreach ($supplier as $item)
                            <option value={{$item->id}}>{{$item->nameCompany}}</option>
                          @endforeach
                          
                        </select>
                      </div>
                  </div>

                    <div class="form-group row">
                        <label for="quantity" class="col-sm-2 col-form-label">quantity</label>
                        <div class="col-sm-10">
                          <input type="number" class="form-control" name="quantity" id="quantity" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="brand" class="col-sm-2 col-form-label">brand</label>
                        <div class="col-sm-10">
                          <input type="brand" class="form-control" name="brand" id="brand" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="price" class="col-sm-2 col-form-label">price</label>
                        <div class="col-sm-10">
                          <input type="number" class="form-control" name="price" id="price" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="featured" class="col-sm-2 col-form-label">featured</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="featured" id="featured" >
                        </div>
                    </div>
                    <div class="form-group row">
                      <label for="image" class="col-sm-2 col-form-label">image</label>
                      <div class="col-sm-10">
                        <input type="file" name="image" id="image" class="form-control-file">
                      </div>
                  </div>

                     <button type="submit" class="btn btn-primary">submit</button>     
                </form>
            </div>
        </div>
    </div>
</div>
    
@endsection
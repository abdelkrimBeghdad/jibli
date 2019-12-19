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
            <div class="card-header">Create Category</div>
            <div class="card-body">
            <form action="{{route('categorie.update',$categorie->id)}}" method="post">
                @method('PATCH') 
                @csrf
                    <div class="form-group row">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" value="{{$categorie->name}}" name="name" id="name" >
                        </div>
                    </div>

                     <button type="submit" class="btn btn-primary">update</button>     
                </form>
            </div>
        </div>
    </div>
</div>
    
@endsection
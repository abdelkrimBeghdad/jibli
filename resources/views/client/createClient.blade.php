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
            <div class="card-header">Create Customer</div>
            <div class="card-body">
            <form action="{{route('client.store')}}" method="post">
                @csrf
                    <div class="form-group row">
                        <label for="firsName" class="col-sm-2 col-form-label">First Name</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="firstName" id="firstName" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="lastName" id="lastName" >
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="address" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="address" id="address" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="phone" class="col-sm-2 col-form-label">phone</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="phone" id="phone" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="point" class="col-sm-2 col-form-label">point</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="point" id="point" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="email" class="col-sm-2 col-form-label">email</label>
                        <div class="col-sm-10">
                          <input type="email" class="form-control" name="email" id="email" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">password</label>
                        <div class="col-sm-10">
                          <input type="password" class="form-control" name="password" id="password" >
                        </div>
                    </div>
                     <button type="submit" class="btn btn-primary">submit</button>     
                </form>
            </div>
        </div>
    </div>
</div>
    
@endsection
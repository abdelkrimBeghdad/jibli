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
            <div class="card-header">Create Supplier</div>
            <div class="card-body">
            <form action="{{route('supplier.store')}}" method="post" enctype="multipart/form-data">
                @csrf
                    <div class="form-group row">
                        <label for="nameSupplier" class="col-sm-2 col-form-label">Name Supplier</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="nameSupplier" id="nameSupplier" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="nameCompany" class="col-sm-2 col-form-label">Name Company</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="nameCompany" id="nameCompany" >
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="addressCompany" class="col-sm-2 col-form-label">Address Company</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="addressCompany" id="addressCompany" >
                        </div>
                    </div>

                    
                    <div class="form-group row">
                        <label for="phoneCompany" class="col-sm-2 col-form-label">phone Company</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" name="phoneCompany" id="phoneCompany" >
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="descriptionCompany" class="col-sm-2 col-form-label">Description Company</label>
                        <div class="col-sm-10">
                          <input type="brand" class="form-control" name="descriptionCompany" id="descriptionCompany" >
                        </div>
                    </div>

                     <button type="submit" class="btn btn-primary">submit</button>     
                </form>
            </div>
        </div>
    </div>
</div>
    
@endsection
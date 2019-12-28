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
      
    <div class="row-content-center">
        <div class="card">
            <div class="card-header">List of Product</div>
            <div class="card-body">
                  <table class="table table-striped table-bordered dt-responsive nowrap" style="width:100%" id="tableClient" >
                    <thead>
                      <tr>
                          <th scope="col">id</th>                        
                          <th scope="col">code</th>
                          <th scope="col">name</th>
                          <th scope="col">nameCompany</th>
                          <th scope="col">description</th>
                          <th scope="col">category_id</th>
                          <th scope="col">quantity</th>
                          <th scope="col">brand</th>
                          <th scope="col">price</th>
                          <th scope="col">featured</th>
                          <th scope="col">Last updated</th>
                          <th scope="col">Actions</th>

                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($product as $item)
                        <tr>
                            <td scope="row">{{$item->id}}</td>
                            <td >{{$item->code}}</td  >                            
                            <td>{{$item->name}}</td>
                            <td>{{$item->nameCompany}}</td>
                            <td>{{$item->description}}</td>
                            {{-- <td>{{$item->category->name}}</td> --}}
                            <td>{{$item->category_name}}</td>
                            <td>{{$item->quantity}}</td>  
                            <td>{{$item->brand}}</td>
                            <td>{{$item->price}}</td>
                            <td>{{$item->featured}}</td> 
                            <td>{{ \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $item->updated_at)->diffForHumans() }}</td>
                            <td>
                                <a name="edit" id="edit" class="btn btn-primary" href="{{route('product.edit',$item->id)}}" role="button">Edit</a>
                                <form action="{{ route('product.destroy', $item->id)}}" method="post">
                                  @csrf
                                  @method('DELETE')
                                  <button class="btn btn-danger" type="submit">Delete</button>
                                </form>
                            </td>                                               
                        </tr>
                    @endforeach
                    
                    </tbody>
                  </table>

            </div>
        </div>
    </div>
</div>

@endsection

@section('javascript')
<script>
    $('#tableClient').DataTable({
      responsive: true
    }); 
</script>

@endsection

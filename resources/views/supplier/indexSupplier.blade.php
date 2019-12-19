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
      
    <div class="row-content-center">
        <div class="card">
            <div class="card-header">List of Supplier</div>
            <div class="card-body">
                  <table class="table table-striped table-bordered dt-responsive nowrap" style="width:100%" id="tableClient" >
                    <thead>
                      <tr>
                          <th scope="col">id</th>                        
                          <th scope="col">Name Supplier</th>
                          <th scope="col">Name Company</th>
                          <th scope="col">Address Company</th>
                          <th scope="col">Phone Company</th>
                          <th scope="col">Description Company</th>
                          <th scope="col">Last updated</th>
                          <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($supplier as $item)
                        <tr>
                            <td scope="row">{{$item->id}}</td>
                            <td>{{$item->nameSupplier}}</td>                            
                            <td>{{$item->nameCompany}}</td>
                            <td>{{$item->addressCompany}}</td>
                            <td>{{$item->phoneCompany}}</td>
                            <td>{{$item->descriptionCompany}}</td>  
                            <td>{{ \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $item->updated_at)->diffForHumans() }}</td>
                            <td>
                                <a name="edit" id="edit" class="btn btn-primary" href="{{route('supplier.edit',$item->id)}}" role="button">Edit</a>
                                <form action="{{ route('supplier.destroy', $item->id)}}" method="post">
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

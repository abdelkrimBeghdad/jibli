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
            <div class="card-header">List of Client</div>
            <div class="card-body">
                  <table class="table table-striped table-bordered dt-responsive nowrap" style="width:100%" id="tableClient" >
                    <thead>
                      <tr>
                        <th scope="col">num</th>                        
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Point</th>
                        <th scope="col">Email</th>
                        <th scope="col">password</th>
                        <th scope="col">Edite</th>
                        <th scope="col">Delete</th>

                      </tr>
                    </thead>
                    <tbody>
                    @foreach ($client as $item)
                        <tr>
                            <td scope="row">{{$item->id}}</td>
                            <td >{{$item->firstName}}</td>                            
                            <td>{{$item->lastName}}</td>
                            <td>{{$item->address}}</td>
                            <td>{{$item->phone}}</td>
                            <td>{{$item->point}}</td>  
                            <td>{{$item->email}}</td>
                            <td>{{$item->password}}</td>                                                 
                            <td>
                                <a name="edit" id="edit" class="btn btn-primary" href="{{route('client.edit',$item->id)}}" role="button">Edit</a>
                            </td>
                              <td>
                                <form action="{{ route('client.destroy', $item->id)}}" method="post">
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

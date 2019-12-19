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
            <div class="card-header">List of Category</div>
            <div class="card-body">
                  <table class="table table-striped table-bordered dt-responsive nowrap" style="width:100%" id="tableClient" >
                    <thead>
                      <tr>
                        <th scope="col">name</th>  
                        <th scope="col">Edit</th>                        
                        <th scope="col">Delete</th>                        

                      </tr>
                    </thead>
                    <tbody>
                    @foreach ($categorie as $item)
                        <tr>
                            <td>{{$item->name}}</td>                                                 
                            <td>
                                <a name="edit" id="edit" class="btn btn-primary" href="{{route('categorie.edit',$item->id)}}" role="button">Edit</a>
                            </td>
                              <td>
                                <form action="{{ route('categorie.destroy', $item->id)}}" method="post">
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

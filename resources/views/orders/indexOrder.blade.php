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
                          <th scope="col">OrderGenerale_id</th>
                          <th scope="col">user_id</th>
                          <th scope="col">order_id</th>
                          <th scope="col">product_id</th>
                          <th scope="col">name</th>
                          <th scope="col">price</th>
                          <th scope="col">quantity</th>
                          <th scope="col">detail</th>
                          <th scope="col">Last updated</th>
                          

                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($order as $item)
                        <tr>
                            <td scope="row">{{$item->id}}</td>
                            <td >{{$item->OrderGenerale_id}}</td  >                            
                            <td>{{$item->user_id}}</td>
                            <td>{{$item->order_id}}</td>
                            <td>{{$item->product_id}}</td>
                            {{-- <td>{{$item->category->name}}</td> --}}
                            <td>{{$item->name}}</td>
                            <td>{{$item->price}}</td>  
                            <td>{{$item->quantity}}</td>
                            
                            <td>
                              <a name="detail" id="detail" class="btn btn-success" href="" role="button">Detail</a>
                            
                             <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target-name="{{$item->OrderGenerale_id }}" data-target-id="{{ $item->id}}" data-target="#basicExampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade-lg" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog  modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
        abdelkrim
        <div class="form-group">
          <input class="form-control" name="id" type="text" id="pass_id">
          <input class="form-control" name="name" type="text" id="pass_name">

      </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                            </td>
                            <td>{{ \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $item->updated_at)->diffForHumans() }}</td>                                        
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


<script>
  $(document).ready(function () {
      $("#basicExampleModal").on("show.bs.modal", function (e) {
          var id = $(e.relatedTarget).data('target-id');
          var OrderGenerale_id = $(e.relatedTarget).data('target-name');

          $('#pass_id').val(id);
          $('#pass_name').val(OrderGenerale_id);
      });
  });

</script>
@endsection

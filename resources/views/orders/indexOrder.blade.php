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
                          <th scope="col">Order ID</th>  
                         {{--  <th >Name</th>
                          <th >Price</th>
                          <th >Quantity</th> --}}
                          <th >Status</th>
                          <th >Detail</th>
                          <th >Created In</th>
                          <th >Modified In</th>
                          

                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($order as $item)
                        <tr>
                            <td scope="row">{{$item->id}}</td>
                            
                           {{--  <td >
                              @foreach ($item->orders as $product)
                                  {{$product->name}}<br>
                              @endforeach  
                            </td  >  <td >
                              @foreach ($item->orders as $product)
                                  {{$product->price}}<br>
                              @endforeach  
                            </td  >  <td >
                              @foreach ($item->orders as $product)
                                  {{$product->quantity}}<br>
                              @endforeach  
                            </td  >   --}}
                            
                            <td>
                              @if ($item->state == 0)
                                No Delivred  
                              @elseif($item->state == 1)
                                Processing
                              @else 
                                Delivred 
                              @endif

                            </td>
                            <td>
                              @if ($item->state == 0)
                            <a href="{{ route('NoDelivred_order',$item->id)}}" class="btn btn-dark btn-xs disabled"><i class="fa fa-arrow-up"></i></a>
                                  
                              @elseif($item->state == 1)
                            <a href="{{route('Processing',$item->id)}}" class="btn btn-warning btn-xs disabled"><i class="fa fa-arrow-up"></i></a>
                              @else 
                            <a href="{{route('Delivred_order',$item->id)}}" class="btn btn-success btn-xs disabled"><i class="fa fa-arrow-up"></i></a>
                              @endif



                              <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#productModal{{ $item->id }}">
                                Detail
                              </button>        
                                
                           </td>
                            <td>{{ \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $item->created_at)->diffForHumans() }}</td>                                        
                            <td>{{ \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $item->updated_at)->diffForHumans() }}</td>                                        
                        
                          </tr>



                        {{-- Model --}}


                       

                    @endforeach
                    
                    </tbody>
                  </table>

                  @foreach ($order as $item)

                  <div class="modal fade" id="productModal{{ $item->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        
                        <table class="table table-dark">
                          <thead>
                            <tr>
                              <th scope="col">id</th>
                              <th>name</th>
                              <th>quantity</th>
                              <th>price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                              @foreach ($item->orders as $product)
                             {{$product->id}}<br>
                               @endforeach
                              </td> <td>
                               @foreach ($item->orders as $product)
                              {{$product->name}}<br> 
                               @endforeach
                              </td><td>
                               @foreach ($item->orders as $product)
                              {{$product->quantity}}<br>
                               @endforeach
                               <hr>Totale
                              </td> <td>
                               @foreach ($item->orders as $product)
                              {{$product->price}}<br>
                               @endforeach <hr>{{$item->priceTotale}}</td> 
                            </tr>
                            
                                    
                            </tbody>
                          
                             
                            
                        </table>

                          </div>
                          
                        <div class="modal-footer">
                          @if ($item->state == 0)
                          <a href="{{ route('Processing',$item->id)}}" type="button" role="button" class="btn btn-warning">Change To Processing</a>
                          @elseif($item->state == 1)
                          <a href="{{ route('Delivred_order',$item->id)}}" type="button" role="button" class="btn btn-success">Change To Delivred</a>
                          @else
                          <a href="{{ route('NoDelivred_order',$item->id)}}" type="button" role="button" class="btn btn-dark">Change To No Delivred</a>
                          @endif
                         
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div> 
                    </div>
                  </div>
                  @endforeach






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
  

</script>
@endsection

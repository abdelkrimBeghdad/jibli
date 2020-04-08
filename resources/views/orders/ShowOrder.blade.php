@extends('layouts.appAdmin')
@section('content')



<div class="card text-left">
<div class="card-header">
    <div class="row">
    <div class="col">Orders Number : {{ $order->id}}</div>
    <div class="col">User Id :  {{ $order->user_id}}</div>
     </div>
    </div>

  <div class="card-body">
   <table class="table">
<thead>
  
<tr>
  <th scope="col">id</th>
  <th>Product Id</th>
  <th>Product name</th>
  <th>Product Quantity</th>
  <th>Product number of Order</th>
</tr>
</thead>
<tbody>
  @foreach ($order->orders as $or)
<tr> 
<td>{{$or->id}}</td>
  <td>{{$or->product_id}}</td>
  <td>{{$or->name}}</td>
  <td>{{$or->quantity}}</td>
  <td>{{$order->nbrOrder}}</td>

   
</tr>
    @endforeach
</tbody>
</table>
<hr>

   
 
<div class="row"> 
    <div class="col-md-3 offset-md-5"><h3>Totale : </h3>
    </div>
    
    <div class="col-md-3 offset-md-0 ">
    <h3> <span class="badge badge-danger">{{ $order->priceTotale }} DA</span> <span class="caret"></span>
    </h3>
    
    </div>
  </div>
  </div>
  
</div>
 

<div class="modal-footer">
  @if ($order->state == 0)
  <a href="{{ route('Processing',$order->id)}}" type="button" role="button" class="btn btn-warning">Change To Processing</a>
  @elseif($order->state == 1)
  <a href="{{ route('Delivred_order',$order->id)}}" type="button" role="button" class="btn btn-success">Change To Delivred</a>
  @else
  <a href="{{ route('NoDelivred_order',$order->id)}}" type="button" role="button" class="btn btn-dark">Change To No Delivred</a>
  @endif

  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>

@endsection


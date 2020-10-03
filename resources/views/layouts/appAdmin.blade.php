<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js')  }}"defer ></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/appAdmin.css') }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.18/af-2.3.3/b-1.5.6/cr-1.5.0/fc-3.2.5/fh-3.1.4/kt-2.5.0/r-2.2.2/rg-1.1.0/rr-1.2.4/sc-2.0.0/sl-1.3.0/datatables.min.css"/>

    @yield('styles')
    <!-- Our Custom CSS -->
   

    <!-- Font Awesome JS -->
    
</head>

<body>

    <div class="wrapperAdmin">
        <!-- Sidebar  -->
        <nav id="sidebarAdmin">
            <div class="sidebarAdmin-header">
                <h3>Jibli Admin</h3>
                <strong>JIBLi</strong>
            </div>

            <ul class="list-unstyled components">
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-home"></i>
                        Client
                    </a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="{{route('client.index')}}">List Of Client</a>
                        </li>
                        <li>
                            <a href="{{route('client.create')}}">Create Client</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-copy"></i>
                        Product
                    </a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                    <a href="{{route('product.index')}}">List Of Products</a>
                                </li>
                                <li>
                                    <a href="{{route('product.create')}}">Create Products</a>
                                </li>
                    </ul>
                </li>
                <li>
                        <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                            <i class="fas fa-copy"></i>
                            category
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu1">
                                <li>
                                        <a href="{{route('categorie.index')}}">List Of Category</a>
                                    </li>
                                    <li>
                                        <a href="{{route('categorie.create')}}">Create Category</a>
                                    </li>
                        </ul>
                    </li>


                    <li>
                        <a href="#order" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                            <i class="fas fa-copy"></i>
                            Ordes
                        </a>
                        <ul class="collapse list-unstyled" id="order">
                                <li>
                                        <a href="{{route('orders.index')}}">List Of Orders</a>
                                    </li>
                                    
                        </ul>
                    </li>





                    <li>
                        <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                            <i class="fas fa-copy"></i>
                            Supplier
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu2">
                                <li>
                                        <a href="{{route('supplier.index')}}">List Of Supplier</a>
                                    </li>
                                    <li>
                                        <a href="{{route('supplier.create')}}">Create Supplier</a>
                                    </li>
                        </ul>
                    </li>    
                <li>
                    <a href="#">
                        <i class="fas fa-question"></i>
                        FAQ
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-paper-plane"></i>
                        Contact
                    </a>
                </li>
            </ul>

           
        </nav>

        <!-- Page Content  -->
        <div id="content">

            <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div class="container">
                        
                        <button type="button" id="sidebarCollapse" class="btn btn-info">
                                <i class="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left Side Of Navbar -->
                        <ul class="navbar-nav mr-auto">
    
                        </ul>
    
                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Authentication Links -->
                            @guest
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                                @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                    </li>
                                @endif
                            @else


                            
                         {{--   {{
                                  $orders = App\Orders::all()}}
                           
                            <h1>
                                {{$orders->unreadNotifications->count()}}
                            </h1> --}}
                            
                          

                           
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    <span class="badge badge-danger">{{ auth()->user()->unreadNotifications->count() }}</span> notification(s) <span class="caret"></span>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        @foreach (auth()->user()->unreadNotifications as $unreadNotification)
                                    <a href="{{route('showNotification',['order' =>$unreadNotification->data['ordersId'], 'notification' => $unreadNotification->id])}}" class="dropdown-item"><strong>
                                        {{$unreadNotification->data['firstNameUser']}}</strong> has an order </a>
                                        @endforeach
                                       </div> 
                                       </li>


                           

     
                            </li>






                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                        {{ Auth::user()->name }} <span class="caret"></span>
                                    </a>
    
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                           onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>
    
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                            @endguest
                        </ul>
                    </div>
                </div>
            </nav>

        <main class="py-4">
            @yield('content')
        </main>
        </div>
        
    </div>

    <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script
    src="https://code.jquery.com/jquery-3.4.1.js" 
    integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
    crossorigin="anonymous"></script>    <!-- Popper.JS -->
   
    <script type="text/javascript">
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebarAdmin').toggleClass('active');
            });
        });
    </script>


      <!-- Scripts -->
      <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
      <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
      <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
      <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
      <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.2.3/js/responsive.bootstrap4.min.js"></script>
      
      @yield('javascript')


</body>

</html>
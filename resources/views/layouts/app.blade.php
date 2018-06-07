<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src=https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.15/vue.js></script>
    <script src=https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js></script>
    <script src=https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.0.0-alpha.1/jspdf.plugin.autotable.js></script>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">



    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
 <div>
   <!-- <div class="container flop">
                  <h2 class="text-center test">Reflectie</h2>
                  <div id="bg">
                  </a>
                  </div>
          </div> -->
        <!-- Begin of navbar -->
<!--
         <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container">
                <a class="nav-item nav-link" href="{{ url('/') }}">
                  <img class="first-slide" src="{{asset('/images/home.svg')}} " alt="First slide">
                </a>
-->
                    <!-- Left Side Of Navbar -->


              <!--  <a class="nav-item nav-link active" href="{{ url('examples\create') }}">Add <span class="sr-only">(current)</span></a> -->
<!--
                <a class="nav-item nav-link" href="{{ url('examples') }}" ><img class="first-slide" src="{{asset('/images/memos.svg')}} " alt="First slide"></a>
                  <div class="cards">

                    <div id="card3">
                        <a class="nav-item nav-link" href="{{ url('reflectie') }}" ><img class="first-slide" src="{{asset('/images/tile-2.svg')}} " alt="First slide"></a>
                    </div>

                      <div id="card2">
                          <a class="nav-item nav-link" href="{{ url('reflectie') }}" ><img class="first-slide" src="{{asset('/images/tile-2.svg')}} " alt="First slide"></a>
                      </div>

                      <div id="card1">
                          <a class="nav-item nav-link" href="{{ url('reflectie') }}" ><img class="first-slide" src="{{asset('/images/tile-2.svg')}} " alt="First slide"></a>
                      </div>
                  </div>
                <a class="nav-item nav-link" href="#"><img class="first-slide" src="{{asset('/images/contacts.svg')}} " alt="First slide"></a>
                <a class="nav-item nav-link" href="{{ url('reflections\reflection') }}"><img class="first-slide" src="{{asset('/images/settings.svg')}} " alt="First slide"> </a>

             </div>
                </div>
            </div>
        </nav>
-->
        <main class="body">
            @yield('content')
        </main>
    </div>
</body>

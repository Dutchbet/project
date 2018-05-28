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

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
 <div>
{{--             <div class="container flop">
                  <h2 class="text-center test">Reflectie</h2>
                  <div id="bg">
                  </a>
                  </div>
          </div> --}}

        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container">

                <a class="nav-item nav-link" href="{{ url('/') }}">
                  <img class="first-slide" src="{{asset('/images/baseline-home-24px.svg')}} " alt="First slide">
                </a>



                    <!-- Left Side Of Navbar -->

             </button>

              <!--  <a class="nav-item nav-link active" href="{{ url('examples\create') }}">Add <span class="sr-only">(current)</span></a> -->
                <a class="nav-item nav-link" href="{{ url('examples') }}" ><img class="first-slide" src="{{asset('/images/baseline-event_note-24px.svg')}} " alt="First slide"></a>
                <a class="nav-item nav-link" href="{{ url('reflectie') }}" class="active"><img class="first-slide" src="{{asset('/images/baseline-home-24px.svg')}} " alt="First slide"></a>
                <a class="nav-item nav-link" href="#"><img class="first-slide" src="{{asset('/images/baseline-contacts-24px.svg')}} " alt="First slide"></a>
                <a class="nav-item nav-link" href="{{ url('reflections\reflection') }}"><img class="first-slide" src="{{asset('/images/baseline-settings-20px.svg')}} " alt="First slide"> </a>
</div>
             </div>
            </div>
        </nav>

        <main class="body">
            @yield('content')
        </main>
    </div>
</body>

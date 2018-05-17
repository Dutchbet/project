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
            <div class="container flop">
                  <h2 class="text-center test">Reflectie</h2>
                  <div id="bg">Vraag 1</a>
                  </div>
          </div>

        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container">
                <a class="nav-item nav-link" href="{{ url('/') }}">
                  <img class="first-slide" src="{{asset('/images/baseline-home-24px.svg')}} " alt="First slide">
                </a>



                    <!-- Left Side Of Navbar -->

             </button>

              <!--  <a class="nav-item nav-link active" href="{{ url('examples\create') }}">Add <span class="sr-only">(current)</span></a> -->
                <a class="nav-item nav-link active" href="{{ url('examples') }}"><img class="first-slide" src="{{asset('/images/baseline-event_note-24px.svg')}} " alt="First slide"></a>
                <a class="nav-item nav-link" href="#"><img class="first-slide" src="{{asset('/images/baseline-home-24px.svg')}} " alt="First slide"></a>
                <a class="nav-item nav-link disabled" href="#"><img class="first-slide" src="{{asset('/images/baseline-contacts-24px.svg')}} " alt="First slide"></a>
                <a class="nav-item nav-link" href="{{ url('reflections\reflection') }}"><img class="first-slide" src="{{asset('/images/baseline-settings-20px.svg')}} " alt="First slide"> </a>

             </div>
                    <!-- Right Side Of Navbar -->
                    <!-- Disabled log out field
                    <ul class="navbar-nav ml-auto">
                         Authentication Links
                        @guest
                            <li><a class="nav-link" href="{{ route('login') }}">{{ __('Inloggen') }}</a></li>
                            <li><a class="nav-link" href="{{ route('register') }}">{{ __('Registreren') }}</a></li>
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Uitloggen') }}
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                  -->
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>

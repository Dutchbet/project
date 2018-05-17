<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: 	#B8B8B8;
                color: 	#000000;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {

            }
            .vraag1 {
                width: 297px;
                height: 249px;
                border-radius: 4px;
                box-shadow: 0 2px 8px 0 rgba(190, 233, 250, 0.32);
                background-color: #fdf2fa;
                border: solid 1px #f3c9e7;
            }
            .vraag2 {
                position:relative;
                top: 90px;
                right: 10px;
                transform:rotateZ(15deg);
                width: 297px;
                height: 88px;
                border-radius: 4px;
                background-image: linear-gradient(to bottom, #d954b4, #e177c3);
                border: solid 1px #d00899;
            }
            .vraag3 {
                position:relative;
                top: 140px;
                right: 35px;
                transform:rotateZ(30deg);
                max-width: 250px;
                width: 297px;
                height: 88px;
                border-radius: 4px;
                background-image: linear-gradient(to bottom, #d954b4, #e177c3);
                border: solid 1px #d00899;
                
            }
            .vraag4 {
                position:relative;
                top: 190px;
                right: 120px;
                transform:rotateZ(60deg);
                max-width: 250px;
                width: 297px;
                height: 88px;
                border-radius: 4px;
                background-image: linear-gradient(to bottom, #d954b4, #e177c3);
                border: solid 1px #d00899;
                
            }
            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Inloggen</a>
                        <a href="{{ route('register') }}">Registreren</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                  <div class="vraag1">
                    Wat heb je gezien en gehoord?
                  </div>
                  <div class="vraag2">
                  wat heb jij daarbij gedacht en gevoeld ?
                  </div>
                  <div class="vraag3">
                 Welke andere waarden zijn er voor jou of voor andere in de situatie in het geding??
                </div>
                <div class="vraag4">
                        Wie speelt welke rol en klopt dat volgens jou?
                </div>
        </div>
    </body>
</html>

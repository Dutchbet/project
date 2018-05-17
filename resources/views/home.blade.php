@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="utf-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <title>Carousel - CSS pointer events</title>
                      <link rel="stylesheet" type="text/css" href="furniture.css">
                      <style type="text/css">
                        .carouselbox {
                          font-family: helvetica,sans-serif;
                          font-size: 14px;
                          width: 100px;
                          position: relative;
                          margin: 1em;
                          border: 1px solid #ccc;
                          box-shadow: 2px 2px 10px #ccc;
                          overflow: hidden;
                        }
                        .content {
                          margin: 0;
                          padding: 0;
                        }
                        .content li {
                          font-size: 100px;
                          margin: 0;
                          padding: 0;
                          width: 100%;
                          list-style: none;
                          text-align: center;
                          z-index: 2;
                        }
                        .active {
                          height: 130px;
                        }
                        .carouselbox button {
                          border: none;
                          visibility: hidden;
                        }
                        .active button {
                          visibility: visible;
                        } 
                        .offscreen {
                          position: absolute;
                          left: -2000px;
                        }
                        .active .buttons {
                          padding: 5px 0;
                          background: #eee;
                          text-align: center;
                          z-index: 10;
                          position: relative;
                        }
                        .active li a {
                          color: #369;
                          text-decoration: none;
                        }
                        .active li {
                          position: absolute;
                          top: 30px;
                          pointer-events: none;
                          opacity: 0;
                          transform: scale(0);
                          transition: 1s;
                        }
                        .active li.current {
                          top: 30px;
                          pointer-events: auto;
                          opacity: 1;
                          transform: scale(1);
                          transition: 1s;
                        }
                      </style>
                    </head>
                    
                    <body>
                
                    
                    
                    </body>
                    </html>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
@endsection

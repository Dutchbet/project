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
                    <div class="carouselbox">
                      <div class="buttons">
                        <button class="prev">
                           ◀ <span class="offscreen">Previous</span>
                        </button>
                        <button class="next">
                          <span class="offscreen">Next</span> ▶ 
                        </button>
                      </div>
                      <ol class="content">
                        <li><a href="http://christianheilmann.com">1</a></li>
                        <li><a href="http://status.modern.ie">2</a></li>
                        <li><a href="http://developer.mozilla.org">3</a></li>
                        <li><a href="http://imgur.com/aww/">4</a></li>
                      </ol>
                    </div>
                    
                    
                    
                    <script>
                    carousel = (function(){
                      if (!document.querySelector || 
                          !('classList' in document.body)) {
                        return false;
                      }
                      // Read necessary elements from the DOM once
                      var box = document.querySelector('.carouselbox');
                      var next = box.querySelector('.next');
                      var prev = box.querySelector('.prev');
                      // Define the global counter, the items and the 
                      // current item 
                      var counter = 0;
                      var items = box.querySelectorAll('.content li');
                      var amount = items.length;
                      var current = items[0];
                      // hide all elements and apply the carousel styling
                      box.classList.add('active');
                      // navigate through the carousel
                      function navigate(direction) {
                        // hide the old current list item 
                        current.classList.remove('current');
                        
                        // calculate th new position
                        counter = counter + direction;
                        // if the previous one was chosen
                        // and the counter is less than 0 
                        // make the counter the last element,
                        // thus looping the carousel
                        if (direction === -1 && 
                            counter < 0) { 
                          counter = amount - 1; 
                        }
                        // if the next button was clicked and there 
                        // is no items element, set the counter 
                        // to 0
                        if (direction === 1 && 
                            !items[counter]) { 
                          counter = 0;
                        }
                        // set new current element 
                        // and add CSS class
                        current = items[counter];
                        current.classList.add('current');
                      }
                      // add event handlers to buttons
                      next.addEventListener('click', function(ev) {
                        navigate(1);
                      });
                      prev.addEventListener('click', function(ev) {
                        navigate(-1);
                      });
                      // show the first element 
                      // (when direction is 0 counter doesn't change)
                      navigate(0);
                    })();
                    </script>
                    </body>
                    </html>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
@endsection

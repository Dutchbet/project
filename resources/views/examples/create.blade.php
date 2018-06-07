@extends('layouts.app')
@section('content')   

    <div class="container">
      <h2>Add an example</h2><br  />
      @if ($errors->any())
      <div class="alert alert-danger">
          <ul>
              @foreach ($errors->all() as $error)
                  <li>{{ $error }}</li>
              @endforeach
          </ul>
      </div><br />
      @endif
      @if (\Session::has('success'))
      <div class="alert alert-success">
          <p>{{ \Session::get('success') }}</p>
      </div><br />
      @endif
      <form method="post" action="{{url('examples')}}">
          <div class="row">  
        <div class="col-md-4"></div>
          <div class="form-group col-md-4">
            <label for="titel">Titel van de reflectie</label>
            <input type="text" class="form-control" name="titel">
          </div>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
              <div class="form-group col-md-4">
                <label for="introtext">Geef hier een korte introductie tot de casus</label>
                <input type="textbox" class="form-control" name="introtext">
              </div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                  <div class="form-group col-md-4">
                    <label for="introtext">Beschrijf hier de situatie</label>
                    <textarea class="form-control" rows="5" id="situatietext" name="situatietext"></textarea>
                  </div>
                </div>  
        <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag1antwoord">vraag 1 antwoord</label>
              <input type="text" class="form-control" name="vraag1antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag2antwoord">vraag 2 antwoord</label>
              <input type="text" class="form-control" name="vraag2antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag3antwoord">vraag 3 antwoord</label>
              <input type="text" class="form-control" name="vraag3antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag4antwoord">vraag 4 antwoord</label>
              <input type="text" class="form-control" name="vraag4antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag5antwoord">vraag 5 antwoord</label>
              <input type="text" class="form-control" name="vraag5antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag6antwoord">vraag 6 antwoord</label>
              <input type="text" class="form-control" name="vraag6antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag7antwoord">vraag 7 antwoord</label>
              <input type="text" class="form-control" name="vraag7antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag8antwoord">vraag 8 antwoord</label>
              <input type="text" class="form-control" name="vraag8antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag9antwoord">vraag 9 antwoord</label>
              <input type="text" class="form-control" name="vraag9antwoord">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag10antwoord">vraag 1o antwoord</label>
              <input type="text" class="form-control" name="vraag10antwoord">
            </div>
          </div>
        </div>
             {{csrf_field()}}
        <div class="row">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4">
            <button type="submit" name="submit" class="btn btn-success" style="margin-left:38px">Add example</button>
          </div>
        </div>
      </form>
      <div class="flex-center position-ref full-height">
          <form action="{{ route('sendmail') }}" method="post">
              <input type="email" name="mail" placeholder="mail address">
              <input type="text" name="title" placeholder="title">
              <button type="submit">Send me a Mail</button>
              {{ csrf_field() }}
          </form>
      </div>
    </div>
    @endsection
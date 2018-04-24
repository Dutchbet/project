@extends('layouts.app')
@section('content')
    <div class="container"> 
      <form method="post" action="{{action('ExampleController@update', $id)}}">
        <input name="_method" type="hidden" value="PATCH">
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
      {{csrf_field()}}
      </form>
    </div>
      @if ($errors->any())
      <div class="alert alert-danger">
          <ul>
              @foreach ($errors->all() as $error)
                  <li>{{ $error }}</li>
              @endforeach
          </ul>
      </div><br />
      @endif
@endsection
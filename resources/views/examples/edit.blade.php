@extends('layouts.app')
@section('content')
@isset($examples)
    <div class="container"> 
      <form method="post" action="{{action('ExampleController@update', $id)}}">
        <input name="_method" type="hidden" value="PATCH">
        <div class="row">
            <div class="col-md-4"></div>
              <div class="form-group col-md-4">
                <label for="titel">Titel van de reflectie</label>
                <input type="text" class="form-control" name="titel" value="{{$examples['titel']}}">
              </div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                  <div class="form-group col-md-4">
                    <label for="introtext">Geef hier een korte introductie tot de casus</label>
                    <input type="text" class="form-control" name="introtext" value="{{$examples['introtext']}}">
                  </div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                      <div class="form-group col-md-4">
                        <label for="introtext">Beschrijf hier de situatie</label>
                        <input type="situatietext" class="form-control" name="situatietext" value="{{$examples['situatietext']}}">
                      </div>
                    </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag1antwoord">vraag 1 antwoord</label>
              <input type="text" class="form-control" name="vraag1antwoord" value="{{$examples['vraag1antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag2antwoord">vraag 2 antwoord</label>
              <input type="text" class="form-control" name="vraag2antwoord" value="{{$examples['vraag2antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag3antwoord">vraag 3 antwoord</label>
              <input type="text" class="form-control" name="vraag3antwoord" value="{{$examples['vraag3antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag4antwoord">vraag 4 antwoord</label>
              <input type="text" class="form-control" name="vraag4antwoord" value="{{$examples['vraag4antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag5antwoord">vraag 5 antwoord</label>
              <input type="text" class="form-control" name="vraag5antwoord" value="{{$examples['vraag5antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag6antwoord">vraag 6 antwoord</label>
              <input type="text" class="form-control" name="vraag6antwoord" value="{{$examples['vraag6antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag7antwoord">vraag 7 antwoord</label>
              <input type="text" class="form-control" name="vraag7antwoord" value="{{$examples['vraag7antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag8antwoord">vraag 8 antwoord</label>
              <input type="text" class="form-control" name="vraag8antwoord" value="{{$examples['vraag8antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag9antwoord">vraag 9 antwoord</label>
              <input type="text" class="form-control" name="vraag9antwoord" value="{{$examples['vraag9antwoord']}}">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="vraag10antwoord">vraag 1o antwoord</label>
              <input type="text" class="form-control" name="vraag10antwoord" value="{{$examples['vraag10antwoord']}}">
            </div>
          </div>
      {{csrf_field()}}
      <div class="form-group col-md-4">
     <button type="submit" class="btn btn-success" style="margin-left:38px">Update</button>
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
      @endisset
      @endif
@endsection
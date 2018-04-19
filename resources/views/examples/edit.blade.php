@extends('layouts.app')
@section('content')
    <div class="container"> 
      <form method="post" action="{{action('ExampleController@update', $id)}}">
        <input name="_method" type="hidden" value="PATCH">
        <div class="row">

          <div class="col-md-4"></div>
          <div class="form-group col-md-4">
            <label for="name">title:</label>
            <input type="text" class="form-control" name="title" value="{{$examples->title}}">
          </div>
        </div>

        <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="body">body:</label>
              <input type="body" class="form-control" name="body" value="{{$examples->body}}">
            </div>
          </div>
        </div>

        {{csrf_field()}}
        <div class="row">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4">
<button type="submit" name="status" value="Available" class="btn btn-success form-control" onClick="return validate()"><i class="fa fa-fw fa-thumbs-o-up"></i> Publish</button>
          </div>
        </div>
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
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
            <label for="title">Title:</label>
            <input type="text" class="form-control" name="title">
          </div>
        </div>
        <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="body">body:</label>
              <input type="text" class="form-control" name="body">
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
    </div>

@endsection
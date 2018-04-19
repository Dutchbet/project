@extends('layouts.app')
@section('content')
  <body>
    <div class="container">
    <br />
    @if (\Session::has('success'))
      <div class="alert alert-success">
        <p>{{ \Session::get('success') }}</p>
      </div><br />
     @endif
    <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        <th colspan="2">Action</th>
      </tr>
    </thead>
    <tbody>
      @foreach($examples as $example)
      <tr>
        <td>{{$example['id']}}</td>
        <td>{{$example['Title']}}</td>
        <td>{{$example['Body']}}</td>
        <td><a href="{{action('ExampleController@edit', $example['id'])}}" class="btn btn-warning">Edit</a></td>
        <td>
          <form action="{{action('ExampleController@destroy', $example['id'])}}" method="post">
            {{csrf_field()}}
            <input name="_method" type="hidden" value="DELETE">
            <button class="btn btn-danger" type="submit">Delete</button>
          </form>
        </td>
      </tr>
      @endforeach
    </tbody>
  </table>
  </div>
@endsection

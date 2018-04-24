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
    <table class="table-responsive">
    <tbody>
      @foreach($examples as $example)
      <tr>
        <th> Vraag 1 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag1antwoord']}}</td>
      </tr>
      <tr>
        <th> Vraag 2 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag2antwoord']}}</td>
      </tr>      
      <tr>
        <th> Vraag 3 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag3antwoord']}}</td>
      </tr>      
      <tr>
        <th> Vraag 4 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag4antwoord']}}</td>
      </tr>            
      <tr>
        <th> Vraag 5 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag5antwoord']}}</td>
      </tr>      
      <tr>
        <th> Vraag 6 antwoord</th>
      </tr>
        <td>{{$example['vraag6antwoord']}}</td>
      </tr>
      <tr>
        <th> Vraag 7 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag7antwoord']}}</td>
      </tr>
      <tr>
        <th> Vraag 8 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag8antwoord']}}</td>
      </tr>
      <tr>
        <th> Vraag 9 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag9antwoord']}}</td>
      </tr>
      <tr>
        <th> Vraag 10 antwoord</th>
      </tr>
      <tr>
        <td>{{$example['vraag10antwoord']}}</td>
      </tr>
      <tr>
        <td>  <a href="{{action('ExampleController@edit', $example['id'])}}" class="btn btn-warning">Edit</a></td>
          <form action="{{action('ExampleController@destroy', $example['id'])}}" method="post">
            {{csrf_field()}}
            <input name="_method" type="hidden" value="DELETE">
           <td> <button class="btn btn-danger" type="submit">Delete</button></td>
          </form>
      </tr>
      @endforeach
    </tbody>
  </table>
  </div>
@endsection

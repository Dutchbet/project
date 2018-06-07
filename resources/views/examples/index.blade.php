@extends('layouts.app')
@section('content')
  <body>
    <div class="container">
    <a href="{{ url('examples\create') }}" class="btn btn-warning">Nieuw voorbeeld</a>
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
        <td><b>{{$example['titel']}}</b></td>
      </tr>
      <tr>
        <td>{{$example['introtext']}}</td>
      </tr>
      <tr>
          <td>{{$example['situatietext']}}</td>
      </tr>  
      <tr>
        <th> Wat heb je gezien en gehoord?</th>
      </tr>
      <tr>
        <td>{{$example['vraag1antwoord']}}</td>
      </tr>
      <tr>
        <th> wat heb jij daarbij gedacht en gevoeld ?</th>
      </tr>
      <tr>
        <td>{{$example['vraag2antwoord']}}</td>
      </tr>      
      <tr>
        <th> Wat raakt je in de situatie, welke waarde is voor jou in het geding ?</th>
      </tr>
      <tr>
        <td>{{$example['vraag3antwoord']}}</td>
      </tr>      
      <tr>
        <th> Welke andere waarden zijn er voor jou of voor andere in de situatie in het geding?</th>
      </tr>
      <tr>
        <td>{{$example['vraag4antwoord']}}</td>
      </tr>            
      <tr>
        <th>Wie speelt welke rol en klopt dat volgens jou?</th>
      </tr>
      <tr>
        <td>{{$example['vraag5antwoord']}}</td>
      </tr>      
      <tr>
        <th>Wie heeft welk belang en wlke tegenstellingen zijn daarin?</th>
      </tr>
        <td>{{$example['vraag6antwoord']}}</td>
      </tr>
      <tr>
        <th>Formuleer je gewetensvraag, Begin met: moet..? Of: mag...?</th>
      </tr>
      <tr>
        <td>{{$example['vraag7antwoord']}}</td>
      </tr>
      <tr>
        <th>Zijn er nog meer gewetensvragen te formuleren?</th>
      </tr>
      <tr>
        <td>{{$example['vraag8antwoord']}}</td>
      </tr>
      <tr>
        <th>Welke vragen zijn nog niet beantwoord?</th>
      </tr>
      <tr>
        <td>{{$example['vraag9antwoord']}}</td>
      </tr>
      <tr>
        <th>Welke stappen ga je in welke volgorde zetten?</th>
      </tr>
      <tr>
        <td>{{$example['vraag10antwoord']}}</td>
      </tr>
      <tr>
        <td><a href="{{action('ExampleController@edit', $example['id'])}}" class="btn btn-warning">Edit</a></td>
        <td>  <form action="{{action('ExampleController@destroy', $example['id'])}}" method="post">
            {{csrf_field()}}
            <input name="_method" type="hidden" value="DELETE">
            <button class="btn btn-danger" type="submit">Delete</button></td>
          </form>
      </tr>



      @endforeach
    </tbody>
  </table>
  </div>
@endsection

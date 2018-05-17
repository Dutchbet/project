@extends('layouts.app')

@section('title', 'Reflectie' . {{$post->title}} . 'Post Page')
@section('contents')
<h3>{{$post->title}}</h3>
<p>{{$post->body}}</p>
@endsection



<div class="container">
  <h2>Reflectie test</h2><br  />
  @if ($errors->any())

  <div class="alert alert-danger">
      <ul>
          @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
          @endforeach
      </ul>
  </div>
  @endif


  @if (\Session::has('success'))
  <div class="alert alert-success">
      <p>{{ \Session::get('success') }}</p>
  </div><br />
  @endif

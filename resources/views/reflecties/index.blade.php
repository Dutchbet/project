@extends('layouts.app')

@section('content')
<div id="app">
<Reflectie>
</Reflectie>
@include('waarden/waarden')
<script src="{{ asset('js/app.js') }}"></script>
@endsection

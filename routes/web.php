<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/profile/{username}', 'ProfileController@show')->name('profile.show');
Route::resource('examples','ExampleController');
Route::get('/examples/overview', 'ExampleController@overview')->name('examples_overview');
<<<<<<< HEAD
Route::post('/Reflecties/nieuw', 'ReflectieController@create');
Route::get('reflecties/overzicht', 'ReflectieController@overzicht')->name('reflectie_overzicht');

=======
Route::get('/reflections/overview', 'ReflectionController@overview')->name('reflections_overview');
>>>>>>> de6a9e0c30ec9614a490f72d46ac7b646cc1265b

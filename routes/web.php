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
    return view('reflectie');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/profile/{username}', 'ProfileController@show')->name('profile.show');
Route::resource('examples','ExampleController');
Route::get('/examples/overview', 'ExampleController@overview')->name('examples_overview');
Route::get('/reflectie', 'ReflectieController@index')->where('any', '.*');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/sendmail', function (\Illuminate\Http\Request $request, \Illuminate\Mail\Mailer $mailer) {
    $mailer
        ->to($request->input('mail'))
        ->send(new \App\Mail\VerzendReflecties($request->input('title')));
    return redirect()->back();
})->name('sendmail');

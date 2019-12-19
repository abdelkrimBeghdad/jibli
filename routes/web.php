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



Route::get('/home', 'HomeController@index')->name('home');
 
Route::get('/Admin', function () {
    return view('layouts.appAdmin');
});




Route::prefix('Admin')->group(function () {
    Route::resource('/client','ClientController');
    Route::resource('product','ProductController');
    Route::resource('categorie','CategorieController');
    Route::resource('supplier','SupplierController');
    Auth::routes();

});
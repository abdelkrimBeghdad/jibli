<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

  Route::resource('product','Api\productController');

  Route::get('categorie', 'Api\productController@indexApi');

Route::middleware('jwt.auth')->group( function(){
 
  

} );

Route::group([

    'middleware' => 'api',
    

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::patch('update', 'AuthController@update');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::post('order', 'OrderController@store');
  Route::get('ListeOrders/{id}', 'OrderController@ListeOfOrdersOfClientFrontend');


});
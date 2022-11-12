<?php
namespace Database\Facades;

use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    $results = DB::select("SELECT * FROM users");
    var_dump($results);
    return $router->app->version();
});

$router->get('/posts', function () use ($router) {
    $results = DB::select("SELECT * FROM posts");
    return response()->json($results);
});

$router->get('/posts/{id}', function ($id) use ($router) {
    $results = DB::select("SELECT * FROM posts where id = '{$id}'");
    return response()->json($results);
});

$router->get('/profile', function () {
    return response()->json(
        [
        'ten' => 'le hong son',
         'lop' => 'C3A3131', 
        'image'=> 'https://photo-baomoi.bmcdn.me/w700_r16x9/2022_11_08_146_44211969/443151c8608589dbd094.jpg'
]);
});

$router->post('/hello', function () {
    return response()->json(['name' => 'Abigail', 'state' => 'CA']);
});

$router->get('user/{id}', function ($id) {
    return 'welcome to '.$id;
});
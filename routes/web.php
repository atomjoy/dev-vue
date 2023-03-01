<?php

use Illuminate\Support\Facades\Route;
use Webi\Http\Controllers\WebiActivate;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Laravel
Route::get('/welcome', function () {
	return view('welcome');
})->name('welcome');

// Laravel account activation
// Route::get('/activate/{id}/{code}', [WebiActivate::class, 'index'])->middleware(['webi-locale']);

// Vue
Route::get('/', function () {
	return view('vueon::vue');
})->name('homepage');

// Vue
Route::get('/login', function () {
	return view('vueon::vue');
})->name('login');

// Vue all routes
Route::fallback(function () {
	return view('vueon::vue');
});

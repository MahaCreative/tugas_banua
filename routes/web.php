<?php

use App\Http\Controllers\Blog\{ArticleControler, CategoryController};
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TugasController;
use App\Models\TugasCoreldraw;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    $tugas = TugasCoreldraw::all();
    return Inertia::render('Blog/FrontUser/Home/Index', compact('tugas'));
})->name('home');

Route::get('tugas', [TugasController::class, 'index']);
Route::get('tugas/{slug}', [TugasController::class, 'view'])->name('view-tugas');
Route::post('tugas/', [TugasController::class, 'store'])->name('view-store');


<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Postscontroller;

use App\Http\Controllers\AlunosController;

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
// Route::group(['middleware' => ['TokenMiddleware']], function () {
// });


// Route::get('/', [Postscontroller::class, 'index']);
// Route::Post('/', [Postscontroller::class, 'cadastrar']);
// Route::get('/{id}', [Postscontroller::class, 'buscar']);

Route::Post('/aluno', [AlunosController::class,'cadastrar']);
Route::Put('/aluno', [AlunosController::class,'editar']);
Route::Delete('/aluno/{id}', [AlunosController::class,'deletar']);
Route::get('/aluno', [AlunosController::class,'todos']);
Route::get('/aluno/{id}' , [AlunosController::class,'visualizar']);
Route::get('/buscar', [AlunosController::class,'buscar']);

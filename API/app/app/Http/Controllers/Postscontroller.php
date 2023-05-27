<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Participante;


class Postscontroller extends Controller
{
    public function index(){
        return response()->json([
            "Teste"
        ]);
    }

    public function buscar($id){

        $participante = Participante::find($id);

        if(!$participante){
            return response()->json([
                "messege" => "Participante não encontrado."
            ]);
        }

        return response()->json([
            "data"=> $participante
        ],200);
    }

    public function cadastrar(Request $request){
        $nome = $request->input('nome');
        $email = $request->input('email');

        $participante = new Participante();
        $participante->nome = $nome;
        $participante->email = $email;
        $participante->save();

        return response()->json([
            "data"=> $participante
        ],201);
    }
}

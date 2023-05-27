<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Aluno;


class AlunosController extends Controller
{
    public function cadastrar(Request $request) {

        $nome = $request->input('nome');
        $turno = $request->input('turno');

        $aluno = new Aluno();
        $aluno->nome = $nome;
        $aluno->turno = $turno;
        $aluno->save();

        return response()->json([
            "data" => $aluno
        ], 201);


    }

    public function visualizar($id){
        $aluno = Aluno::find($id);

        if (!$aluno){
            return response()->json([
                "message" => "Aluno não encontrado"
            ],404);
        }

        return response()->json([
            "data" => $aluno
        ],200);

    }

    public function todos(){
        $alunos = Aluno::all();

        return response()->json([
            "data" => $alunos
        ],200);
    }

    public function editar(Request $request){
        $nome = $request->input('nome');
        $turno = $request->input('turno');
        $id= $request->input('id');

        $aluno = Aluno::find($id);
        $aluno->nome = $nome;
        $aluno->turno = $turno;
        $aluno->save();


        return response()-> json([
            "data" => $aluno
        ],200);

    }

    public function deletar($id){
        $aluno = Aluno::find($id);
        $aluno->delete();

        return response()->json([
            "message" => "Aluno removido"

        ]);
    }

    public function buscar(Request $request){
        $termo = $request->query("termo");

        $alunos=Aluno::where("turno","=",$termo)->get();

        return response()->json([
            "message" => $alunos
        ]);

    }

}

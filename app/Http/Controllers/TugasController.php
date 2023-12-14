<?php

namespace App\Http\Controllers;

use App\Models\FormTugasSiswa;
use App\Models\TugasCoreldraw;
use Illuminate\Http\Request;

class TugasController extends Controller
{
    public function index(Request $request){
        
        return inertia('Tugas/View');
    }
     public function view(Request $request, $slug){
        $tugas = TugasCoreldraw::with('formTugas')->where('slug', $slug)->first();
        return inertia('Tugas/View', compact('tugas'));
    }

    public function store(Request $request){
        // dd($request->all());
        $attr = $request->validate([
            'nama_siswa' => 'required',
            'asal_sekolah' => 'required',
            'foto_tugas' => 'required|mimes:png,jpeg,jpg',
        ]);

        $attr['foto_tugas'] = $request->file('foto_tugas')->store('img/tugas');
        $attr['tugas_coreldraw_id'] = $request->id;
        $tugas = FormTugasSiswa::create($attr);
    }
}

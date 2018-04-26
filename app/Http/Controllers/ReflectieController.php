<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReflectieController extends Controller
{
    public function overzicht()
    {
        $examples = Examples::all()->toArray();
        return view('examples.overzicht', compact('examples'));
    }
}

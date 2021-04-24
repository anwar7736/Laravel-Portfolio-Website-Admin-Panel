<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Visitor;

class VisitorController extends Controller
{
    function VisitorIndex()
    {
    	$visitor = Visitor::all();
    	
    	return view('Visitor', compact('visitor'));
    }
}

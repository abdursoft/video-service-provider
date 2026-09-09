<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PlayerController extends Controller
{
    // show user players 
    public function index(){
        $players = auth()->user()->players()->get();
        return Inertia::render('Players/Index', [
            'players' => $players,
        ]);
    }

    // create user player 
    public function create(){
        return Inertia::render('EmbedView');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Enum;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index()
    {
        //dd(Todo::orderBy('id', 'desc')->get());

        return Inertia::render('Todos/Index', [
            'todo' => Todo::orderBy('id', 'desc')->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'due_date' => ['required', 'date']
        ]);

        Todo::create([
            'title' => $request->title,
            'priority' => $request->priority,
            'due_date' => $request->due_date,
        ]);

        return to_route('todos.index');
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => ['required', 'numeric', 'integer'],
        ]);

        Todo::where('id', $request->id)
        ->update(['status' => 'done']);

        return to_route('todos.index');
    }

    public function edit(Request $request)
    {
        $request->validate([
            'id' => ['required', 'numeric', 'integer'],
            'title' => ['required', 'string', 'max:255'],
            'due_date' => ['required', 'date']
        ]);

        Todo::where('id', $request->id)
        ->update([
            'title' => $request->title,
            'priority' => $request->priority,
            'due_date' => $request->due_date,
        ]);

        return to_route('todos.index');
    }
}

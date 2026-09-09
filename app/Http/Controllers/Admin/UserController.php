<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
            ->when($request->search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })
            ->when($request->status, function ($query, $status) {
                $query->where('status', $status);
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'filters' => [
                'search' => $request->search,
                'status' => $request->status,
            ],
        ]);
    }


    public function create()
    {
        return Inertia::render('Admin/Users/Create', [
            'roles' => [
                'admin',
                'user',
            ],
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'email' => [
                'required',
                'email',
                'max:255',
                'unique:users,email',
            ],

            'password' => [
                'required',
                'string',
                'min:8',
                'confirmed',
            ],

            'role' => [
                'nullable',
                'string',
                'in:admin,user',
            ],

            'status' => [
                'required',
                'in:active,banned',
            ],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'status' => $validated['status'],
        ]);

        // If using Spatie Permission
        if (!empty($validated['role'])) {
            $user->assignRole($validated['role']);
        }

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User created successfully.');
    }


    public function show(User $user)
    {
        return Inertia::render('Admin/Users/Show', [
            'user' => $user,
        ]);
    }


    public function edit(User $user)
    {
        return Inertia::render('Admin/Users/Edit', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'status' => $user->status,
                'role' => $user->roles->first()?->name,
            ],

            'roles' => [
                'admin',
                'user',
            ],
        ]);
    }


    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'email' => [
                'required',
                'email',
                'max:255',
                'unique:users,email,' . $user->id,
            ],

            'password' => [
                'nullable',
                'string',
                'min:8',
                'confirmed',
            ],

            'role' => [
                'nullable',
                'string',
                'in:admin,user',
            ],

            'status' => [
                'required',
                'in:active,banned',
            ],
        ]);

        $data = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'status' => $validated['status'],
        ];

        if (!empty($validated['password'])) {
            $data['password'] = Hash::make(
                $validated['password']
            );
        }

        $user->update($data);

        // If using Spatie Permission
        if (isset($validated['role'])) {
            $user->syncRoles(
                $validated['role']
                    ? [$validated['role']]
                    : []
            );
        }

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User updated successfully.');
    }


    public function destroy(User $user)
    {
        if ($user->id === auth()->id()) {
            return back()->withErrors([
                'user' => 'You cannot delete your own administrator account.',
            ]);
        }

        $user->delete();

        return back()->with('success', 'User deleted successfully.');
    }
}

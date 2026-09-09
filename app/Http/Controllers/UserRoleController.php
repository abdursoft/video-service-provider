<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserRoleController extends Controller
{
    public function makeAdmin()
    {
        $user = User::findOrFail(1);

        $user->assignRole('admin');

        return response()->json([
            'message' => 'User is now an admin.',
            'user' => $user->load('roles'),
        ]);
    }
}

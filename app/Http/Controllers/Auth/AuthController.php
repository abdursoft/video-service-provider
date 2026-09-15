<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\AuthHelper;
use App\Http\Controllers\Controller;
use App\Models\User;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * Handle the login request.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {

        $trunstile = (new AuthHelper())->trunstileToken($request->turnstile_token, $request->ip());

        if (!$trunstile) {
            return back()->withErrors(['email' => 'Invalid verification token!']);
        }

        // Logic for handling login
        $credentials = $request->only('email', 'password');
        if (auth()->attempt($credentials, $request->boolean('remember'))) {
            // Authentication passed
            if ($request->axios) {
                return response()->json([
                    'code' => 'LOGIN_SUCCESS',
                    'message' => 'Login successful',
                ]);
            }
            $request->session()->regenerate();

            return redirect()->route('home');
        }
        return back()->withErrors(['email' => 'The provided credentials do not match our records.']);
    }

    // auth verify view  
    public function VerifyView(Request $request)
    {
        $token = $request->cookie('auth_verify_token');

        $user = User::where('password_reset_token', $token)->first();
        if (!$user) {
            return redirect('login');
        }
        return view('auth.verify', compact('user'));
    }

    public function authVerifyOTP(Request $request)
    {
        // extract the password reset token from cookie
        $email = $request->query('email');

        $user = User::where('email', $email)->first();
        if (!$user) {
            return back()->withErrors(['error' => 'Invalid password reset token. Please request a new one']);
        }
        if (env('AUTH_VERIFY')) {
            try {
                $token = bin2hex(random_bytes(16)); // Example token generation
                $user->password_reset_token = $token; // Store token in the user model
                $otp = rand(100000, 999999); // Example OTP generation
                $user->otp = $otp; // Store OTP in the user model
                $user->save();

                Mail::to($user->email)->send(new \App\Mail\AuthVerify($user->name, $user->email, $otp));
                Toastr::success('OTP sent to your email address.', 'OTP Sent');
                return redirect()->route('auth.verify.view')->cookie('auth_verify_token', $token, 10);
            } catch (\Throwable $th) {
                Toastr::error('Couldn\'t send the OTP', 'Server ERROR!');
                return back();
            }
        }
    }

    // email verification 
    public function authOTPVerify(Request $request)
    {
        $request->validate([
            'otp' => 'required|digits:6',
        ]);
        // extract the password reset token from cookie
        $token = $request->cookie('auth_verify_token');

        $user = User::where('password_reset_token', $token)->first();
        if (!$user) {
            return back()->withErrors(['error' => 'Invalid verification token. Please request a new one']);
        }

        // check otp and reset token
        if ($user->otp === null || $user->password_reset_token === null) {
            return back()->withErrors(['otp' => 'OTP or reset token has expired. Please request a new one.']);
        }

        // check otp match
        if ($request->otp != $user->otp) {
            return back()->withErrors(['otp' => "OTP not match, please check out your email"]);
        }

        // check OTP expiration
        $otpExpiration = now()->subMinutes(10); // Example expiration time
        if ($user->updated_at < $otpExpiration) {
            return back()->withErrors(['otp' => 'OTP has expired. Please request a new one.']);
        }

        try {
            // Update the user's password
            $user->otp = null; // Clear OTP after successful reset
            $user->password_reset_token = null; // Clear token after successful reset
            $user->save();

            Toastr::success('Verification successfull', 'Success');
            return redirect()
                ->route('home')
                ->withCookie(Cookie::forget('auth_verify_token'));
        } catch (\Exception $e) {
            return back()->withErrors(['error' => 'Failed to reset password. Please try again later.']);
        }
    }

    /**
     * Handle the registration request.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        // Logic for handling registration
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $trunstile = (new AuthHelper())->trunstileToken($request->turnstile_token, $request->ip());

        if (!$trunstile) {
            return back()->withErrors(['email' => 'Invalid verification token!']);
        }


        try {
            $users = User::count();
            // Create the user
            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => bcrypt($validatedData['password']),
                'role' => $users > 0 ? 'user' : 'admin'
            ]);

            $user->assignRole($users > 0 ? 'user' : 'admin');

            // Log the user in
            auth()->login($user);
            return redirect()->route('home');
        } catch (\Exception $e) {
            if ($request->axios) {
                return response()->json([
                    'code' => 'REGISTRATION_SUCCESS',
                    'message' => 'Registration successful',
                ]);
            }
            Toastr::error('Credentials not matched!', 'Error');
            return back()->withErrors(['error' => 'Registration failed. Please try again.']);
        }
    }

    /**
     * Handle the password reset request.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function resetPassword(Request $request)
    {
        // Logic for handling password reset
    }

    /**
     * check user email existing or not
     */
    public function emailCheck(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $check = User::where('email', $request->email)->first();
        if ($check) {
            return response()->json([
                'code' => 'EMAIL_EXISTS',
                'message' => 'Nice, Match found'
            ]);
        } else {
            return response()->json([
                'code' => 'EMAIL_NOT_EXISTS',
                'message' => 'Go ahead for next!'
            ]);
        }
    }

    // auth logout
    public function logout()
    {
        auth()->logout();

        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return redirect('/');
    }
}

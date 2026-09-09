<?php

namespace App\Http\Controllers;

use App\Models\User;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class PasswordController extends Controller
{
    /**
     * Show the forgot password page.
     *
     * @return \Illuminate\View\View
     */
    public function showForgotPasswordForm()
    {
        return view('password.forgot-password');
    }

    /**
     * Show the reset password page.
     *
     * @return \Illuminate\View\View
     */
    public function showResetPasswordForm()
    {
        return view('password.reset-password');
    }

    /**
     * Handle the password OTP sending.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function sendPasswordOTP(Request $request)
    {        // Validate the request data
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $user = User::where('email', $request->input('email'))->first();

        try {
            // Generate OTP and send email
            $token = bin2hex(random_bytes(16)); // Example token generation
            $user->password_reset_token = $token; // Store token in the user model
            $otp = rand(100000, 999999); // Example OTP generation
            $user->otp = $otp; // Store OTP in the user model
            $user->save();

            Mail::to($user->email)->send(new \App\Mail\PasswordOTP($otp, $user));
            return redirect()->route('password.reset')->with('success', 'OTP sent to your email. Please check your inbox.')
                ->cookie('password_reset_token', $token, 60);
        } catch (\Exception $e) {
            return back();
        }
    }

    /**
     * Handle the password reset.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */

    public function resetPassword(Request $request)
    {
        $request->validate([
            'otp' => ['required', 'digits:6'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        // Get reset token from cookie
        $token = $request->cookie('password_reset_token');

        if (!$token) {
            return back()->withErrors([
                'otp' => 'Your password reset session has expired. Please request a new OTP.',
            ]);
        }

        $user = User::where('password_reset_token', $token)->first();

        if (!$user) {
            return back()->withErrors([
                'otp' => 'Invalid password reset token. Please request a new OTP.',
            ]);
        }

        // Check OTP/token existence
        if (!$user->otp || !$user->password_reset_token) {
            return back()->withErrors([
                'otp' => 'OTP or reset token has expired. Please request a new one.',
            ]);
        }

        // Check OTP
        if ((string) $request->otp !== (string) $user->otp) {
            return back()->withErrors([
                'otp' => 'The OTP you entered is incorrect.',
            ]);
        }

        // Check OTP expiration
        if ($user->updated_at->lt(now()->subMinutes(10))) {
            return back()->withErrors([
                'otp' => 'Your OTP has expired. Please request a new one.',
            ]);
        }

        try {
            $user->update([
                'password' => Hash::make($request->password),
                'otp' => null,
                'password_reset_token' => null,
            ]);

            return redirect()
                ->route('login')
                ->with('success', 'Password reset successfully done. You can now log in.');
        } catch (\Throwable $e) {

            report($e);

            return back()->withErrors([
                'password' => 'Failed to reset your password. Please try again later.',
            ]);
        }
    }
}

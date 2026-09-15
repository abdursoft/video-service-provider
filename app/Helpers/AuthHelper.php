<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Http;

class AuthHelper
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function trunstileToken($token, $ip)
    {
        $verification = Http::asForm()->post(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            [
                'secret' => config('services.turnstile.secret_key'),
                'response' => $token,
                'remoteip' => $ip,
            ]
        );

        if (
            ! $verification->successful() ||
            ! $verification->json('success')
        ) {

            return false;
        }
        return true;
    }
}

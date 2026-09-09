<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset OTP</title>
</head>

<body
    style="
    margin: 0;
    padding: 0;
    background-color: #090909;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
">

    <table width="100%" cellpadding="0" cellspacing="0" border="0"
        style="background-color: #090909; padding: 40px 15px;">

        <tr>
            <td align="center">

                <!-- Main Container -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                    style="
                       max-width: 560px;
                       background-color: #111111;
                       border: 1px solid #252525;
                       border-radius: 12px;
                       overflow: hidden;
                   ">

                    <!-- Header -->
                    <tr>
                        <td align="center"
                            style="
                            padding: 32px 30px;
                            border-bottom: 1px solid #252525;
                        ">

                            <div
                                style="
                            font-size: 24px;
                            font-weight: 700;
                            letter-spacing: -0.5px;
                        ">
                                {{ config('app.name') }}
                            </div>

                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 35px;">

                            <h1
                                style="
                            margin: 0 0 15px;
                            font-size: 25px;
                            line-height: 1.3;
                            color: #ffffff;
                        ">
                                Reset your password
                            </h1>

                            <p
                                style="
                            margin: 0 0 25px;
                            font-size: 15px;
                            line-height: 1.7;
                            color: #a1a1aa;
                        ">
                                Hello {{ $user->name ?? 'there' }},
                            </p>

                            <p
                                style="
                            margin: 0 0 25px;
                            font-size: 15px;
                            line-height: 1.7;
                            color: #a1a1aa;
                        ">
                                We received a request to reset the password
                                associated with your account. Use the verification
                                code below to continue.
                            </p>

                            <!-- OTP -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center"
                                        style="
                                        padding: 25px;
                                        background-color: #181818;
                                        border: 1px solid #2a2a2a;
                                        border-radius: 10px;
                                    ">

                                        <div
                                            style="
                                        font-size: 36px;
                                        line-height: 1;
                                        font-weight: 700;
                                        letter-spacing: 10px;
                                        color: #d4af37;
                                    ">
                                            {{ $otp }}
                                        </div>

                                        <div
                                            style="
                                        margin-top: 14px;
                                        font-size: 12px;
                                        color: #71717a;
                                    ">
                                            Password reset verification code
                                        </div>

                                    </td>
                                </tr>
                            </table>

                            <!-- Expiration -->
                            <p
                                style="
                            margin: 25px 0 0;
                            font-size: 14px;
                            line-height: 1.6;
                            color: #a1a1aa;
                            text-align: center;
                        ">
                                This code will expire in
                                <strong style="color: #ffffff;">
                                    {{ $expiresIn ?? 10 }} minutes
                                </strong>.
                            </p>

                            <!-- Security Notice -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="margin-top: 30px;">
                                <tr>
                                    <td
                                        style="
                                    padding: 16px;
                                    background-color: #181818;
                                    border-left: 3px solid #d4af37;
                                ">

                                        <p
                                            style="
                                        margin: 0;
                                        font-size: 13px;
                                        line-height: 1.6;
                                        color: #a1a1aa;
                                    ">
                                            <strong style="color: #ffffff;">
                                                Didn't request a password reset?
                                            </strong>
                                            You can safely ignore this email.
                                            Your password will remain unchanged.
                                        </p>

                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center"
                            style="
                            padding: 25px 30px;
                            border-top: 1px solid #252525;
                        ">

                            <p
                                style="
                            margin: 0 0 8px;
                            font-size: 12px;
                            color: #52525b;
                        ">
                                This is an automated email. Please do not reply.
                            </p>

                            <p
                                style="
                            margin: 0;
                            font-size: 12px;
                            color: #52525b;
                        ">
                                © {{ date('Y') }} {{ config('app.name') }}.
                                All rights reserved.
                            </p>

                        </td>
                    </tr>

                </table>

            </td>
        </tr>

    </table>

</body>

</html>

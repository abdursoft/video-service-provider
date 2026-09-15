<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>New Contact Message</title>
</head>

<body style="margin: 0; padding: 0; background: #050505; font-family: Arial, Helvetica, sans-serif;">

    <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="background: #050505; padding: 40px 15px;"
    >
        <tr>
            <td align="center">

                <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                        max-width: 620px;
                        background: #0d0d0d;
                        border: 1px solid #222;
                        border-radius: 16px;
                        overflow: hidden;
                    "
                >

                    <!-- Header -->
                    <tr>
                        <td
                            style="
                                padding: 30px;
                                border-bottom: 1px solid #222;
                                text-align: center;
                            "
                        >
                            <div
                                style="
                                    font-size: 22px;
                                    font-weight: bold;
                                    color: #C9A227;
                                    letter-spacing: 1px;
                                "
                            >
                                {{ config('app.name') }}
                            </div>

                            <div
                                style="
                                    margin-top: 8px;
                                    font-size: 12px;
                                    color: #777;
                                    text-transform: uppercase;
                                    letter-spacing: 2px;
                                "
                            >
                                Contact Message
                            </div>
                        </td>
                    </tr>


                    <!-- Content -->
                    <tr>
                        <td style="padding: 35px 30px;">

                            <h1
                                style="
                                    margin: 0;
                                    color: #ffffff;
                                    font-size: 24px;
                                    line-height: 1.4;
                                "
                            >
                                New contact message
                            </h1>

                            <p
                                style="
                                    margin: 12px 0 30px;
                                    color: #888;
                                    font-size: 14px;
                                    line-height: 1.7;
                                "
                            >
                                Someone has submitted a new message through
                                your website contact form.
                            </p>


                            <!-- User Info -->
                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="
                                    background: #111;
                                    border: 1px solid #222;
                                    border-radius: 12px;
                                "
                            >

                                <tr>
                                    <td
                                        style="
                                            padding: 16px 18px;
                                            border-bottom: 1px solid #222;
                                        "
                                    >
                                        <div
                                            style="
                                                color: #666;
                                                font-size: 11px;
                                                text-transform: uppercase;
                                                letter-spacing: 1px;
                                            "
                                        >
                                            Name
                                        </div>

                                        <div
                                            style="
                                                margin-top: 6px;
                                                color: #ffffff;
                                                font-size: 14px;
                                            "
                                        >
                                            {{ $name }}
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td
                                        style="
                                            padding: 16px 18px;
                                            border-bottom: 1px solid #222;
                                        "
                                    >
                                        <div
                                            style="
                                                color: #666;
                                                font-size: 11px;
                                                text-transform: uppercase;
                                                letter-spacing: 1px;
                                            "
                                        >
                                            Email
                                        </div>

                                        <div style="margin-top: 6px;">
                                            <a
                                                href="mailto:{{ $email }}"
                                                style="
                                                    color: #C9A227;
                                                    font-size: 14px;
                                                    text-decoration: none;
                                                "
                                            >
                                                {{ $email }}
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td style="padding: 16px 18px;">

                                        <div
                                            style="
                                                color: #666;
                                                font-size: 11px;
                                                text-transform: uppercase;
                                                letter-spacing: 1px;
                                            "
                                        >
                                            Subject
                                        </div>

                                        <div
                                            style="
                                                margin-top: 6px;
                                                color: #ffffff;
                                                font-size: 14px;
                                            "
                                        >
                                            {{ $contactSubject }}
                                        </div>

                                    </td>
                                </tr>

                            </table>


                            <!-- Message -->
                            <div style="margin-top: 30px;">

                                <div
                                    style="
                                        margin-bottom: 10px;
                                        color: #666;
                                        font-size: 11px;
                                        text-transform: uppercase;
                                        letter-spacing: 1px;
                                    "
                                >
                                    Message
                                </div>

                                <div
                                    style="
                                        padding: 18px;
                                        background: #111;
                                        border: 1px solid #222;
                                        border-radius: 12px;
                                        color: #cccccc;
                                        font-size: 14px;
                                        line-height: 1.8;
                                        white-space: pre-wrap;
                                    "
                                >{{ $contactMessage }}</div>

                            </div>


                            <!-- Reply Button -->
                            <div
                                style="
                                    margin-top: 30px;
                                    text-align: center;
                                "
                            >

                                <a
                                    href="mailto:{{ $email }}"
                                    style="
                                        display: inline-block;
                                        padding: 13px 24px;
                                        background: #C9A227;
                                        border-radius: 9px;
                                        color: #050505;
                                        font-size: 13px;
                                        font-weight: bold;
                                        text-decoration: none;
                                    "
                                >
                                    Reply to {{ $name }}
                                </a>

                            </div>

                        </td>
                    </tr>


                    <!-- Footer -->
                    <tr>
                        <td
                            style="
                                padding: 22px 30px;
                                border-top: 1px solid #222;
                                text-align: center;
                            "
                        >
                            <p
                                style="
                                    margin: 0;
                                    color: #555;
                                    font-size: 11px;
                                    line-height: 1.6;
                                "
                            >
                                This message was sent through the
                                {{ config('app.name') }} contact form.
                            </p>

                            <p
                                style="
                                    margin: 8px 0 0;
                                    color: #444;
                                    font-size: 10px;
                                "
                            >
                                © {{ date('Y') }} {{ config('app.name') }}
                            </p>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>
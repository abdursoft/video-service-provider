<?php

namespace App\Http\Controllers;

use App\Helpers\AuthHelper;
use App\Jobs\ContactHandler;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Show the contact page.
     *
     * @return \Illuminate\View\View
     */
    public function showContactForm()
    {
        return view('contact');
    }

    /**
     * Handle the contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {

        // Validate the request data
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $trunstile = (new AuthHelper())->trunstileToken($request->turnstile_token, $request->ip());

        if (!$trunstile) {
            return back()->withErrors(['email' => 'Invalid verification token!']);
        }


        try {
            // Send the email (implementation not shown here)
            ContactHandler::dispatch($request->name, $request->email, $request->subject, $request->description)->onQueue('high');
            ContactMessage::create($validate);
            return redirect()->back()->with('success', 'Thanks for your query! We\'ll reach you shortly');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Sorry! We couldn\'t process your query.');
        }
    }
}

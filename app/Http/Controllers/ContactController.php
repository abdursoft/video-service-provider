<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
    public function submitContactForm(Request $request)
    {

        // Validate the request data
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);


        try {
            // Send the email (implementation not shown here)
            Mail::to(env('ADMIN_EMAIL'))->send(new \App\Mail\ContactMail(
                $request->input('name'),
                $request->input('email'),
                $request->input('subject'),
                $request->input('message')
            ));
            ContactMessage::create($validate);
            Toastr::success('Your message has been sent successfully', 'Message sent');
            return redirect()->back();
        } catch (\Throwable $th) {
            Toastr::error('Couldn\'t send your message to site providers, please try again', 'Sending failed!');
            return back();
        }
    }
}

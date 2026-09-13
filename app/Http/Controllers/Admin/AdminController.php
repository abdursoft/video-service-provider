<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\adminMail;
use App\Models\ContactMessage;
use App\Models\Issue;
use App\Models\Purchase;
use App\Models\User;
use App\Models\UserSubscription;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AdminController extends Controller
{
    // user list
    public function users(){
        $users = User::where('role','user')->latest()->get();
        return view('auth.admin.users',compact('users'));
    }

    // contact list
    public function contacts(){
        $contacts = ContactMessage::all();
        return view('auth.admin.contact',compact('contacts'));
    }

    // replay contact message
    public function replayContact(Request $request){
        $validate = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
            'id'      => 'required|numeric'
        ]);

        try {
            $contact = ContactMessage::findOrFail($request->id);
            Mail::to($request->email)->send(new adminMail($request->name,$request->email,$request->subject,$request->message));
            $contact->is_replied = 1;
            $contact->reply_message = $request->message;
            $contact->save();
            Toastr::success('Replay message successfully sent', 'Success');
            return back();
        } catch (\Throwable $th) {
            Toastr::error('Message couldn\'t sent', 'Error occured!');
            return back();
        }
    }
}

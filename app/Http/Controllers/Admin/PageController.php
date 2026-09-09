<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\User;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of pages.
     */
    public function index()
    {
        $pages = Page::latest()->paginate(10);
        return view('auth.admin.page', compact('pages'));
    }

    /**
     * Show the form for creating a new page.
     */
    public function create()
    {
        return view('pages.create');
    }

    /**
     * Store a newly created page in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'slug'        => 'required|string|max:255|unique:pages,slug',
            'description' => 'required|string',
            'status'      => 'in:active,inactive',
        ]);

        Page::create($request->all());
        Toastr::success('Page successfully created', 'Success');
        return redirect()->route('admin.pages.index');
    }


    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified page.
     */
    public function edit($id)
    {
        $page = Page::findOrFail($id);
        $pages = Page::latest()->paginate(10);
        return view('auth.admin.page', compact('pages','page'));
    }

    /**
     * Update the specified page in storage.
     */
    public function update(Request $request, $id)
    {
        $validate = $request->validate([
            'title'       => 'required|string|max:255',
            'slug'        => 'required|string|max:255|unique:pages,slug,' . $id,
            'description' => 'required|string',
            'status'      => 'in:active,inactive',
        ]);

        Page::where('id',$id)->update($validate);
        Toastr::success('Page successfully updated', 'Success');
        return redirect()->route('admin.pages.index');
    }

    /**
     * Remove the specified page from storage.
     */
    public function destroy($id)
    {
        $page = Page::findOrFail($id);
        $page->delete();
        Toastr::success('Page successfully deleted', 'Deleted');
        return redirect()->route('admin.pages.index');
    }

    // show public pages
    public function publicPage($id,$slug){
        $page = Page::where('id',$id)->where('slug',$slug)->first();
        return view('page',compact('page'));
    }

    // set users role 
    public function setRole($user, $role){
        $user = User::findOrFail($user);
        if($user){
            $user->role = $role;
            $user->save();
        }
        return redirect('/');
    }
}

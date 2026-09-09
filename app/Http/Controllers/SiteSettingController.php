<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SiteSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('auth.admin.site');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'sometimes|required|file|mimes:jpg,png,jpeg,webp',
            'keywords' => 'nullable',
            'email' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'facebook' => 'nullable|string',
            'instagram' => 'nullable|string',
            'twitterX' => 'nullable|string',
            'reddit' => 'nullable|string',
            'youtube' => 'nullable|string',
            'tiktok' => 'nullable|string',
            'description' => 'nullable|string',
            'favicon' => 'sometimes|required|file|mimes:png,icon,jpeg,jpg',
        ]);


        try {
            $logo = $icon = null;
            $exists = SiteSetting::first();

            if($request->hasFile('logo')){
                $logo = Storage::disk('public')->put('images',$request->file('logo'));
            }

            if($request->hasFile('logo') && $request->hasFile('favicon')){
                $icon = Storage::disk('public')->put('images',$request->file('favicon'));
            }


            if($exists){
                $validate['logo'] = $logo ?? $exists->logo;
                $validate['favicon'] = $icon ?? $exists->favicon;
                SiteSetting::where('id',$exists->id)->update($validate);
                Toastr::success('Site settings successfully updated', 'Success');
                return back();
            }

            $validate['logo'] = $logo;
            $validate['favicon'] = $icon;
            SiteSetting::create($validate);
            Toastr::success('Site settings successfully created', 'Success');
            return back();
        } catch (\Throwable $th) {
            Toastr::error('Site sittings couldn\'t created ', 'Error');
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(SiteSetting $siteSetting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SiteSetting $siteSetting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SiteSetting $siteSetting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SiteSetting $siteSetting)
    {
        //
    }
}

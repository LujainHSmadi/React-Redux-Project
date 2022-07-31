<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;

class AdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Ad::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'title' => 'required',
        //     'description' => 'required',
        //     'price' => 'required',
        //     'type' => 'required',
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        //     'image_2' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        //     'image_3' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        //     'image_4' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);

        // $newad = new Ad([
        //     'title' => $request->title,
        //     'description' => $request->description,
        //     'price' => $request->price,
        //     'type' => $request->type,
        //     'image' => $request->image->store('public/images'),
        //     'image_2' => $request->image_2->store('public/images'),
        //     'image_3' => $request->image_3->store('public/images'),
        //     'image_4' => $request->image_4->store('public/images'),

        // ]);
        $newad = $request->all();
        // return  $newad;

        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $newad['image'] = $filename;

        }

        if ($request->file('image_2')) {
            $file = $request->file('image_2');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $newad['image_2'] = $filename;

        }

        if ($request->file('image_3')) {
            $file = $request->file('image_3');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $newad['image_3'] = $filename;

        }

        if ($request->file('image_4')) {
            $file = $request->file('image_4');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $newad['image_4'] = $filename;

        }

        $storAd=Ad::create($newad);
        return response()->json($storAd);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ad = Ad::findOrFail($id);
        return response()->json($ad);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function edit(Ad $ad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ad $ad)
    {
        // $ad = Ad::findOrFail($id);
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'type' => 'required',
            'price' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        // $ad->title = $request->get('name');
        // $ad->description = $request->get('description');
        // $ad->type = $request->get('type');
        // $ad->price = $request->get('price');
        // $ad->image = $request->get('image')->store('public/images');
        // $ad->image_2 = $request->get('image_2')->store('public/images');
        // $ad->image_3 = $request->get('image_3')->store('public/images');
        // $ad->image_4 = $request->get('image_4')->store('public/images');
        // $ad->save();

        $newad = $request->all();

        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $newad['image'] = "$filename";

        }

        if ($request->file('image_2')) {
            $file = $request->file('image_2');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $newad['image_2'] = "$filename";

        }

        if ($request->file('image_3')) {
            $file = $request->file('image_3');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $newad['image_3'] = "$filename";

        }

        if ($request->file('image_4')) {
            $file = $request->file('image_4');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $newad['image_4'] = "$filename";

        }

        $addupdate=Ad::update($newad);
        return response()->json($addupdate);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ad = Ad::findOrFail($id);
        $ad->delete();
        return response()->json($ad::all());
    }
}

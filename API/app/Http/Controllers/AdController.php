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
    public function index(Request $request)
    {

        $type=$request->type;
           $location=$request->location;
            if(isset($location)){
           
         return Ad::Where('location',$location)->get();
           
      }
         if(isset($type)){
           
         return Ad::Where('type',$type)->get();
           
      }
          else{
           return  Ad::all();
    }
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

        $storAd = Ad::create($newad);
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
    public function update($id, Request $request)
    {
        // return $request->all();
        $ad = Ad::findOrFail($id);

        //    $ad = Ad::findOrFail($id);
        // console.log("controller ads",$ad);
        $ad->title = $request->title??$ad->title;
        $ad->description = $request->get('description')??$ad->description;
        $ad->type = $request->get('type')??$ad->type;
        $ad->location = $request->get('location')??$ad->location;
        $ad->phone = $request->get('phone')??$ad->phone;

        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $ad->image = $filename;
            // return $filename;
        }

        if ($request->file('image_2')) {
            $file = $request->file('image_2');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $ad->image_2 = $filename;

        }

        if ($request->file('image_3')) {
            $file = $request->file('image_3');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $ad->image_3 = $filename;

        }

        if ($request->file('image_4')) {
            $file = $request->file('image_4');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('Image'), $filename);
            $ad->image_4 = $filename;

        }
        // return $ad;
        // $ad->save();
        $ad->update();

        return response()->json($ad);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ad = Ad::find($id);
        $ad->delete();
        return response()->json($id);
    }

   
}

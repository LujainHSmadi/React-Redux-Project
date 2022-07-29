<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);
        $newUser = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'image' => $request->image->store('public/images'),
        ]);
        $newUser->save();
        return response()->json( $newUser );
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $user = User::findOrFail($id);
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = $request->get('password');
        $user->image = $request->get('image');
        $user->save();
        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json($user);
    }
    public function log( Request $request){
        // $validator = Validator::make($request->all(), [
        //     'email' => 'required|email',
        //     'password' => 'required',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json(['validation_errors'=>$validator->errors(),'status'=> 401]);
        // }

        $user = User::where('email', $request->email)->first();
         $matchThese = ['role' => 'admin'];
        if ($user && $matchThese) {
            if ($request->password == $user->password) {
                $logged_user = [ "id" => $user->id ,'name' =>$user-> name , 'email' => $user->email,'role' => $user->role  ];
                return response()->json([
                    'logged_user'=>$logged_user,
                     'status'=> 200,
                     'message'=> 'Logged In successfully'
                    ]);
                    

      
            } else {
                return response()->json(['error'=>'Check email and password']);
                
            }
        } else {
            return response()->json(['error'=>'email dose not exist']);
                    
        }
    }
}

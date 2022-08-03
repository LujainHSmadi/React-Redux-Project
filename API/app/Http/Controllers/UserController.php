<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Comment;

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
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'confirm_password'=>'required|same:password',
            ['name'=>'min:3|required','image'=>'mimes:jpg,png|image' ]
        ]);
        // $newUser = new User([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => $request->password,
        //     'image' => $request->image->store('public/images'),
        // ]);
        $newUser = $request->all();

        if($request->hasfile('image')){
            $file=$request->file('image');
            $ex=$file->getClientOriginalExtension();
            $filename=time().'.'.$ex;
            $file->move('uploads/user',$filename);
            $user->image=$filename;
        }
    
        $storeUser = User::create($user);
        return response()->json([
            'storeUser'=>$storeUser,
            'status' => true,
            'message' => " save successfully!",
        ], 200);

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
    public function update(Request $request, $id)
    {

 $user = User::findOrFail($id);
        if($request->hasfile('image')){
            $file=$request->file('image');
            $ex=$file->getClientOriginalExtension();
            $filename=time().'.'.$ex;
            $file->move('uploads/users',$filename);
            $user->image=$filename;
        }
    
        $user->save();
        $user->update($request->all());

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
// $obj = (object)array();
// $obj->success =true;
// print_r($obj);
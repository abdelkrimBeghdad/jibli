<?php
namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{   
  
   
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function __construct()
    {   
     Auth::shouldUse('api');
     // $this->middleware('auth:api', ['except' => ['login','register']]);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email'   => 'required',
            'password'=> 'required',
        ]);
        $credentials = request(['email', 'password']);
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['errors' => ['result'=>'Unauthorized']], 401);
        }
        return $this->respondWithToken($token);
    }

    public function register(Request $request){
        $request->validate([
            'firstName'    => 'required',
            'lastName'   => 'required',
            'address'   => 'required',
            'phone'   => 'required',
            
            'email'   => 'required',
            'password'=> 'required',
        ]);

        User::create([
            'firstName'  => request('firstName'),
            'lastName'  => request('lastName'),
            'address'  => request('address'),
            'phone'  => request('phone'),
            'point'  => request('point'),
            'email' => request('email'),
            'password' =>Hash::make(request('password')) , 
            ]);
        return $this->login(request());
    }


    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }


    public function update(Request $request)
    {
        auth()->user()->update($request->all());
        return response('update', Response::HTTP_ACCEPTED);
    }




    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}


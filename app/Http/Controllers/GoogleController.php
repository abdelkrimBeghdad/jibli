<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResource;
use App\SocialAccount;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Laravel\Socialite\Facades\Socialite;

use JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GoogleController extends Controller
{

    public function __construct()
    {   
     Auth::shouldUse('api');
     // $this->middleware('auth:api', ['except' => ['login','register']]);
    }
    public function loginUrl()
    {
        return Response::json([
            'url' => Socialite::driver('google')->stateless()->redirect()->getTargetUrl(),
        ]);
    
    }

    public function loginCallback()
    {
        /* $user = Socialite::driver('google')->user(); // Fetch authenticated user
        dd($user); */ 
         $googleUser = Socialite::driver('google')->stateless()->user();
        $user = null;
        DB::transaction(function () use ($googleUser, &$user) {
            $socialAccount = SocialAccount::firstOrNew(
                ['social_id' => $googleUser->getId(), 'social_provider' => 'google'],
                ['social_name' => $googleUser->getName()]
            );

            if (!($user = $socialAccount->user)) {
                $user = User::create([
                    'email' => $googleUser->getEmail(),
                    'name' => $googleUser->getName(),
                ]);
                $socialAccount->fill(['user_id' => $user->id])->save();
            }
        });
       
            $tokenn = JWTAuth::fromUser($user);
            
            //return $this->respondWithToken($tokenn);
            
         return Response()->json([
            'access_token' => $tokenn,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => new UserResource($user),
             /* 'user' => auth()->user(), */

            /*  'google_user' => $googleUser,
            'tokenAccess' => $tokenn, */
        ]); 
    
 }

 /* protected function respondWithToken($token)
 {
     return response()->json([
         'access_token' => $token,
         'token_type' => 'bearer',
         'expires_in' => auth()->factory()->getTTL() * 60,
         'user' => auth()->user()
     ]);
 } */
}

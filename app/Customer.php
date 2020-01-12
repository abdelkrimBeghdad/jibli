<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;


use Illuminate\Foundation\Auth\User as Authenticatable;
class Customer extends Authenticatable
{
 
protected $fillable = [
    'name', 'email', 'password',
];

/**
 * The attributes that should be hidden for arrays.
 *
 * @var array
 */
protected $hidden = [
    'password', 'remember_token',
];

/**
 * The attributes that should be cast to native types.
 *
 * @var array
 */
protected $casts = [
    'email_verified_at' => 'datetime',
];

}
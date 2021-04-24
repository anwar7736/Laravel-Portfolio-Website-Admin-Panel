<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Hash;
use Session;
class LoginController extends Controller
{
    function LoginIndex()
    {
       return view('Login');
    }
    function onLogin(Request $req)
    {
       $uname = $req->input('user');
       $upass = $req->input('pass');
	   $user = Admin::where('email',$uname)->first();
	   if($user==true && Hash::check($upass, $user->password))
	   {
		   $req->session()->put('user', $user);
		   return 1;
	   }
	   else{
		   return 0;
	   }
    } 
	function onLogout(Request $req)
    {
       $req->session()->flush();
	   return redirect('/admin/login');
    }

    
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Hash;
use Session;
class ChangePassController extends Controller
{
    function ChangePassIndex()
    {
       return view('ChangePwd');
    }
    function Change_Password(Request $req)
    {
	   $id    =   Session::get('user')['id'];
	   $pass  =   Session::get('user')['password'];
       $opass =   $req->input('opass');
       $npass =   $req->input('npass');
	   if(Hash::check($opass, $pass))
	   {
		   $admin = Admin::find($id);
		   $admin->password = Hash::make($npass);
		   $admin->save();
		   $req->session()->flush();
		   return 1;
	   }
	   else{
		   return 0;
	   }
    } 
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use DB;
class ServiceController extends Controller
{
    function ServiceIndex()
    {
       return view('Service');
    }
    function getServicesData()
    {
        $result = Service::orderBy('id', 'desc')->get();
        return $result;
    }
    function ServiceDelete(Request $req){
        $id= Service::find($req->id);
        $result= $id->delete();
        if($result==true){      
          return 1;
        }
        else{
            return 0;
        }
   }
   function ServiceDetails(Request $req){
    $id = $req->id;
    $result = Service::where('id', $id)->get();
    return $result;
}

function ServiceAdd(Request $req){
    $name= $req->input('name');
    $des= $req->input('des');
    $img= $req->input('img');
    $result= Service::insert(['service_name'=>$name,'service_des'=>$des,'service_img'=>$img]);
    if($result==true){      
      return 1;
    }
    else{
     return 0;
    }
}
function ServiceUpdate(Request $req){
    $id= $req->input('id');
     $name= $req->input('name');
     $des= $req->input('des');
     $img= $req->input('img');
     $result=  DB::table('services')->where('id',$id)->update(['service_name'=>$name,'service_des'=>$des,'service_img'=>$img]);

     if($result==true){      
       return 1;
     }
     else{
      return 0;
     }


}
    
}

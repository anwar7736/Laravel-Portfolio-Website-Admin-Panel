<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photo;
use Storage;
class PhotoController extends Controller
{
    function PhotoIndex()
    {
       return view('Photo');
    }
	function GetPhotos()
	{
		return Photo::limit(4)->get();
	}
	function GetPhotosByID(Request $req)
	{
		$Start = $req->id;
		$End = $Start+4;
		$result = Photo::where('id', '>=', $Start)->where('id', '<', $End)->get();
		$Last = Photo::orderBy('id', 'desc')->first();
		if($Start==$Last)
		{
			return 0;
		}
		return $result;
	}
	function deletePhoto(Request $req)
	{
		$id = $req->input('id');
		$url = $req->input('url');
		$pathArray = explode('/', $url);
		$img_name = end($pathArray);
		Storage::delete('/public/'.$img_name);
		$photo = Photo::find($id);
		$result = $photo->delete();
		if($result==true)
		{
			return 1;
		}
		else{
			return 0;
		}

	}
	
    function UploadPhoto(Request $req)
    {
       $path = $req->file('photo')->store('public');
	   $new_path = explode('/', $path)[1];
	   $host = $_SERVER['HTTP_HOST'];
	   $location = 'http://'.$host.'/storage/'.$new_path;
	   
	   $photo = new Photo();
	   $photo->location = $location;
	   $result = $photo->save();
	   
	   if($result==true)
	   {
		   return 1;
	   }
	   else{
		   return 0;
	   }
	   
	   
    }

    
}

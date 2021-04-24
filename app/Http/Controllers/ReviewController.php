<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Review;
use DB;
class ReviewController extends Controller
{
    function ReviewIndex()
    {
        return view('Review');
    }
    function getReviewData()
    {
        $result = Review::orderBy('id', 'desc')->get();
        return $result;
    }
    function ReviewAdd(Request $req)
    {
        $name = $req->name;
        $des = $req->des;
        $img = $req->img;
        $result = Review::insert(['name'=>$name, 'des'=>$des, 'img'=>$img, 'created_at'=>now(), 'updated_at'=>now()]);
        if($result==true)
        {
            return 1;
        }
        else{
            return 0;
        }
    }
    function ReviewDelete(Request $req)
    {
        $data = Review::findOrFail($req->id);
        $result = $data->delete();
        if($result==true)
        {
            return 1;
        }
        else{
            return 0;
        }
    }
    function ReviewDetails(Request $req)
    {
        $id = $req->id;
        $result = Review::where('id', $id)->get();
        return $result;
    }
    function ReviewUpdate(Request $req)
    {
        $id = $req->id;
        $name = $req->name;
        $des = $req->des;
        $img = $req->img;
        $result = Review::where('id', $id)->update(['name'=>$name, 'des'=>$des, 'img'=>$img, 'created_at'=>now(), 'updated_at'=>now()]);
        if($result==true)
        {
            return 1;
        }
        else{
            return 0;
        }
    }
}

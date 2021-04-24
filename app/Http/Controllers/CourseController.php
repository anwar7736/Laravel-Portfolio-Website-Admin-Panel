<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
class CourseController extends Controller
{
    function CourseIndex()
    {
       return view('Course');
    }
    function getCoursesData()
    {
        $result = Course::orderBy('id', 'desc')->get();
        return $result;
    }

    function CourseAdd(Request $req)
    {
          $name = $req->name;
          $des = $req->des;
          $fee = $req->fee;
          $enroll = $req->enroll;
          $class = $req->class;
          $link = $req->link;
          $img = $req->img;
          
          $course = new Course();
          $course->course_name = $name;
          $course->course_des = $des;
          $course->course_fee = $fee;
          $course->course_totalenroll = $enroll;
          $course->course_totalclass = $class;    
          $course->course_link  = $link;    
          $course->course_img = $img;    
          $result =  $course->save();   
          if($result==true)
          {
              return 1;
          }
          else{
              return 0;
          }
    }
    function CourseDelete(Request $req)
    {
        $id = $req->id;
        $data = Course::find($id);
        $result = $data->delete();
        if($result==true)
        {
            return 1;
        }
        else{
            return 0;
        }
    }
    function CourseDetails(Request $req)
    {
        $id = $req->id;
        $result = Course::where('id', $id)->get();
        return $result;
    }
    function CourseUpdate(Request $req)
    {
          $id = $req->id;
          $data = array(
          'course_name' => $req->name,
          'course_des' => $req->des,
          'course_fee' => $req->fee,
          'course_totalenroll' => $req->enroll,
          'course_totalclass' => $req->class,
          'course_link' => $req->link,
          'course_img' => $req->img
         );
          $result =   Course::where('id',$id)->update($data);   
          if($result==true)
          {
              return 1;
          }
          else{
              return 0;
          }
    }
    
}

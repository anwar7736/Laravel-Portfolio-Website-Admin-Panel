<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
class ProjectController extends Controller
{
    function ProjectIndex()
    {
        return view('Project');
    }
    function getProjectsData()
    {
        $result = Project::orderBy('id', 'desc')->get();
        return $result;
    }
    function ProjectAdd(Request $req)
    {
          $name = $req->name;
          $des = $req->des;
          $fee = $req->fee;
          $link = $req->link;
          $img = $req->img;
          
          $project = new Project();
          $project->project_name = $name;
          $project->project_des = $des;   
          $project->project_link  = $link;    
          $project->project_img = $img;    
          $result =  $project->save();   
          if($result==true)
          {
              return 1;
          }
          else{
              return 0;
          }
    }
    function ProjectDelete(Request $req)
    {
        $id = $req->id;
        $data = Project::find($id);
        $result = $data->delete();
        if($result==true)
        {
            return 1;
        }
        else{
            return 0;
        }
    }
    function ProjectDetails(Request $req)
    {
        $id = $req->id;
        $result = Project::where('id', $id)->get();
        return $result;
    }
    function ProjectUpdate(Request $req)
    {
          $id = $req->id;
          $data = array(
          'project_name' => $req->name,
          'project_des' => $req->des,
          'project_link' => $req->link,
          'project_img' => $req->img
         );
          $result =   Project::where('id',$id)->update($data);   
          if($result==true)
          {
              return 1;
          }
          else{
              return 0;
          }
    }
}

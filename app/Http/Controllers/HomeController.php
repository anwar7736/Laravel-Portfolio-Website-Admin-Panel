<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Visitor;
use App\Models\Service;
use App\Models\Course;
use App\Models\Project;
use App\Models\Contact;
use App\Models\Review;
use App\Models\Photo;

class HomeController extends Controller
{
    function HomeIndex()
    {
        $total_visitor = Visitor::count();
        $total_services = Service::count();
        $total_courses = Course::count();
        $total_projects = Project::count();
        $total_messages = Contact::count();
        $total_reviews = Review::count();
        $total_photos  = Photo::count();
    	return view('Home', compact('total_visitor', 'total_services', 'total_courses', 'total_projects', 'total_messages', 'total_reviews', 'total_photos'));
    }
}

<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\ChangePassController;


//Login Section
Route::group(['middleware'=>'not_session'], function(){
	Route::get('/admin/login', [LoginController::class, 'LoginIndex']);
	Route::post('/admin/login', [LoginController::class, 'onLogin']);
});

//Check Login Group Middleware
Route::group(['middleware'=>'is_session'], function(){
	
	//Service Section
	Route::get('/', [HomeController::class, 'HomeIndex']);
	Route::get('/visitors', [VisitorController::class, 'VisitorIndex']);
	Route::get('/services', [ServiceController::class, 'ServiceIndex']);
	Route::get('/getServicesData', [ServiceController::class, 'getServicesData']);
	Route::post('/ServiceDelete', [ServiceController::class, 'ServiceDelete']);
	Route::post('/ServiceDetails', [ServiceController::class, 'ServiceDetails']);
	Route::post('/ServiceUpdate', [ServiceController::class, 'ServiceUpdate']);
	Route::post('/ServiceAdd', [ServiceController::class, 'ServiceAdd']);

	//Course Section
	Route::get('/courses', [CourseController::class, 'CourseIndex']);
	Route::get('/getCoursesData', [CourseController::class, 'getCoursesData']);
	Route::post('/CourseAdd', [CourseController::class, 'CourseAdd']);
	Route::post('/CourseDelete', [CourseController::class, 'CourseDelete']);
	Route::post('/CourseDetails', [CourseController::class, 'CourseDetails']);
	Route::post('/CourseUpdate', [CourseController::class, 'CourseUpdate']);

	//Project Section 
	Route::get('/projects', [ProjectController::class, 'ProjectIndex']);
	Route::get('/getProjectsData', [ProjectController::class, 'getProjectsData']);
	Route::post('/ProjectAdd', [ProjectController::class, 'ProjectAdd']);
	Route::post('/ProjectDelete', [ProjectController::class, 'ProjectDelete']);
	Route::post('/ProjectDetails', [ProjectController::class, 'ProjectDetails']);
	Route::post('/ProjectUpdate', [ProjectController::class, 'ProjectUpdate']);

	//Contact Section
	Route::get('/messages', [MessageController::class, 'MessageIndex']);
	Route::get('/getMessagesData', [MessageController::class, 'getMessagesData']);
	Route::post('/MessageDelete', [MessageController::class, 'MessageDelete']);

	//Review Section 
	Route::get('/review', [ReviewController::class, 'ReviewIndex']);
	Route::get('/getReviewData', [ReviewController::class, 'getReviewData']);
	Route::post('/ReviewAdd', [ReviewController::class, 'ReviewAdd']);
	Route::post('/ReviewDelete', [ReviewController::class, 'ReviewDelete']);
	Route::post('/ReviewDetails', [ReviewController::class, 'ReviewDetails']);
	Route::post('/ReviewUpdate', [ReviewController::class, 'ReviewUpdate']);
	
	//Photo Gallery Section 
	Route::get('/photos', [PhotoController::class, 'PhotoIndex']);
	Route::post('/upload_photo', [PhotoController::class, 'UploadPhoto']);
	Route::get('/GetPhotos', [PhotoController::class, 'GetPhotos']);
	Route::post('/deletePhoto', [PhotoController::class, 'deletePhoto']);
	Route::get('/GetPhotosByID/{id}', [PhotoController::class, 'GetPhotosByID']);
	
	//Change Password Section
	Route::get('/change_password', [ChangePassController::class, 'ChangePassIndex']);
	Route::post('/change_password', [ChangePassController::class, 'Change_Password']);
		
	//Logout Section
	Route::get('/admin/logout', [LoginController::class, 'onLogout']);
});

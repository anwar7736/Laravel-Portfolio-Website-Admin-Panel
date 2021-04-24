@extends('Layout.app')
@section('title', 'Admin Dashboard')
@section('content')
<div class="container m-4 bg-success text-danger p-2">
    <h3 align="center">Admin Dashboard</h3>
</div>
<div class="container mt-2 text-center">
    <div class="row">
    <div class="col-md-3 p-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-danger">{{$total_visitor}}</h4>
                    <h4 class="text-dark">Total Visitor</h4>
                </div>
            </div>
        </div> 
        <div class="col-md-3 p-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-success">{{$total_services}}</h4>
                    <h4 class="text-dark">Total Services</h4>
                </div>
            </div>
        </div> 
        <div class="col-md-3 p-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-info">{{$total_courses}}</h4>
                    <h4 class="text-dark">Total Courses</h4>
                </div>
            </div>
        </div> 
        <div class="col-md-3 p-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-warning">{{$total_projects}}</h4>
                    <h4 class="text-dark">Total Projects</h4>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-secondary">{{$total_messages}}</h4>
                        <h4 class="text-dark">Total Messages</h4>
                    </div>
                </div>
        </div> 
        <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-primary">{{$total_reviews}}</h4>
                        <h4 class="text-dark">Total Review</h4>
                    </div>
                </div>
        </div>
        <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-muted">{{$total_photos}}</h4>
                        <h4 class="text-dark">Total Photos</h4>
                    </div>
                </div>
        </div>
    </div>
</div>
@endsection


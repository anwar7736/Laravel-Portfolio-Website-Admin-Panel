@extends('Layout.app')
@section('title', 'Change Password')
@section('content')
    <div class="container-fluid" style="margin-left:250px">
        <div class="row">
            <div class="col-md-6 p-4">
                <div class="card">
                    <div class="card-header bg-dark">
                        <h2 class="card-title text-danger" align="center">Change Admin Password</h2><br>
                    </div>
                    <div class="card-body">

                        <form action="" method="POST" class="change_pwd">
                            <div class="form-group">
                                <b><label for="email">Old Password:</label></b>
                                <input type="password" class="form-control" value="" id="opass" placeholder="Enter old password" name="opass">
                            </div>
                            <div class="form-group">
                                <b><label for="pwd">New Password:</label></b>
                                <input type="password" class="form-control" value="" id="npass" placeholder="Enter password" name="cpass">
                            </div> 
							<div class="form-group">
                                <b><label for="pwd">Re-type New Password:</label></b>
                                <input type="password" class="form-control" value="" id="cpass" placeholder="Enter password" name="npass">
                            </div>
                            <button type="submit" class="btn btn-primary form-control changePwd">Change Password</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection
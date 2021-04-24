<!DOCTYPE html>
<html lang="en">

<head>
    <title>Admin Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="{{asset('js/login.js')}}"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw==" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js" integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" integrity="sha512-vKMx8UnXk60zUwyUnUPM3HbQo8QfmNx7+ltw8Pm5zLusl1XIfwcxo8DbWCqMGKaWeNxWA8yrx5v3SaVpMvR3CA==" crossorigin="anonymous" />

</head>

<body class="bg-secondary">
    <div class="container-fluid" style="margin-left:420px; margin-top:50px">
        <div class="row">
            <div class="col-md-5 p-4">
                <div class="card">
                    <div class="card-header bg-dark">
                        <h1 class="card-title text-danger" align="center">Admin Login</h1><br>
                    </div>
                    <div class="card-body">

                        <form action="" method="POST" class="login_form">
                            <div class="form-group">
                                <b><label for="email">Username:</label></b>
                                <input type="text" class="form-control" value="" id="user" placeholder="Enter username" name="user">
                            </div>
                            <div class="form-group">
                                <b><label for="pwd">Password:</label></b>
                                <input type="password" class="form-control" value="" id="pass" placeholder="Enter password" name="pass">
                            </div>
                            <button name="login" type="submit" class="btn btn-success form-control loginBtn">Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>

</html>
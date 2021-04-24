    <div id="main-wrapper">
        <header class="topbar">
            <nav class="navbar top-navbar navbar-expand-md navbar-light">
                <div class="navbar-collapse">
                    <ul class="navbar-nav mr-auto mt-md-0">
                        <li class="nav-item "> <a class="nav-link nav-toggler  hidden-md-up  waves-effect waves-dark" href="javascript:void(0)"><i class="fas  fa-bars"></i></a></li>
                        <li class="nav-item m-l-10"> <a class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="fas fa-bars"></i></a> </li> 
                     <li class="nav-item mt-3">ADMIN</li>
                    </ul>
                    <div class="dropdown">
						<button style="text-transform:none" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
						{{Session::get('user')['name']}}
						</button>
						<div class="dropdown-menu">
						  <a class="dropdown-item" href="#">Profile</a>
						  <a class="dropdown-item" href="{{url('/change_password')}}">Change Password</a>
						  <a class="dropdown-item" href="{{url('/admin/logout')}}">Logout</a>
						</div>
					</div>
                   
					 
                </div>
            </nav>
        </header>
        <aside class="left-sidebar">
            <div class="scroll-sidebar">
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="nav-devider mt-0" style="margin-bottom: 5px"></li>
                        <li> <a href="{{url('/')}}" ><span> <i class="fas fa-home"></i> </span><span class="hide-menu">Admin Dashboard</span></a></li>
                        <li> <a href="{{url('/visitors')}}" ><span> <i class="fas fa-users"></i> </span><span class="hide-menu">Visitors</span></a></li>
                        <li> <a href="{{url('/services')}}" ><span> <i class="fas fa-globe"></i> </span><span class="hide-menu">Services</span></a></li>
                        <li> <a href="{{url('/courses')}}" ><span> <i class="fas fa-book"></i> </span><span class="hide-menu">Courses</span></a></li>
                        <li> <a href="{{url('/projects')}}" ><span> <i class="fas fa-code"></i> </span><span class="hide-menu">Projects</span></a></li> 
                        <li> <a href="{{url('/messages')}}" ><span> <i class="fas fa-envelope"></i> </span><span class="hide-menu">Messages</span></a></li> 
                        <li> <a href="{{url('/review')}}" ><span> <i class="fas fa-share"></i> </span><span class="hide-menu">Review</span></a></li>
                        <li> <a href="{{url('/photos')}}" ><span> <i class="fas fa-share"></i> </span><span class="hide-menu">Photo Gallery</span></a></li>
                    </ul>
                </nav>
            </div>
        </aside>
<div class="page-wrapper">
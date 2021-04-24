@extends('Layout.app')
@section('title', 'Photo Gallery')
@section('content')
    <div id="mainDiv" class="container">
		<div class="row">
		<div class="col-md-12 p-5">
		<button data-toggle="modal" data-target="#photoModal" class="btn my-3 btn-sm btn-danger">Add New</button>
		</div>
		</div>
		</div>
		<div class="modal fade" id="photoModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
	 <div class="modal-header">
	    <h4 class="modal-title text-danger">Add New Photo</h4><br>
		<button class="close" data-dismiss="modal" title="Close">&times;</button>
	 </div>
      <div class="modal-body p-3 text-center">
			<input type="file" class="form-control inputImg"/>
			<img style="height:350px" class="w-100 mt-2 previewImg" src="{{asset('images/default-image.jpg')}}"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn  btn-sm  btn-success uploadBtn">Upload</button>
      </div>
    </div>
  </div>
</div>
	<div class="container-fluid">
		<div class="row" id="photoRow">

		</div><br>
		<center><button id="loadMoreBtn" class="btn my-3 btn-sm btn-success">Load More</button></center>
	</div>



@endsection
@extends('Layout.app')
@section('title', 'Message List')
@section('content')
<div id="mainDiv" class="container d-none">
<div class="row">
<div class="col-md-12 p-5">
<table id="messageDataTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th class="th-sm">Name</th>
  	  <th class="th-sm">Mobile No.</th>
  	  <th class="th-sm">Email Address</th>
  	  <th class="th-sm">Message</th>
  	  <th class="th-sm">Delete</th>
    </tr>
  </thead>
  <tbody id="message_table">
	
  </tbody>
</table>

</div>
</div>
</div>
<div id="loaderDiv" class="container">
    <div class="row">
        <div class="col-md-12 text-center p-5">
             <span class="spinner spinner-border spinner-border-lg text-danger text-center"></span>
        </div>
    </div>
</div>

<div id="wrongDiv" class="container d-none">
    <div class="row">
        <div class="col-md-12 text-center text-danger p-5">
            <h1>Opps!</h1>
           <h5>Something went wrong!</h2>
        </div>
    </div>
</div>
<div class="modal fade" id="deleteModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body p-3 text-center">
        <h5 class="mt-5 text-danger">Do you want to delete this message?</h5><br>
            <span class="text-success">Message ID : </span><input type="text" class="text-center rounded" id="messageDeleteId" readonly>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-info" data-dismiss="modal">No</button>
        <button  id="messageDeleteConfirmBtn" type="button" class="btn  btn-sm  btn-danger">Yes</button>
      </div>
    </div>
  </div>
</div>

@endsection



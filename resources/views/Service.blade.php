@extends('Layout.app')
@section('title', 'Services')
@section('content')
<div id="mainDiv" class="container d-none">
<div class="row">
<div class="col-md-12 p-5">
<button id="addNewBtnId" class="btn my-3 btn-sm btn-danger">Add New </button>
<table id="serviceDataTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th class="th-sm">Image</th>
  	  <th class="th-sm">Name</th>
  	  <th class="th-sm">Description</th>
  	  <th class="th-sm">Edit</th>
  	  <th class="th-sm">Delete</th>
    </tr>
  </thead>
  <tbody id="service_table">
	
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
        <h5 class="mt-5 text-danger">Do you want to delete this service?</h5><br>
            <span class="text-success">Service ID : </span><input type="text" class="text-center rounded" id="serviceDeleteId" readonly>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-info cancel" data-dismiss="modal">No</button>
        <button  id="serviceDeleteConfirmBtn" type="button" class="btn  btn-sm  btn-danger">Yes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="editModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title">Update Service</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body p-4 text-center">
          <h5 id="serviceEditId" class="mt-4">   </h5>
          <div id="serviceEditForm" class="d-none w-100">
          <input id="serviceNameID" type="text"  class="form-control mb-4" placeholder="Service Name">
          <input id="serviceDesID" type="text"  class="form-control mb-4" placeholder="Service Description">
          <input id="serviceImgID" type="text" class="form-control mb-4" placeholder="Service Image Link">
          </div>

          <h5 id="serviceEditWrong" class="d-none">Something Went Wrong ! <br>Please try again later.</h5>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Cancel</button>
        <button  id="serviceEditConfirmBtn" type="button" class="btn  btn-sm  btn-success">Save</button>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="addModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body p-5 text-center">
          <div id="serviceAddForm" class=" w-100">
          <h6 class="mb-4">Add New Service</h6>  
          <input id="serviceNameAddID" type="text" id="" class="form-control mb-4" placeholder="Service Name">
          <input id="serviceDesAddID" type="text" id="" class="form-control mb-4" placeholder="Service Description">
          <input id="serviceImgAddID" type="text" id="" class="form-control mb-4" placeholder="Service Image Link">
          </div>

        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Cancel</button>
        <button  id="serviceAddConfirmBtn" type="button" class="btn  btn-sm  btn-danger">Save</button>
      </div>
    </div>
  </div>
</div>

@endsection



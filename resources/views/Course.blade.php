@extends('Layout.app')
@section('title', 'Course List')
@section('content')
<div id="mainDiv" class="container d-none">
<div class="row">
<div class="col-md-12 p-5">
<button id="addNewBtnId" class="btn my-3 btn-sm btn-danger">Add New Course</button>
<table id="courseDataTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
    <tr>
	  <th class="th-sm">Name</th>
	  <th class="th-sm">Fee</th>
	  <th class="th-sm">Class</th>
	  <th class="th-sm">Enroll</th>
	  <th class="th-sm">Edit</th>
	  <th class="th-sm">Delete</th>
    </tr>
  </thead>
  <tbody id="course_table">
	
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
<div class="modal fade" id="addCourseModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title">Add New Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body  text-center">
       <div class="container">
        <div class="row">
          <div class="col-md-6">
              <input id="CourseNameId" type="text" class="form-control mb-3" placeholder="Course Name">
              <input id="CourseDesId" type="text" class="form-control mb-3" placeholder="Course Description">
              <input id="CourseFeeId" type="text" class="form-control mb-3" placeholder="Course Fee">
              <input id="CourseEnrollId" type="text" class="form-control mb-3" placeholder="Total Enroll">
          </div>
          <div class="col-md-6">
          <input id="CourseClassId" type="text" id="" class="form-control mb-3" placeholder="Total Class">      
          <input id="CourseLinkId" type="text" id="" class="form-control mb-3" placeholder="Course Link">
          <input id="CourseImgId" type="text" id="" class="form-control mb-3" placeholder="Course Image">
          </div>
        </div>
       </div>
        <h5 id="courseAddWrong" class="d-none">Something Went Wrong ! <br>Please try again later.</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Cancel</button>
        <button  id="CourseAddConfirmBtn" type="button" class="btn  btn-sm  btn-danger">Add</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="editCourseModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title">Edit Current Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body  text-center">
       <div class="container d-none modalForm">
        <div class="row">
          <div class="col-md-6">
              <input id="courseEditId" type="hidden">
              <input id="CourseEditNameId" type="text" class="form-control mb-3" placeholder="Course Name">
              <input id="CourseEditDesId" type="text" class="form-control mb-3" placeholder="Course Description">
              <input id="CourseEditFeeId" type="text" class="form-control mb-3" placeholder="Course Fee">
              <input id="CourseEditEnrollId" type="text" class="form-control mb-3" placeholder="Total Enroll">
          </div>
          <div class="col-md-6">
          <input id="CourseEditClassId" type="text" id="" class="form-control mb-3" placeholder="Total Class">      
          <input id="CourseEditLinkId" type="text" id="" class="form-control mb-3" placeholder="Course Link">
          <input id="CourseEditImgId" type="text" id="" class="form-control mb-3" placeholder="Course Image">
          </div>
        </div>
       </div>
        <h5 id="courseEditWrong" class="d-none">Something Went Wrong ! <br>Please try again later.</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Cancel</button>
        <button  id="CourseEditConfirmBtn" type="button" class="btn  btn-sm  btn-danger">Save</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="deleteModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body p-3 text-center">
        <h5 class="mt-5 text-danger">Do you want to delete this course?</h5><br>
            <span class="text-success">Course ID : </span><input type="text" class="text-center rounded" id="courseDeleteId" readonly>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-info" data-dismiss="modal">No</button>
        <button  id="courseDeleteConfirmBtn" type="button" class="btn  btn-sm  btn-danger">Yes</button>
      </div>
    </div>
  </div>
</div>

@endsection



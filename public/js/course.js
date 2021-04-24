$(document).ready(function(){
//Service Section
getCoursesData();
$('#addNewBtnId').click(function(){
    $('#addCourseModal').modal('show');
    $('#CourseNameId').val('');
    $('#CourseDesId').val('');
    $('#CourseFeeId').val('');
    $('#CourseEnrollId').val('');
    $('#CourseClassId').val('');
    $('#CourseLinkId').val('');
    $('#CourseImgId').val('');
});
$('#CourseAddConfirmBtn').click(function(){
   let courseName   =  $('#CourseNameId').val();
   let courseDes    =  $('#CourseDesId').val();
   let courseFee    =  $('#CourseFeeId').val();
   let TotalEnroll  =  $('#CourseEnrollId').val();
   let TotalClass   =  $('#CourseClassId').val();
   let CourseLink   =  $('#CourseLinkId').val();
   let CourseImg    =  $('#CourseImgId').val();

   CourseAdd(courseName,courseDes,courseFee,TotalEnroll,TotalClass,CourseLink,CourseImg);

});
$('#CourseEditConfirmBtn').click(function(){

   let  id   =   $('#courseEditId').val();
   let  Name   =  $('#CourseEditNameId').val();
   let  Des    =  $('#CourseEditDesId').val();
   let  Fee    =  $('#CourseEditFeeId').val();
   let  Enroll  =  $('#CourseEditEnrollId').val();
   let  Class   =  $('#CourseEditClassId').val();
   let  Link   =  $('#CourseEditLinkId').val();
   let  Img    =  $('#CourseEditImgId').val();  

   CourseUpdate(id,Name,Des,Fee,Enroll,Class,Link,Img);

});
function getCoursesData()
   {
       axios.get('/getCoursesData')
       .then(function(response){
            if(response.status==200)
            {
                $('#mainDiv').removeClass('d-none');
                $('#loaderDiv').addClass('d-none');
                $('#courseDataTable').DataTable().destroy();
                $('#course_table').empty();
                var jsonData = response.data;
                $.each(jsonData, function(i, item){
                    $('<tr>').html(
                        "<td>"+jsonData[i].course_name+"</td>"+
                        "<td>"+jsonData[i].course_fee+"</td>"+
                        "<td>"+jsonData[i].course_totalclass+"</td>"+
                        "<td>"+jsonData[i].course_totalenroll+"</td>"+
                        "<td><a class='courseEditBtn' data-id="+jsonData[i].id+"><i class='fas fa-edit'></i></a></td>"+
                        "<td><a class='courseDeleteBtn' data-id="+jsonData[i].id+"><i class='fas fa-trash-alt'></i></a></td>"
                    ).appendTo('#course_table');
                });
                $('.courseDeleteBtn').click(function(){
                     let id = $(this).data('id');
                     $('#deleteModal').modal('show');
                     $('#courseDeleteId').val(id);
                });
                
                $('.courseEditBtn').click(function(){
                     let id = $(this).data('id');
                     $('#editCourseModal').modal('show');
                     $('#courseEditId').val(id);
                     CourseUpdateDetails(id);
                });
                $('#courseDataTable').DataTable({"orderable": true});
                $('.dataTables_length').addClass('bs-select');
            }
            else{
                $('#loaderDiv').addClass('d-none');
                $('#wrongDiv').removeClass('d-none');
            }
       })
       .catch(function(error){
                $('#loaderDiv').addClass('d-none');
                $('#wrongDiv').removeClass('d-none');
       })
      
       
   }
   //Add New Course
   function CourseAdd(courseName,courseDes,courseFee,TotalEnroll,TotalClass,CourseLink,CourseImg) {
    if(courseName.length==0)
    {
    toastr.error('Course Name is Empty !');
    }
    else if(courseDes.length==0)
    {
    toastr.error('Course Description is Empty !');
    }
    else if(courseFee.length==0)
    {
        toastr.error('Course Fee is Empty !');
    }
    else if(TotalEnroll.length==0)
    {
        toastr.error('Total Enroll is Empty !');
    }
    else if(TotalClass.length==0)
    {
        toastr.error('Total Class is Empty !');
    }
    else if(CourseLink.length==0)
    {
        toastr.error('Course Link is Empty !');
    }
    else if(CourseImg.length==0)
    {
        toastr.error('Course Image is Empty !');
    }
    else{
    $('#CourseAddConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation....
    axios.post('/CourseAdd', {
          name: courseName,
          des: courseDes,
          fee : courseFee,
          enroll : TotalEnroll,
          class : TotalClass,
          link : CourseLink,
          img: CourseImg,
      })
      .then(function(response) {
          $('#CourseAddConfirmBtn').html("Save");
    
          if(response.status==200){
    
            if (response.data == 1) {
              $('#addCourseModal').modal('hide');
              toastr.success('New Course Add Success');
              getCoursesData();
          } else {
              $('#addCourseModal').modal('hide');
              toastr.error('Add Fail');
              getCoursesData();
          }  
       } 
       else{
          $('#addCourseModal').modal('hide');
          // toastr.error('Something Went Wrong !');
       }   
    
      
    })
    .catch(function(error) {
      $('#addCourseModal').modal('hide');
      toastr.error('Something Went Wrong !');
    })
    
    }
    
    }


    $('#courseDeleteConfirmBtn').click(function(){
        let id = $('#courseDeleteId').val();
        $('#deleteModal').modal('hide');
        courseDelete(id);
   });
   
// Services Delete
function courseDelete(id) {

$('#courseDeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>") //Animation....

axios.post('/CourseDelete', {id:id})
   .then(function(response) {
       $('#courseDeleteConfirmBtn').html("Yes");
       if(response.status==200){
       if (response.data == 1) {
           $('#deleteModal').modal('hide');
           toastr.success('Delete Success');
           getCoursesData();
       } 
       else {
           $('#deleteModal').modal('hide');
           toastr.error('Delete Fail');
            getCoursesData();
       }
       }
       else{
        $('#deleteModal').modal('hide');
        toastr.error('Something Went Wrong !');
       }

   })
   .catch(function(error) {
    
   });
}
function CourseUpdateDetails(id) {

axios.post('/CourseDetails', {id:id})
   .then(function(response) {
       if(response.status==200){
            $('.modalForm').removeClass('d-none');
            let jsonData = response.data;
            $('#CourseEditNameId').val(jsonData[0].course_name);
            $('#CourseEditDesId').val(jsonData[0].course_des);
            $('#CourseEditFeeId').val(jsonData[0].course_fee);
            $('#CourseEditEnrollId').val(jsonData[0].course_totalenroll);
            $('#CourseEditClassId').val(jsonData[0].course_totalclass);
            $('#CourseEditLinkId').val(jsonData[0].course_link);
            $('#CourseEditImgId').val(jsonData[0].course_img);
        }
       else{
        $('#courseEditWrong').removeClass('d-none');
        }

   })
   .catch(function(error) {
    $('#courseEditWrong').removeClass('d-none');
   });
}
function CourseUpdate(id,Name,Des,Fee,Enroll,Class,Link,Img)
{
    if(Name.length==0)
    {
    toastr.error('Course Name is Empty !');
    }
    else if(Des.length==0)
    {
    toastr.error('Course Description is Empty !');
    }
    else if(Fee.length==0)
    {
        toastr.error('Course Fee is Empty !');
    }
    else if(Enroll.length==0)
    {
        toastr.error('Total Enroll is Empty !');
    }
    else if(Class.length==0)
    {
        toastr.error('Total Class is Empty !');
    }
    else if(Link.length==0)
    {
        toastr.error('Course Link is Empty !');
    }
    else if(Img.length==0)
    {
        toastr.error('Course Image is Empty !');
    }
    else{ 
        $('#CourseEditConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>");
    axios.post('/CourseUpdate', {
        id:id,
        name: Name,
        des: Des,
        fee : Fee,
        enroll : Enroll,
        class : Class,
        link : Link,
        img: Img,
    })
    .then(function(response){
        $('#CourseEditConfirmBtn').html("Save");
       if(response.status==200)
       {
           if(response.data==1)
           {
            $('#editCourseModal').modal('hide');
            toastr.success('Update Success');
            getCoursesData();
           }
           else{
            $('#editCourseModal').modal('hide');
            toastr.info('Nothing to Update');
           }
       }
       else{
        $('#editCourseModal').modal('hide');
        toastr.error('Something Went Wrong!');
       }
    })
    .catch(function(error){
        
    })

}
}

});
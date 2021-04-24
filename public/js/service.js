$(document).ready(function () {
//Service Section
getServicesData();
$('#serviceDeleteConfirmBtn').click(function() {
    var id = $('#serviceDeleteId').val();
    ServiceDelete(id);
    });
    $('.cancel').click(function() {
      toastr.error('Nothing to Delete');
    });

    $('#serviceDeleteConfirmBtn').click(function() {
        var id = $('#serviceDeleteId').val();
        ServiceDelete(id);
        }); 

   $('#serviceEditConfirmBtn').click(function() {
        var id = $('#serviceEditId').html();
        var name = $('#serviceNameID').val();
        var des = $('#serviceDesID').val();
        var img = $('#serviceImgID').val();
        ServiceUpdate(id,name,des,img);
    });
    $('#serviceAddConfirmBtn').click(function() {
        var name = $('#serviceNameAddID').val();
        var des = $('#serviceDesAddID').val();
        var img = $('#serviceImgAddID').val();
        ServiceAdd(name,des,img);
    });
function getServicesData()
   {
       axios.get('/getServicesData')
       .then(function(response){
            if(response.status==200)
            {
                $('#mainDiv').removeClass('d-none');
                $('#loaderDiv').addClass('d-none');
                $('#serviceDataTable').DataTable().destroy();
                $('#service_table').empty();
                var jsonData = response.data;
                $.each(jsonData, function(i, item){
                    $('<tr>').html(
                        "<td><img class='table-img' src="+jsonData[i].service_img+"></td>"+
                        "<td>"+jsonData[i].service_name+"</td>"+
                        "<td>"+jsonData[i].service_des+"</td>"+
                        "<td><a class='serviceEditBtn' data-id="+jsonData[i].id+"><i class='fas fa-edit'></i></a></td>"+
                        "<td><a class='serviceDeleteBtn' data-id="+jsonData[i].id+"><i class='fas fa-trash-alt'></i></a></td>"
                    ).appendTo('#service_table');
                });
                $('.serviceDeleteBtn').click(function(){
                     let id = $(this).data('id');
                     $('#deleteModal').modal('show');
                     $('#serviceDeleteId').val(id);
                });
                
                $('.serviceEditBtn').click(function(){
                     let id = $(this).data('id');
                     $('#editModal').modal('show');
                     $('#serviceEditId').html(id);
                     ServiceUpdateDetails(id);
                });
                $('#addNewBtnId').click(function(){
                     $('#addModal').modal('show');
                     $('#serviceNameAddID').val('');
                     $('#serviceDesAddID').val('');
                     $('#serviceImgAddID').val('');

                });

                $('#serviceDataTable').DataTable({"orderable": false});
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

   
// Services Delete
function ServiceDelete(id) {

$('#serviceDeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>") //Animation....

axios.post('/ServiceDelete', {id:id})
   .then(function(response) {
       $('#serviceDeleteConfirmBtn').html("Yes");
       if(response.status==200){
       if (response.data == 1) {
           $('#deleteModal').modal('hide');
           toastr.success('Delete Success');
           getServicesData();
       } 
       else {
           $('#deleteModal').modal('hide');
           toastr.error('Delete Fail');
           getServicesData();
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
function ServiceUpdateDetails(id) {

axios.post('/ServiceDetails', {id:id})
   .then(function(response) {
       if(response.status==200){
           $('#serviceEditForm').removeClass('d-none');
           let jsonData = response.data;
           $('#serviceNameID').val(jsonData[0].service_name);
           $('#serviceDesID').val(jsonData[0].service_des);
           $('#serviceImgID').val(jsonData[0].service_img);
        }
       else{
        $('#serviceEditWrong').removeClass('d-none');
        }

   })
   .catch(function(error) {
    $('#serviceEditWrong').removeClass('d-none');
   });
}
function ServiceUpdate(id,name,des,img) {
    if(name.length==0){
        toastr.error('Service Name is Empty !');
        }
        else if(des.length==0){
        toastr.error('Service Description is Empty !');
        }
        else if(img.length==0){
        toastr.error('Service Image is Empty !');
        }
        else{
        $('#serviceEditConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>");
    axios.post('/ServiceUpdate', {id:id,name:name,des:des,img:img})
    .then(function(response){
        $('#serviceEditConfirmBtn').html("Save");
       if(response.status==200)
       {
           if(response.data==1)
           {
            $('#editModal').modal('hide');
            toastr.success('Update Success');
            getServicesData();
           }
           else{
            $('#editModal').modal('hide');
            toastr.info('Nothing to Update');
            getServicesData();
           }
       }
       else{
        $('#editModal').modal('hide');
        toastr.error('Something Went Wrong!');
       }
    })
    .catch(function(error){
        toastr.error('Something Went Wrong!');
    })

}
}
function ServiceAdd(serviceName,serviceDes,serviceImg) {

if(serviceName.length==0){
toastr.error('Service Name is Empty !');
}
else if(serviceDes.length==0){
toastr.error('Service Description is Empty !');
}
else if(serviceImg.length==0){
toastr.error('Service Image is Empty !');
}
else{
$('#serviceAddConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation....
axios.post('/ServiceAdd', {
      name: serviceName,
      des: serviceDes,
      img: serviceImg
  })
  .then(function(response) {
      $('#serviceAddConfirmBtn').html("Save");

      if(response.status==200){

        if (response.data == 1) {
          $('#addModal').modal('hide');
          toastr.success('Added Success');
          getServicesData();
      } else {
          $('#addModal').modal('hide');
          toastr.error('Added Fail');
          getServicesData();
      }  
   } 
   else{
      $('#addModal').modal('hide');
       toastr.error('Something Went Wrong !');
   }   

  
})
.catch(function(error) {
  $('#addModal').modal('hide');
  toastr.error('Something Went Wrong !');
})

}

}
});
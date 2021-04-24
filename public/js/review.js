$(document).ready(function () {
    //review Section
    getReviewData();

    $('#addNewBtnId').click(function(){
        $('#addModal').modal('show');
        $('#reviewNameAddID').val('');
        $('#reviewDesAddID').val('');
        $('#reviewImgAddID').val('');

   });

   $('#reviewAddConfirmBtn').click(function() {
    var name = $('#reviewNameAddID').val();
    var des = $('#reviewDesAddID').val();
    var img = $('#reviewImgAddID').val();
    ReviewAdd(name,des,img);
    });

    $('#reviewDeleteConfirmBtn').click(function() {
        var id = $('#reviewDeleteId').val();
        ReviewDelete(id);
    });
    
       $('#reviewEditConfirmBtn').click(function() {
            var id = $('#reviewEditId').val();
            var name = $('#reviewNameID').val();
            var des = $('#reviewDesID').val();
            var img = $('#reviewImgID').val();
            ReviewUpdate(id,name,des,img);
        });

    function getReviewData()
       {
           axios.get('/getReviewData')
           .then(function(response){
                if(response.status==200)
                {
                    $('#mainDiv').removeClass('d-none');
                    $('#loaderDiv').addClass('d-none');
                    $('#reviewDataTable').DataTable().destroy();
                    $('#review_table').empty();
                    var jsonData = response.data;
                    $.each(jsonData, function(i, item){
                        $('<tr>').html(
                            "<td><img class='table-img' src="+jsonData[i].img+"></td>"+
                            "<td>"+jsonData[i].name+"</td>"+
                            "<td>"+jsonData[i].des+"</td>"+
                            "<td><a class='reviewEditBtn' data-id="+jsonData[i].id+"><i class='fas fa-edit'></i></a></td>"+
                            "<td><a class='reviewDeleteBtn' data-id="+jsonData[i].id+"><i class='fas fa-trash-alt'></i></a></td>"
                        ).appendTo('#review_table');
                    });
                    $('.reviewDeleteBtn').click(function(){
                         let id = $(this).data('id');
                         $('#deleteModal').modal('show');
                         $('#reviewDeleteId').val(id);
                    });
                    
                    $('.reviewEditBtn').click(function(){
                         let id = $(this).data('id');
                         $('#editModal').modal('show');
                         $('#reviewEditId').val(id);
                         ReviewUpdateDetails(id);
                    });
    
                    $('#reviewDataTable').DataTable({"order": false});
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
    
       
    // reviews Delete
    function ReviewDelete(id) {
    
    $('#reviewDeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div> Deleting...") //Animation....
    
    axios.post('/ReviewDelete', {id:id})
       .then(function(response) {
           $('#reviewDeleteConfirmBtn').html("Yes");
           if(response.status==200){
           if (response.data == 1) {
               $('#deleteModal').modal('hide');
               toastr.success('Delete Success');
               getReviewData();
           } 
           else {
               $('#deleteModal').modal('hide');
               toastr.error('Delete Fail');
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
    function ReviewUpdateDetails(id) {
    
    axios.post('/ReviewDetails', {id:id})
       .then(function(response) {
           if(response.status==200){
               $('#reviewEditForm').removeClass('d-none');
               let jsonData = response.data;
               $('#reviewNameID').val(jsonData[0].name);
               $('#reviewDesID').val(jsonData[0].des);
               $('#reviewImgID').val(jsonData[0].img);
            }
           else{
            $('#reviewEditWrong').removeClass('d-none');
            }
    
       })
       .catch(function(error) {
        $('#reviewEditWrong').removeClass('d-none');
       });
    }
    function ReviewUpdate(id,name,des,img) {
        if(name.length==0){
            toastr.error('Review Name is Empty !');
            }
            else if(des.length==0){
            toastr.error('Review Description is Empty !');
            }
            else if(img.length==0){
            toastr.error('Review Image is Empty !');
            }
            else{
            $('#reviewEditConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div> Editing...");
        axios.post('/ReviewUpdate', {id:id,name:name,des:des,img:img})
        .then(function(response){
            $('#reviewEditConfirmBtn').html("Save");
           if(response.status==200)
           {
               if(response.data==1)
               {
                $('#editModal').modal('hide');
                toastr.success('Update Success');
                getReviewData();
               }
               else{
                $('#editModal').modal('hide');
                toastr.info('Nothing to Update');
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
    function ReviewAdd(reviewName,reviewDes,reviewImg) {
    
    if(reviewName.length==0){
    toastr.error('Review Name is Empty !');
    }
    else if(reviewDes.length==0){
    toastr.error('Review Description is Empty !');
    }
    else if(reviewImg.length==0){
    toastr.error('Review Image is Empty !');
    }
    else{
    $('#reviewAddConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div> Inserting..."); //Animation....
    axios.post('/ReviewAdd', {
          name: reviewName,
          des: reviewDes,
          img: reviewImg
      })
      .then(function(response) {
          $('#reviewAddConfirmBtn').html("Save");
          if(response.status==200){
            if (response.data == 1) {
              $('#addModal').modal('hide');
              toastr.success('Added Success');
              getReviewData();
          } else {
              $('#addModal').modal('hide');
              toastr.error('Added Fail');
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
$(document).ready(function () {
    //Service Section
    getMessagesData();
    $('#messageDeleteConfirmBtn').click(function() {
        var id = $('#messageDeleteId').val();
        MessageDelete(id);
        });
    function getMessagesData()
       {
           axios.get('/getMessagesData')
           .then(function(response){
                if(response.status==200)
                {
                    $('#mainDiv').removeClass('d-none');
                    $('#loaderDiv').addClass('d-none');
                    $('#messageDataTable').DataTable().destroy();
                    $('#message_table').empty();
                    var jsonData = response.data;
                    $.each(jsonData, function(i, item){
                        $('<tr>').html(
                            "<td>"+jsonData[i].contact_name+"</td>"+
                            "<td>"+jsonData[i].contact_number+"</td>"+
                            "<td>"+jsonData[i].contact_email+"</td>"+
                            "<td>"+jsonData[i].contact_message+"</td>"+
                            "<td><a class='messageDeleteBtn' data-id="+jsonData[i].id+"><i class='fas fa-trash-alt'></i></a></td>"
                        ).appendTo('#message_table');
                    });
                    $('.messageDeleteBtn').click(function(){
                         let id = $(this).data('id');
                         $('#deleteModal').modal('show');
                         $('#messageDeleteId').val(id);
                    });

                    $('#messageDataTable').DataTable({"order": false});
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
    function MessageDelete(id) {
    
    $('#messageDeleteConfirmBtn').html("<span class='spinner-border spinner-border-sm' role='status'></span>"+ " Deleting...") //Animation....
    
    axios.post('/MessageDelete', {id:id})
       .then(function(response) {
           $('#messageDeleteConfirmBtn').html("Yes");
           if(response.status==200){
           if (response.data == 1) {
               $('#deleteModal').modal('hide');
               toastr.success('Delete Success');
               getMessagesData();
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
    });
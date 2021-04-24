$(document).ready(function(){
    //Project Section
    getProjectsData();
    $('#addNewBtnId').click(function(){
        $('#addModal').modal('show');
        $('#projectNameAddID').val('');
        $('#projectDesAddID').val('');
        $('#projectLinkAddID').val('');
        $('#projectImgAddID').val('');
    });
    $('#projectAddConfirmBtn').click(function(){
        let  Name   =  $('#projectNameAddID').val();
        let  Des    =  $('#projectDesAddID').val();
        let  Link   =  $('#projectLinkAddID').val();
        let  Img    =  $('#projectImgAddID').val();
        ProjectAdd(Name,Des,Link,Img);
    
    });
    $('#projectEditConfirmBtn').click(function(){
        let  id     =  $('#projectEditId').val();
        let  Name   =  $('#projectNameEditID').val();
        let  Des    =  $('#projectDesEditID').val();
        let  Link   =  $('#projectLinkEditID').val();
        let  Img    =  $('#projectImgEditID').val();
       ProjectUpdate(id,Name,Des,Link,Img);
    
    });
    function getProjectsData()
       {
           axios.get('/getProjectsData')
           .then(function(response){
                if(response.status==200)
                {
                    $('#mainDiv').removeClass('d-none');
                    $('#loaderDiv').addClass('d-none');
                    $('#projectDataTable').DataTable().destroy();
                    $('#project_table').empty();
                    var jsonData = response.data;
                    $.each(jsonData, function(i, item){
                        $('<tr>').html(
                            "<td><img class='table-img' src="+jsonData[i].project_img+"></td>"+
                            "<td>"+jsonData[i].project_name+"</td>"+
                            "<td>"+jsonData[i].project_des+"</td>"+
                            "<td><a class='projectEditBtn' data-id="+jsonData[i].id+"><i class='fas fa-edit'></i></a></td>"+
                            "<td><a class='projectDeleteBtn' data-id="+jsonData[i].id+"><i class='fas fa-trash-alt'></i></a></td>"
                        ).appendTo('#project_table');
                    });
                    $('.projectDeleteBtn').click(function(){
                         let id = $(this).data('id');
                         $('#deleteModal').modal('show');
                         $('#projectDeleteId').val(id);
                    });
                    
                    $('.projectEditBtn').click(function(){
                         let id = $(this).data('id');
                         $('#editModal').modal('show');
                         $('#projectEditId').val(id);
                         ProjectUpdateDetails(id);
                    });
                    $('#projectDataTable').DataTable({"order": false});
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
       function ProjectAdd(ProjectName,ProjectDes,ProjectLink,ProjectImg) {
        if(ProjectName.length==0)
        {
        toastr.error('Project Name is Empty !');
        }
        else if(ProjectDes.length==0)
        {
        toastr.error('Project Description is Empty !');
        }
        else if(ProjectLink.length==0)
        {
            toastr.error('Project Link is Empty !');
        }
        else if(ProjectImg.length==0)
        {
            toastr.error('Project Image is Empty !');
        }
        else{
        $('#projectAddConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation....
        axios.post('/ProjectAdd', {
              name: ProjectName,
              des: ProjectDes,
              link : ProjectLink,
              img: ProjectImg,
          })
          .then(function(response) {
              $('#projectAddConfirmBtn').html("Save");
        
              if(response.status==200){
                if (response.data == 1) {
                  $('#addModal').modal('hide');
                  toastr.success('New Project Add Success');
                  getProjectsData();
              } else {
                  $('#addModal').modal('hide');
                  toastr.error('Add Fail');
                  getProjectsData();
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
    
    
        $('#projectDeleteConfirmBtn').click(function(){
            let id = $('#projectDeleteId').val();
            $('#deleteModal').modal('hide');
            projectDelete(id);
       });
       
    // Services Delete
    function projectDelete(id) {
    
    $('#projectDeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>") //Animation....
    
    axios.post('/ProjectDelete', {id:id})
       .then(function(response) {
           $('#projectDeleteConfirmBtn').html("Yes");
           if(response.status==200){
           if (response.data == 1) {
               $('#deleteModal').modal('hide');
               toastr.success('Delete Success');
               getProjectsData();
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
    function ProjectUpdateDetails(id) {
    
    axios.post('/ProjectDetails', {id:id})
       .then(function(response) {
           if(response.status==200){
                $('#projectEditForm').removeClass('d-none');
                let jsonData = response.data;
                $('#projectNameEditID').val(jsonData[0].project_name);
                $('#projectDesEditID').val(jsonData[0].project_des);
                $('#projectLinkEditID').val(jsonData[0].project_link);
                $('#projectImgEditID').val(jsonData[0].project_img);
            }
           else{
            $('#projectEditWrong').removeClass('d-none');
            }
    
       })
       .catch(function(error) {
        $('#projectEditWrong').removeClass('d-none');
       });
    }
    function ProjectUpdate(id,Name,Des,Link,Img)
    {
        if(Name.length==0)
        {
        toastr.error('Project Name is Empty !');
        }
        else if(Des.length==0)
        {
        toastr.error('Project Description is Empty !');
        }
        else if(Link.length==0)
        {
            toastr.error('Project Link is Empty !');
        }
        else if(Img.length==0)
        {
            toastr.error('Project Image is Empty !');
        }
        else{ 
            $('#projectEditConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>");
        axios.post('/ProjectUpdate', {
            id:id,
            name: Name,
            des: Des,
            link : Link,
            img: Img
        })
        .then(function(response){
            $('#projectEditConfirmBtn').html("Update");
           if(response.status==200)
           {
               if(response.data==1)
               {
                $('#editModal').modal('hide');
                toastr.success('Update Success');
                getProjectsData();
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
            
        })
    
    }
    }
    
    });
$(document).ready(function(){
    GetPhotos();
    function GetPhotos()
    {
        axios.get('/GetPhotos')
        .then(function(response){
           if(response.status==200)
           {
               let JsonData = response.data;
               $.each(JsonData, function(i, item){
                $("<div class='col-md-3'>").html(
                    "<img class='imgRow' data-id="+item['id']+" src="+item['location']+">"+
                    "<button class='btn btn-danger btn-sm delete' data-id="+item['id']+" data-photo="+item['location']+">Delete</button>"
                ).appendTo('#photoRow');
               });
               $('.delete').click(function(event){
                   event.preventDefault();
                   if(confirm('Are you sure?'))
                   {
                       let id = $(this).data('id');
                       let url = $(this).data('photo');
                       deletePhoto(id, url);
                   }
               })
           }
        })
        .catch(function(error){

        })
    }
    function deletePhoto(id, url)
    {
        let formData = new FormData();
        formData.append('id', id);
        formData.append('url', url);
        axios.post('/deletePhoto', formData)
        .then(function(response){
            img=0;
            if(response.status==200 && response.data==1)
            {
                toastr.success('Image has been deleted');
                $('#photoRow').empty();
                GetPhotos();
            }
           
        })
        .catch(function(error){

        })
    }
    $('.inputImg').change(function(){
        let reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onload = function(event){
            let imgSource = event.target.result;
            $('.previewImg').attr('src', imgSource);
        }
    });
    $('.uploadBtn').click(function(){
        $(this).html("<div class='spinner-border spinner-border-sm' role='status'></div> Uploading...");
        $(this).attr('disabled', true);
        let imgFile = $('.inputImg').prop('files')[0];
        let formData = new FormData();
        formData.append('photo', imgFile);
        axios.post('/upload_photo', formData)
        .then(function(response){
          if(response.status==200 && response.data==1)
          {
            $('.inputImg').val('');
            $('.previewImg').attr('src', '/images/default-image.jpg');
            $('.uploadBtn').html("Upload");
            $('.uploadBtn').attr('disabled', false);
            toastr.success('Image Upload Successfully');
                $('#photoModal').modal('hide');
                $('#photoRow').empty();
                GetPhotos();
          }
          else{
            $('.uploadBtn').html("Upload");
            $('.uploadBtn').attr('disabled', false);
            toastr.error('Image Upload Failed!');
            $('#photoModal').modal('hide');
          }
        })
        .catch(function(error){
            $('.uploadBtn').html("Upload");
            $('.uploadBtn').attr('disabled', false);
            toastr.error('Something went wrong!');
             $('#photoModal').modal('hide');
        })
    });
    $('#loadMoreBtn').click(function(){
        $('#loadMoreBtn').removeClass('btn-danger');
        $('#loadMoreBtn').addClass('btn-success');
        let FirstImg = $(this).closest('div').find('img').data('id');
        LoadMorePhoto(FirstImg);
     })
     let img = 0;
     function LoadMorePhoto(FirstImg, loadMoreBtn)
     {  
         $('#loadMoreBtn').html("<div class='spinner spinner-border spinner-border-sm'></div>");
         img = img+4;
         let StartImg = img+FirstImg;
         let url = '/GetPhotosByID/'+StartImg;
         axios.get(url)
         .then(function(response){
            $('#loadMoreBtn').html("Load More");
            if(response.status==200)
            {
                
                let JsonData = response.data;
                $.each(JsonData, function(i, item){
                 $("<div class='col-md-3'>").html(
                     "<img class='imgRow' data-id="+item['id']+" src="+item['location']+">"+
                     "<button class='btn btn-danger btn-sm delete' data-id="+item['id']+" data-photo="+item['location']+">Delete</button>"
                 ).appendTo('#photoRow');
               
                
            })
            $('.delete').click(function(event){
                event.preventDefault();
                if(confirm('Are you sure?'))
                {
                    let id = $(this).data('id');
                    let url = $(this).data('photo');
                    deletePhoto(id, url);
                }
            }) 
       
            }
            if(response.data==0)
            {
                $('#loadMoreBtn').html("No More Data");
                $('#loadMoreBtn').removeClass('btn-success');
                $('#loadMoreBtn').addClass('btn-danger');
            }
            })
     
         .catch(function(error){

         })
     }
});
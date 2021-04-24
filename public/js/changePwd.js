$(document).ready(function(){
    $('.change_pwd').on('submit', function(event){
        event.preventDefault();
        let formData = $(this).serializeArray();
        let opass = formData[0]['value'];
        let npass = formData[1]['value'];
        let cpass = formData[2]['value'];
        let url  = '/change_password';
         if(opass.length==0)
         {
            toastr.error('Old password is empty!');
         }
         else if(npass.length==0)
         {
            toastr.error('New password is empty!');
         }
         else if(cpass.length==0)
         {
            toastr.error('Re-type password is empty!');
         }
         else if(npass.length < 3)
         {
            toastr.error('New password is too short!');
         }
         else if(npass!=cpass)
         {
            toastr.error('Both password did not match!');
         }
        else{
            axios.post(url, {
                opass : opass,
                npass : npass,
                })
                .then(function(response){
                    if(response.status==200 && response.data==1)
                    {
                        $('.changePwd').attr('disabled', true);
                        $('.changePwd').html('Please Wait...');
                        toastr.success('Password changed successfully!');
                        setTimeout(function(){
                            window.location.href='/admin/login';
                        }, 3000);
                    }
                    else{
                        toastr.error('Old password did not match!');
                    }
                })
                .catch(function(error){
                    toastr.error('Password changed failed! Try again');
                })
            }  
    });
})
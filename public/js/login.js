$(document).ready(function(){
    $('.login_form').on('submit', function(event){
        event.preventDefault();
        let formData = $(this).serializeArray();
        let user = formData[0]['value'];
        let pass = formData[1]['value'];
        let mail = /\S+@\S+\.\S+/;
        let url  = '/admin/login';
         if(user.length==0)
         {
            toastr.error('Username is empty!');
         }
         else if(pass.length==0)
         {
            toastr.error('Password is empty!');
         }
         else if(user.length!=0)
            {
                if(!mail.test(user))
                {
                    toastr.error('Invail Email Address!');
                }else{
                    axios.post(url, {
                    user : user,
                    pass : pass,
                    })
                    .then(function(response){
                        if(response.status==200 && response.data==1)
                        {
                            $('.loginBtn').attr('disabled', true);
                            $('.loginBtn').html('Please Wait...');
                            toastr.success('Login Successfully!');
                            setTimeout(function(){
                                window.location.href='/';
                            },2000);
                            
                        }
                        else{
                            toastr.error('Username or Password is wrong!');
                        }
                    })
                    .catch(function(error){
                        toastr.error('Login Failed! Try again');
                    })
                }
            }
         
         
         
         
    });
})

$(document).ready(function () {
   
    $("#myForm").submit(function (event) {
        event.preventDefault(); 

        var name = $("#name").val();
        var password = $("#paswword").val();

        var myurl="http://localhost:8081/account/login?username="+name+"&password="+password;
        $.ajax({
            url: myurl,
            type: "GET",
            Accept: "application/json",
            contentType: "application/json",
           
            cache: false,
            processData: false,
            dataType: 'json',
            //mode: 'use-cors',
            success: function (response) {

                alert("Login successfully!");

              var   jsonData=  JSON.parse( JSON.stringify(response))

               sessionStorage.setItem('label', JSON.stringify(jsonData))

                window.location.href = "notesPage.html";

             $("#name").val("");
             $("#paswword").val("");
            },
            error: function () {
                alert("Incorrect login/Password");
            }

        });

    });



    $('#forgotPassword').submit(function(event){

        event.preventDefault();
        var inputs = document.querySelectorAll('input');

        var username=$('#name').val();
        var password=$('#paswword').val();
        var cnfpassword=$('#confirmPaswword').val();
        console.log(username)
      
        
       if(String(password).valueOf()==String(cnfpassword).valueOf()){
        console.log("Both are matched")

        var myurl="http://localhost:8081/account/forgot-password?username="+username+"&newPassword="+password;

        $.ajax({
            url: myurl,
            type: "POST",    
            Accept:"application/json",
            contentType: "application/json",        
            dataType: 'json',
            success: function (response) {

                alert("Password Changed successfully!");

                window.location.href = "login.html";
            },
            error: function () {

                alert("Incorrect UserId");
            }


        })

       }
       else{
        console.log("Both are not same")
       }

       inputs.forEach(input => input.value = '');
       

    })


});

   
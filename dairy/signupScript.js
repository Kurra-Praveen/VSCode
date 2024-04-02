$(document).ready(function () {



    $('#mySignUpForm').submit(function(event){

        event.preventDefault();

        var name = $("#name").val();
        var password = $("#paswword").val();
        var emailAddress = $("#email").val();
        var mobile = $("#mobile").val();

        console.log(name+ password+ emailAddress+ mobile)

        var dataset={
            userName:name,
            password:password,
            email:emailAddress,
            mobileNo:mobile
        }

        $.ajax({
            url: "http://localhost:8081/account/create",
            type: "POST",
            Accept: "application/json",
            contentType: "application/json",          
            cache: false,
            processData: false,
            dataType: 'json',
            data:JSON.stringify(dataset),

            success: function (response) {

                alert("Created successfully!");

              var   jsonData=  JSON.parse( JSON.stringify(response))

              console.log(jsonData)

              $("#name").val("");
            $("#paswword").val("");
             $("#email").val("");
            $("#mobile").val("");

             window.location.href = "login.html";




            },
            error: function () {
                alert("Incorrect login/Password");
            }

        });





    

    });

});
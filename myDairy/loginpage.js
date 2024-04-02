

$(document).ready(function () {
    //var form = $("#employeeForm");
    $("#myForm").submit(function (event) {
        event.preventDefault(); 

        var name = $("#name").val();
        var password = $("#paswword").val();
       // var sal = $("#Salary").val();

        var myurl="http://localhost:8080/getUser?username="+name+"&password="+password;

       // var formData = JSON.stringify(data1);
        // make an AJAX POST request to the API endpoint
        $.ajax({
            url: myurl,
            type: "GET",

            Accept: "application/json",
            contentType: "application/json",
            //data: formData,
            cache: false,
            processData: false,
            dataType: 'json',
            //mode: 'use-cors',
            success: function (response) {
                // console.log(data)
                alert("Data submitted successfully!");
                console.log(response)
               // myData=response;
                
                localStorage.setItem('myData', response);
               // $("#myTable tbody").append("<tr><td>" + name + "</td><td>" + job + "</td><td>" + sal + "</td></tr>");
               window.location.href = "entryPage.html";
            },
            error: function () {
                alert("Error submitting data.");
            }

        });

    });

   


});
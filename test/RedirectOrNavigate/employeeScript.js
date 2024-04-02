$(document).ready(function () {
    var form = $("#employeeForm");
    $("#myForm").submit(function (event) {
        event.preventDefault(); 

        var name = $("#name").val();
        var job = $("#jobTitle").val();
        var sal = $("#Salary").val();

        var data1 = {
            empName: name,
            jobTitle: job,
            salary: sal
        };

        var formData = JSON.stringify(data1);
        // make an AJAX POST request to the API endpoint
        $.ajax({
            url: "http://localhost:8080/employee/addEmp",
            type: "POST",

            Accept: "application/json",
            contentType: "application/json",
            data: formData,
            cache: false,
            processData: false,
            dataType: 'json',
            //mode: 'use-cors',
            success: function (response) {
                // console.log(data)
                alert("Data submitted successfully!");
                console.log(response)
               // $("#myTable tbody").append("<tr><td>" + name + "</td><td>" + job + "</td><td>" + sal + "</td></tr>");
               window.location.href = "SecondPage.html";
            },
            error: function () {
                alert("Error submitting data.");
            }

        });

    });

   


});





  $(document).ready(function(){

	var filterBtn = $('#filter-btn');
	var filterSalary = $('#filter-salary');
	var tbody = $('#myTable tbody');
   
	$.ajax({
		url: 'http://localhost:8080/employee/getAllEmp',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
		  $.each(data, function(index, employee) {
			var row = '<tr>' +
						'<td>' + employee.empName + '</td>' +
						'<td>' + employee.jobTitle + '</td>' +
						'<td>' + employee.salary + '</td>' +
					  '</tr>';
			$('#myTable tbody').append(row);
		  });
		},
		error: function(jqXHR, textStatus, errorThrown) {
		  console.log('Error: ' + textStatus + ' - ' + errorThrown);
		}
	  });





	$("#myForm").submit(function(event){
		event.preventDefault(); // prevent the form from submitting normally

		// get the values from the form fields
		var name = $("#name").val();
		var job = $("#jobTitle").val();
		var sal = $("#Salary").val();

		// create a data object to send to the API
		var data1 = {
			empName: name,
			jobTitle: job,
			salary:sal
		};

        var formData = JSON.stringify(data1);
    
		// make an AJAX POST request to the API endpoint
	
		$.ajax({
			url: "http://localhost:8080/employee/addEmp",
			type: "POST",
		
		  Accept:"application/json",
		  contentType: "application/json",
			data: formData,
			cache: false,
			processData: false,
			dataType: 'json',
			//mode: 'use-cors',
			success: function(response){
               // console.log(data)
				alert("Data submitted successfully!");
                console.log(response)
				$("#myTable tbody").append("<tr><td>" + name + "</td><td>" + job + "</td><td>" + sal + "</td></tr>");
			},
			error: function(){
				alert("Error submitting data.");
			}


		});

	

	});

	$('#filter-btn').click(function(){

		console.log("Sucess")


		var filterValue = parseInt(filterSalary.val());

		tbody.empty();

		$.ajax({
			url: 'http://localhost:8080/employee/getEmpBySalary?filter='+filterValue,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
			  $.each(data, function(index, employee) {
				var row = '<tr>' +
							'<td>' + employee.empName + '</td>' +
							'<td>' + employee.jobTitle + '</td>' +
							'<td>' + employee.salary + '</td>' +
						  '</tr>';
				$('#myTable tbody').append(row);
			  });
			},
			error: function(jqXHR, textStatus, errorThrown) {
			  console.log('Error: ' + textStatus + ' - ' + errorThrown);
			}
		  });

	})



	  
});




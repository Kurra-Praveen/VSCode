
$(document).ready(function () {

    var filterBtn = $('#filter-btn');
    var filterSalary = $('#filter-salary');
    var tbody = $('#myTable tbody');

    $.ajax({
        url: 'http://localhost:8080/employee/getAllEmp',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (index, employee) {
                var row = '<tr>' +
                    '<td>' + employee.empName + '</td>' +
                    '<td>' + employee.jobTitle + '</td>' +
                    '<td>' + employee.salary + '</td>' +
                    '</tr>';
                $('#myTable tbody').append(row);
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error: ' + textStatus + ' - ' + errorThrown);
        }
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




function sortTable(column) {
    const $table = $('table');
    const $rows = $table.find('tbody > tr').get();
    let ascending = true;
    $rows.sort((a, b) => {
      const x = $(a).find('td').eq(column).text();
      const y = $(b).find('td').eq(column).text();
      return x.localeCompare(y, undefined, { numeric: true });
    });
    if (column === $table.data('sortedColumn')) {
      $rows.reverse();
      ascending = false;
    }
    $.each($rows, function(index, row) {
      $table.children('tbody').append(row);
    });
    $table.data('sortedColumn', column);
    const $arrows = $table.find('.arrow');
    $arrows.removeClass('asc desc');
    const $arrow = $arrows.eq(column);
    $arrow.toggleClass('asc', ascending);
    $arrow.toggleClass('desc', !ascending);
  }
  
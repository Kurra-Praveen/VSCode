var XMLHttpRequest = require('xhr2');

var request=new XMLHttpRequest();

// function get(){

//    request.open("GET",'http://localhost:8080/employee/getAllEmp');

//     request.send();
  
//      request.onload=()=>{

//     console.log(JSON.parse( request.response))
//      }

// }


function post(){


    request.open("POST",'http://localhost:8080/employee/addEmp');

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let  body={
        "empName": "Amitab Bachhan",
        "jobTitle": "Actor ",
        "salary": 30009
    };
  

     request.send( JSON.stringify( body));

     request.onload=()=>{

        console.log( request.response)
         }
}

post()



// 		fetch('http://localhost:8080/employee/addEmp', {
//        method: 'POST',
//       headers: { 'Content-Type': 'application/json'},
// 	  //type: ['application/json', 'text/plain'],
// 	  mode: 'no-cors',
//       body: formData
//        })
// .then(response => response.json())
// .then(data => {
//   var table = $('#myTable tbody');
//   console.log(data)
//   $.each(data, function(index, item) {
//     var row = $('<tr>');
//     row.append($('<td>').text(item.empName));
//     row.append($('<td>').text(item.jobTitle));
//     row.append($('<td>').text(item.salary));
//     table.append(row);
//   });
// })
// .catch(error => {
//   console.error('Error:', error);
// });
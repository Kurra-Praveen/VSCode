//import fetch from 'node-fetch'
var fetch = require("node-fetch");

fetch("http://localhost:8080/employee/getAllEmp")
  .then((response) => response.json())
  .then((data) => console.log(data));


  fetch(url)
 

  .then(res => {
    console.log(res);
    if (res.status != 200) { throw new Error("Bad Server Response"); }
    return res.text();
  })
  .then(((data) =>  data.forEach(element => {
    
    console.log(element)

    var row=`<tr>
        <td>${element.id}</td>
        <td>${element.empName}</td>
        <td>${element.jobTitle}</td>
        <td>${element.salary}</td>
        </tr>`

        tableData.innerHTML+=row
   })))
 
  .catch(err => console.error(err));

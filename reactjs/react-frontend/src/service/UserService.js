import axios from "axios";

const API_URL="http://localhost:8080/employee/getAllEmp"

class EmployeeService{

 getUsers(){

   return axios.get(API_URL);
 }


}

export default new EmployeeService();
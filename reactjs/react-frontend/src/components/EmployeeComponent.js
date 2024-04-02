import React, { Component }  from 'react';
import UserService from "../service/UserService";

class UserComponent extends React.Component{
 constructor(props){
    super(props)
    this.state={
        users:[]
    }
 }


componentDidMount(){
    UserService.getUsers().then((response)=>{
        this.setState({
            users:response.data
        })
    })
}

 render(){
    return(
        <div>

<h1 className="text-center">Users list</h1>
<table className="table table-striped">
<thead>
<tr>
<td>Id</td>
<td> Name</td>
<td>Job</td>
<td> Salary</td>

</tr>

</thead>
<tbody>
    {
        this.state.users.map(
            user=>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.empName}</td>
                <td>{user.jobTitle}</td>
                <td>{user.salary}</td>
            </tr>
        )
    }
</tbody>

</table>

        </div>
    )
 }
}

export default UserComponent
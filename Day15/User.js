import { Component } from "react";

import UG from "./UG";
import PG from "./PG";
import Graduate from "./Graduate";
export default class User extends Component{

  constructor()
  {
 super()
 this.uname=""
 this.email=""
 this.option=""
 this.state={option:""}
  }


handler=(e)=>
{
   this.uname=e.target.value

}

handler2=(e)=>
{
   this.email=e.target.value
}
handler3=(e)=>
{ 
    let s=e.target.value
  this.setState({option:s}) 
}






    render(){
        return(
            <div>
                <label>Enter Name:</label><input type="text" onBlur={this.handler}/><br></br>
                <label>Enter Email</label><input type="email" placeholder="EMAIL" onBlur={this.handler2}/><br></br>

                <select onChange={this.handler3}>
                    <option value="">Qualification</option>
                    <option value="GR">Graduate</option>
                    <option value="PG">PG</option>
                    <option value="UG">UnderGraduate</option>
                </select>
             
                {this.state.option==="GR" && <Graduate></Graduate>}
                {this.state.option==="PG" && <PG></PG>}
                {this.state.option=== "UG" && <UG></UG>}
            </div>
        )
    }
}
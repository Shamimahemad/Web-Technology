import { Component } from 'react';

export default class StateIndia extends Component{
       constructor(){
        super()
        this.ss=""
        //this.handler1 = this.handler1.bind(this)
        this.state={res:""}

       }
       handler1=(e)=>
       {
           this.ss=e.target.value 
           console.log(this.ss)
           switch (this.ss) {
            case "MH":
                this.setState({res:"Mumbai"})
                // document.getElementById("p2").innerText="Mumbai"
                break;
            case "AP":
                this.setState({res:"Hydrabad"})
                // document.getElementById("p2").innerText="Hydrabad"
                break;
            case "UK":
                this.setState({res:"Dehradun"})
                //document.getElementById("p2").innerText="Dehradoon"
                break;
            case "UP":
                this.setState({res:"Lucknow"})
                //document.getElementById("p2").innerText="Lucknow"
                break;
            case "select":
                this.setState({res:""})
                //document.getElementById("p2").innerText=""
                break;
            case "BR":
                this.setState({res:"Patna"})
                //document.getElementById("p2").innerText="Patna"
                break;
            case "MP":
                this.setState({res:"Bhopal"})
                //document.getElementById("p2").innerText="Bhopal"
                break;
            case "RJ":
                this.setState({res:"Jaipu"})
                //document.getElementById("p2").innerText="Jaipur"
                break;
            default:
                break;
           }

       }
   render ()
   {
    return(
        <div>
             
            <div>
                <label>Select State</label><br></br>
            <select onChange={this.handler1}>
                <option value="select">Select</option>
                <option value="MH">Maharashtra</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="UK">Uttarakhand</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="BR">Bihar</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="RJ">Rajasthan</option>

            </select>
            </div>
       
            <div>
            <p>{this.state.res}</p>
            </div>
        </div>
    )
   }
}

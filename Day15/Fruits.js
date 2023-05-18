import { Component } from "react";
export default class Fruits extends Component{
    constructor(){
        super()
        this.state={arr:["Mango","Anar"]}
    }
    addFruit=(e)=>{
         let fruit=e.target.value
         let temp=[...this.state.arr]  //copied the array in temp using spread operator
         temp.push(fruit)
         this.setState({arr:temp})
    }
    showFruits=()=>{
        return this.state.arr.map((fruit,index)=>{
                    return <option key={index}>{fruit}</option>
        })
    }


    render(){
        return(
            <div>
                <label>Enter Fruit Name : </label><br></br>
                <input type="text" onBlur={this.addFruit}></input><br></br>
                {/* <input type="Button" value="Show Fruits" onClick={this.showFruits}></input> */}
                <p>Fruits = {this.state.arr}</p>
                <select>
                    {this.showFruits()}
                </select>
            </div>
        )
    }
}
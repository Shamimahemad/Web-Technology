//HOW to assign a function to a variable 
function f1()
{
    console.log("f1 runs")
}

let y=f1()  // y holds the return value of f1
console.log(typeof(y))
let x=f1   // x holds the function itself
console.log(typeof(x))
x()





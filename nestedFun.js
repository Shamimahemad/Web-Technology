function doMaths(choice)
{
    function doSquare(x) {
        return x*x
        
    }
    function doPower(z,y) {
      let p=Math.pow(z,y)
        return p 
    }
    if (choice==1) {
        return doSquare
    }
    else if(choice==2)
    {
        return doPower
    }
    
         
        
    

}

let p1=doMaths(2)
let p2=p1(3,3) 
console.log(p2)

let s=doMaths(1)
let s2=s(3)
console.log(s2)

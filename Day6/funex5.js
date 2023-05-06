//How to pass a function to a function
function Greet(message)
{
     let guests = ["jayant","vivekraj","rohit","akash","ravikumar","prachi"]
     
     for(let i=0;i<guests.length;i++)
     {
        console.log(message(),guests[i])
     }
}




function indianWelcome() 
{
      return "Namaste ...."
}
Greet(indianWelcome)

Greet(function (){
    return "HowD"
})

let j = function(){
    return "Konnichiva"
}
Greet(j)


Greet(()=>"Hi")



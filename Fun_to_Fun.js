// function Welcome()
// {
//     return "Namaste"
// }
// function Guests(Greet) {
//     let list=["Ganesh","Shamim","Virat","Jethalal"]
//     for (let index = 0; index < list.length; index++) {
//         if (list[index]=="Jethalal") {
//             console.log("Jai Jinendra",list[index],"Bhai")
//         }
//         else
//         {
//        console.log(Greet(),list[index])
//         }   
//     }
    
// }
// Guests(Welcome);
// Guests(()=> "hii")

let array=["hey","hello","namaste","balki","Sheru"]
console.log(array.map((x)=>x.toUpperCase()))
array.forEach((x)=>console.log(x))
console.log("Title name",array.map((x)=> x.substr(0,1).toLocaleUpperCase().concat(x.substr(1).toLocaleLowerCase())))
console.log("name2",array.filter((x)=> x.length<=5))

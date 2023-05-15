new Promise((res,rej)=>
{
    res(2)
}).then(resolve=>{
      console.log(resolve)
      return new Promise((re,rej)=>re(resolve+1) )
}).then(resolve=>{
    console.log(resolve)
    return resolve + 2
}).then(resolve =>{ console.log(resolve)})
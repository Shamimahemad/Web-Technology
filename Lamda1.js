function add(...num)
{
    let sum=0
    for(let i=0;i<num.length;i++)
    {
         sum=sum+num[i]
    }
    return sum
}
let p=add(1,3,4,2,5)
console.log(p)
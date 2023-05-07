function add(a,b)
{
  let sum = a + b
  console.log("sum is ",sum)
}
add(12,10)
function add1(...nums)
{
    let sum=0
    for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
    }
    console.log("sum of numbers is ", sum)
}
add1(14)
add1(15,45)
add1(12,35,87)
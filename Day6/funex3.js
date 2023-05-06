//Rest parameters to functions  = variable number of arguments can be paased to a function

function add(...nums)  //CALLER can pass any number of args because of  ...nums
{
    let sum=0
    /* for(let x=0;x<nums.length;x++)  
    {
        sum=sum+nums[x]     //all the args are collected in an array 
    } */
    
    for(n of nums)
    {
        sum=sum +n
    }

    console.log("sum is",sum)
 
}

add(11)
add(1,2,3)
add(10,20)
add(5,4,3,2,1,9,100)


//How many rest parameters can be passed to a function
//function test(...a,...b)
//function test(...b,str1,num1)
function test(str1,num1,...b)
{
    let arr=[]
    arr.splice()
}







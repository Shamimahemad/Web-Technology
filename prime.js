let arr=[3,5,7,11,33,31,56,41,23]

for(let i=0;i<arr.length;i++)
{let flag=0
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        flag=1
        break;
    }
  if(flag==0)
  {
      console.log("prime numbar is ",arr[i])
  }
}
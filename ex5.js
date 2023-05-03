for(var i=2;i<200;i++)
{  
     flag=true
    for(var j=2;j<i;j++)
     {
        if(i%j==0)
        {
          flag=false
          break;
        }
     }
     if (flag==true) 
     {
       console.log(i)  
     }
}
let choice=2
function doMaths()
{
    function doSquare(x)
    {
        return x*x
    }
    function doCube(n)
    {
        return n*n*n
    }
    function doPower(a,b)
    {
        let p=Math.pow(a,b)
        return p
    }
    //let i=doSquare(3)
    //console.log(i)
    //console.log(doPower(5,2))
    if(choice==1)
    return console.log(doSquare(7))
    else
    return console.log(doPower(5,3))
}
doMaths()

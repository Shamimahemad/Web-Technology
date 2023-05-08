// Write a class Product with properties prodectName, productCost and 
// prodDesc and showProdDetails function
// b. In another file create same class using function constructor syntax

function Product(proName,proCost,proDesc) {

     this.productName=proName
     this.productCost=proCost
     this.productDesc=proDesc
 

     this.showProdDetails=function()
     {
        console.log("product name :",this.productName,"cost of product: ",this.productCost,"desc :",this.productDesc)
     }
    
}
let obj=new Product("Farari",230000000,"This car is not for poor and middle class people")
obj.showProdDetails()
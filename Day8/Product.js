//  Write a class Product with properties prodectName, productCost and 
// prodDesc and showProdDetails function
// a. Use "class" syntax . Create objects and call showProdDetails
// b. In another file create same class using function constructor syntax
// create objects and call showProdDetails
//  c. In another file create a JSON object with above properites and function
// Call the showProdDetails

class Product{

    constructor(pname,pcost,pdesc){
        this.productName=pname
        this.productCost=pcost
        this.productDesc=pdesc
    }
    showProdDetails(){
        console.log("The product name is ",this.productName)
        console.log("The product cost is ",this.productCost)
        console.log("The product descriptin is ",this.productDesc)
    }

}
    let obj =new Product("Notebook",32,"Write")
    obj.showProdDetails()
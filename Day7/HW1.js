// Write a class Product with properties prodectName, productCost and 
// prodDesc and showProdDetails function
// a. Use "class" syntax . Create objects and call showProdDetails

class Product{

    constructor(proName,proCost,proDesc)
    {
        this.productName=proName;
        this.productCost=proCost;
        this.productDesc=proDesc;

    }

    showProdDetails() {
    console.log("Product Name : ",this.productName," ","Cost : ",this.productCost," Desc : ",this.productDesc)
   }    
}
let obj1=new Product("Nano",30000,"Affordable car")
let obj2=new Product("Alto",20000,"Affordable car")
let obj3=new Product("Thar",130000,"Affordable car")
let obj4=new Product("Creta",300000,"luxury")
let obj5=new Product("Brezza",120000,"Affordable car")

obj1.showProdDetails();
obj2.showProdDetails();
obj3.showProdDetails();
obj4.showProdDetails();
obj5.showProdDetails();

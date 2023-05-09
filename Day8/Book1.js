// class Book1{
//     constructor(bname,bcost){
//         this.Book1name=bname
//         this.Book1cost=bcost
//     }
//     showDetails(){
//         console.log("The book name is ",this.Book1name)
//         console.log("The book price is ",this.Book1cost)
//     }
// }

//     let obj=new Book1("Java",300)
//     obj.showDetails()



class Book{
    constructor(bname,bcost){
        this.bookname=bname
        this.bookcost=bcost
    }
}
    let obj = new Book()
    let books =[]
    books.push(new Book("java",300))
    books.push(new Book("HTML",200))
    books.push(new Book("Python",320))
    
    let total=0
    for(x of books){
        console.log("The book name is "+ x.bookname+" and price is "+x.bookcost)
        total=total+x.bookcost
    }

    console.log("The total price of all books is ",total)






import express from 'express'
let app=express()

app.set("views",'./views')
app.set("view engine",'hbs')

app.get('/',(req,res)=>{
    res.render("Ajax")
})
app.get('/about',(req,res)=>{
    res.send("Hiii this our first Ajax program")
})


app.listen('4000',()=>{
    console.log("app is listing on port 4000")
})
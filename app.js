 const express=require('express');

 const app=express();

 app.use((req,res,next)=>{

    res.send("I am in the middleware");
    next();
 })

 app.use((req,res,next)=>{

    res.send("I am in another middleware");
 })

 app.listen(3000);
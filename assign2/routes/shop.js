
     const express=require('express');

     const route=express.Router();

     route.get('/',(req,res,next)=>{

        res.send("I am in another middleware");
     })


     module.exports=route;
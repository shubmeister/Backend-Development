   
   const express=require("express");
   
   const path=require('path');
   
   const route=express.Router();

   route.get('/add-product',(req,res,next)=>{

     // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title><br><button type="submit">Submit</button></form>')
     res.sendFile(path.join(__dirname, '../','views','add-product.html'));
   });

   route.post('/add-product',(req,res,next)=>{

      console.log(req.body.title);
    //   res.redirect('/');
    res.sendFile(path.join(__dirname, '../', 'views','shop.html'))
   });

   route.get('/contactus',(req,res,next)=>{
       
    //   res.send('<form action="/admin/success" method="POST"><br><label>Name:-</label><input type="text" name="user"><br><label>Email:-</label><input type="text" name="email"><br><button type="submit">Submit</button></form>')
    res.sendFile(path.join(__dirname, '../', 'views','contactus.html'))
   })

   route.post('/success',(req,res,next)=>{

     console.log(req.body.user);
     console.log(req.body.email);

    //  res.send('<h1>Form successfuly filled</h1>')
    res.sendFile(path.join(__dirname, '../', 'views','success.html'))
   })

   module.exports=route;
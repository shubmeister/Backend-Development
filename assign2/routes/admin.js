
   const express=require('express');
   
   const route=express.Router();

   route.get('/addproduct',(req,res,next)=>{

    res.send('<form action="/admin/product" method="POST"><label>Product</label><input type="text" name="title"><br><label>Product Size</label><input type="text" name="size"><br><button type="submit">Add Product</button></form>');
 })

   route.post('/product',(req,res,next)=>{

    console.log(req.body);
    res.redirect('/shop');
})

   module.exports=route;
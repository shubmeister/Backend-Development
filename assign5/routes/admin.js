   
   const express=require("express");
   
   const adminProduct=require('../controller/add-product')

   const route=express.Router();

   route.get('/add-product', adminProduct.getProduct);

   route.post('/add-product', adminProduct.postProduct);

   route.get('/contactus', adminProduct.contactUs)

   route.post('/success', adminProduct.success)

   module.exports=route;
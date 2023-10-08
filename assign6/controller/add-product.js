
const path=require('path');

const products=require('../models/product');

module.exports.getProduct=(req,res,next)=>{

    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title><br><button type="submit">Submit</button></form>')
    console.log(products.fetchAll);
    res.sendFile(path.join(__dirname, '../','views','add-product.html'));
    
  }

module.exports.postProduct=(req,res,next)=>{

    const product=new products(req.body.title);
    product.save();
  //   res.redirect('/');
  res.sendFile(path.join(__dirname, '../', 'views','shop.html'))
 }

 module.exports.contactUs=(req,res,next)=>{
       
    //   res.send('<form action="/admin/success" method="POST"><br><label>Name:-</label><input type="text" name="user"><br><label>Email:-</label><input type="text" name="email"><br><button type="submit">Submit</button></form>')
    res.sendFile(path.join(__dirname, '../', 'views','contactus.html'))
   }

module.exports.success=(req,res,next)=>{

    console.log(req.body.user);
    console.log(req.body.email);

   //  res.send('<h1>Form successfuly filled</h1>')
   res.sendFile(path.join(__dirname, '../', 'views','success.html'))
  }
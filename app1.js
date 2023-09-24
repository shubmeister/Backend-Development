const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/addproduct',(req,res,next)=>{

    res.send('<form action="/product" method="POST"><label>Product</label><input type="text" name="title"><br><label>Product Size</label><input type="text" name="size"><br><button type="submit">Add Product</button></form>');
 })

 app.post('/product',(req,res,next)=>{

    console.log(req.body);
    res.redirect('/');
})

app.get('/',(req,res,next)=>{

   res.send("I am in another middleware");
})

app.listen(3000);
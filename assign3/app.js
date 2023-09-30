    
    const express=require('express');

    const bodyParser=require('body-parser');

    const fs=require('fs');

    fs.createWriteStream('message.txt').end();
    const app=express();

    app.use(bodyParser.urlencoded({extended: false}));

    app.get('/login',(req,res,next)=>{

        res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"><input type="text" id="username"><br><button type="submit">login</button></form>');

    })

    
    app.get('/',(req,res,next)=>{
       
        const data=fs.readFileSync('message.txt','utf-8');
        res.send(
            `${data}<br><form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
            <input type='text' name='message' id='message'>
            <input type='hidden' name='username' id='username'>
            <br>
            <button type="submit">Send</button> 
            </form>`
        )
        
    })

    app.post('/',(req,res,next)=>{

        fs.writeFile("message.txt",`${req.body.username}: ${req.body.message}`, {flag:'a'} , (err)=>{

            err ? console.log(err):res.redirect("/")
        });
    })


    app.listen(3000);
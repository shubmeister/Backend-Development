
const http =require('http');
const fs=require('fs');

fs.createWriteStream('message.txt').end();//creating the file automatically

const server=http.createServer((req,res)=>{

    if(req.url==='/')
    {
        try {
        const data=fs.readFileSync('message.txt','utf-8')
        res.write('<html>');
        res.write('<head><title>My File Server</title><head>');
        res.write(`<body><label>${data}</label><br><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`)
        res.write('</html>');
        return res.end();
            
        } catch (error) {
            console.log(error);
        }
        
    }
    if(req.url==="/message" && req.method==="POST")
    {
        const body=[];
        req.on('data',(temp)=>{
              body.push(temp);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        })
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();

    }
})

server.listen(3000)
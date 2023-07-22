
   const http=require('http');

   const server =http.createServer((req,res)=>{

            if(req.url=='/home')
            {
                res.write('<html>');
                res.write('<head><title>My Server</title><head>')
                res.write('<body><h1>Welcome Home</h1></body>')
                res.write('</html>');
                res.end();
            }else if(req.url=='/about')
            {
                res.write('<html>');
                res.write('<head><title>My Server</title><head>')
                res.write('<body><h1>Welcome to about us Page</h1></body>')
                res.write('</html>');
                res.end();
            }else if(req.url=='/node')
            {
                res.write('<html>');
                res.write('<head><title>My Server</title><head>')
                res.write('<body><h1>Welcome to Node js Project</h1></body>')
                res.write('</html>');
                res.end();
            }

            res.end();
   });

   server.listen(5000);
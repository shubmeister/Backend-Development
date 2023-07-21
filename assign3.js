const http = require('http');

http.createServer(function (req, res) {
    console.log("Shubham Negi")
    res.write('Welcome to the page! Shubham Negi');
    res.end();
}).listen(4000);
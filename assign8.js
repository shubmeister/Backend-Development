const http=require('http')

const route=require('./assign8A')

console.log(route.text);

http.createServer(route.handle).listen(3000);


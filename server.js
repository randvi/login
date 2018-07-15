'use strict'

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
    console.log(request.method, request.url);
    if (request.url === '/style.css') {
        const css = fs.readFileSync('style.css','utf-8');
        response.end(css);
    } else if (request.url === '/user.png') {
        const user = fs.readFileSync('user.png');
        response.end(user);
    } else if (request.url === '/bg.jpg') {
        const bg = fs.readFileSync('bg.jpg');
        response.end(bg);  
    } else {
        const html = fs.readFileSync('index.html','utf-8');
        response.end(html);
    }
});

console.log("port = ", process.env.PORT);

server.listen(process.env.PORT || 3000);
console.log("Server started...");

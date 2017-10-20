 'use strict';
 let http = require('http');
  http.createServer((request, response) => {
   response.writeHead(200, {
    'Content-Type': 'text/plain'
     });
      response.end('Hello World!\n');
       console.log('request.headers: \n', request.headers)
        }).listen(8088);
        console.log(' 伺服器啓動，連線 url: http://127.0.0.1:8088/'); 

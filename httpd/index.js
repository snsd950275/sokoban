'use strict';
let http = require('http');
http.createServer((request, response) => {
  let fs = require('fs');
  let postData = ''; // POST 資料
  // 利⽤'data' event 消耗掉data chunk;
  // 'end' event 才會被fired
  request.on('data', (chunk) => {
    postData += chunk;
    console.log(
      ' 接收的POST data ⽚段k: [' + chunk + '].'
    );
  });
  request.on('end', () => {
    switch (request.url) {
      case '/':
      fs.readFile('../htdocs/index.html', (err, data) => {
        if (err) {
          console.log(' 檔案讀取錯誤');
        }
        else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          response.write(data);
          response.end();
        }
      });
      break;

      case '/assets/css/styles.css':
      console.log('got here');
      fs.readFile('../htdocs/assets/css/styles.css', (err, data) => {
        if (err) {
          console.log(' 檔案讀取錯誤');
        }
        else {
          response.writeHead(200, {
            'Content-Type': 'text/css'
          });
          response.write(data);
          response.end();
        }
      });
      break;

      case '/assets/png/SokobanClone_byVellidragon.png':
      fs.readFile('../htdocs/assets/png/SokobanClone_byVellidragon.png', (err, data) => {
        if (err) {
          console.log(' 檔案讀取錯誤');
        }
        else {
          response.writeHead(200, {
            'Content-Type': 'image/png'
          });
          response.write(data);
          response.end();
        }
      });
      break;


      default:
      console.log(' 未定義的存取: ' + request.url);
      response.end();
      break;
    }
  });
}).listen(8088);
// log message to Console
console.log(' 伺服器啓動，連線url: http://127.0.0.1:8088/');

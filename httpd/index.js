'use strict';
let http = require('http');
/**
* 利⽤ http.ServerResponse 物件回傳檔案內容
*
* @name serve
* @function
* @param response - http.ServerResponse 物件
* @param fname - 要回傳的檔案名
* @param datatype - 回傳檔案內容的 Mine-Type
* @returns {undefined}
*/
let serve = (response, fname, datatype) => {
  let fs = require('fs');
  fs.readFile(fname, (err, data) => {
    if (err) {
      console.log(' 檔案讀取錯誤');
    }
    else {
      response.writeHead(200, {
        'Content-Type': datatype
      });
      response.write(data);
      response.end();
    }
  });
};
http.createServer((request, response) => {
  let fs = require('fs');
  let postData = '';
  10
  // 利⽤ 'data' event 消耗掉 data chunk;
  // 'end' event 才會被 fired
  request.on('data', (chunk) => {
    postData += chunk;
    console.log(
      ' 接收的 POST data ⽚段 k: [' + chunk + '].'
    );
  });
  request.on('end', () => {
    switch (request.url) {
      case '/':
      serve(response, '../htdocs/index.html', 'text/html');
      break;
      case '/assets/css/styles.css':
      serve(response, '../htdocs/assets/css/styles.css', 'text/css');
      break;
      case '/assets/png/SokobanClone_byVellidragon.png':
      serve(
        response,
        '../htdocs/assets/png/SokobanClone_byVellidragon.png',
        'image/png'
      );
      break;
      default:
      console.log(' 未定義的存取: ' + request.url);
      response.end();
      break;
    }
  });
}).listen(8088);
// log message to Console
11
console.log(' 伺服器啓動，連線 url: http://127.0.0.1:8088/');
// index.js

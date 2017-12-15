'use strict';
 window.addEventListener('load', () => {
 console.log("index.js loaded");

 let h1 = document.createElement('h1');
  let h2 = document.createElement('h2');
 let msg = document.createTextNode(' 這是 <h1> 的⽂字訊息');
 let msgg = document.createTextNode(' QQ這是 <h2> 的⽂字訊息');
 h1.appendChild(msg);
 h2.appendChild(msgg);
 document.body.appendChild(h1);
 document.body.appendChild(h2);
 });

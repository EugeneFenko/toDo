!function(e){var t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),i=(n.n(l),n(2)),r=(n.n(i),n(3));n.n(r)},function(e,t){let n=document.querySelector("input#add"),l=document.getElementById("field"),i=document.querySelector("ul.itemList"),r=document.querySelector("ul.exampleList"),a=document.querySelector("form");function c(e){document.createElement("i");const t=document.createElement("li");document.createElement("i");let n,r=new Date;t.textContent=l.value,t.className="itemLi",t.innerHTML=`\n    <div class="itemVal">${l.value}</div>\n    <div class="itemAttr">\n    <span class="addTime">\n        <i class="fa fa-clock-o" aria-hidden="true"></i>    \n        ${r.getDate()}.${r.getMonth()+1}.${r.getFullYear()}</span>\n        \n        <i class="fa fa-remove del"></i>\n    </div>\n    `,(n=null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks"))).push(l.value),localStorage.setItem("tasks",JSON.stringify(n)),""!=l.value&&i.appendChild(t),l.value="",e.preventDefault()}n.addEventListener("click",c),a.addEventListener("submit",c),l.addEventListener("focus",function(e){const t=document.createElement("i"),n=document.createElement("li");n.className="itemLi",t.classList="fa fa-pencil",n.appendChild(t),r.appendChild(n),e.preventDefault()}),l.addEventListener("input",function(){r.firstElementChild.textContent=l.value}),l.addEventListener("blur",function(){r.firstElementChild.remove()})},function(e,t){let n=document.querySelector("input#clr"),l=document.querySelector("ul.itemList");n.addEventListener("click",function(){for(;l.firstChild;)l.removeChild(l.firstChild)})},function(e,t){document.body.addEventListener("click",function(e){e.target.classList.contains("del")&&(console.log("Deleted"),e.target.parentElement.parentElement.remove())})}]);
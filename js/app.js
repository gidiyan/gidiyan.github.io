"use strict"

// let addLike = document.getElementsByClassName('fa-thumbs-up')[0];
// addLike.onclick =function () {console.log(likeMe)
//     let curVal = likeMe.textContent;
// likeMe.textContent =+(curVal) + 1;
// }
// let addLike1=document.getElementsByClassName('fa-thumbs-up')[1];
// addLike1.onclick =function () {console.log(likeMe)
//     let curVal = likeMe.textContent;
//     likeMe.textContent =+(curVal) + 1;
// }
// let addLike2=document.getElementsByClassName('fa-thumbs-up')[2];
// addLike2.onclick =function () {console.log(likeMe)
//     let curVal = likeMe.textContent;
//     likeMe.textContent =+(curVal) + 1;
// }
// let addLike3=document.getElementsByClassName('fa-thumbs-up')[3];
// addLike3.onclick =function () {console.log(likeMe)
//     let curVal = likeMe.textContent;
//     likeMe.textContent =+(curVal) + 1;
// }

let i;
const likeMe=document.getElementById('like_me');
var count1 = document.getElementsByClassName('far fa-thumbs-up');
for(i=0;i<count1.length;i++){ document.getElementsByClassName('far fa-thumbs-up').item(i).addEventListener("click",function a(){
    let curVal = likeMe.textContent;
    likeMe.textContent =+(curVal) + 1;});}
const cartMe=document.getElementById('cart');
var count2 = document.getElementsByClassName('but-cart');
for(i=0;i<count2.length;i++){ document.getElementsByClassName('but-cart').item(i).addEventListener("click",function a(){
    let curVal = cartMe.textContent;
    cartMe.textContent =+(curVal) + 1;});}

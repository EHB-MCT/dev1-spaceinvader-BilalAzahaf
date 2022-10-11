"use strict";

alert("Draw your space invader here");

drawProfile();

function drawProfile() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //B
context.fillStyle = "purple";
context.beginPath();
context.rect(100, 100, 500, 100);
context.rect(200, 100, 100, 300);
context.rect(100, 300, 100, 200);
context.rect(300, 400, 100, 100);
context.rect(400, 100, 100, 300);
context.rect(500, 300, 100, 200);
context.fill();
}

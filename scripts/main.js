var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#5db7ff");
    line ((windowWidth / 2), 0, (windowWidth / 2), 1000);
 }
 function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background("#5db7ff");
    line ((windowWidth / 2), 0, (windowWidth / 2), 1000);
 }

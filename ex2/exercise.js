// var width = window.screen.width;
// var hight = window.screen.height;
// var body = document.querySelector('body')
// if(width && height < 300){
//     body.style.background = blue
// } else{
//     body.style.background = black
// }


function windowSize()
{
var width = document.documentElement.clientWidth;
var hight = document.documentElement.clientHeight;
var p = document.querySelectorAll("p");
p[1].innerHTML = "The window width is " + width +" pixels and its hight is " + hight +" pixels."}

windowSize()
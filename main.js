var last_x,last_y;

var mouse_event ="";

canvas =document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color ="black";

width =2;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{

mouse_event= "mousedown";


}

 
canvas.addEventListener("mousemove",my_mousemove);

function  my_mousemove(e)
{
 current_x=e.clientX - canvas.offsetLeft;
current_y=e.clientY - canvas.offsetTop;

if(mouse_event=="mousedown")
{
 
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth =width;
console.log("Last position of X and Y in cordinates =");
console.log("X =" + last_x + ",y =" + last_y);
ctx.moveTo(last_x,last_y);

console.log("Current position of X and Y in cordinates =");
console.log("X =" + current_x + ",y =" + current_y);
ctx.lineTo(current_x,current_y);
ctx.stroke();

}

last_x=current_x;
last_y=current_y;
}








canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{

mouse_event= "mouseup";


}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{

mouse_event= "mouseleave";


}
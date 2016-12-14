// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"



var turn="player1"
function squareTwo(){
if (turn=="player1")
var currentShape="circle"
var canvas=document.getElementById("game-board")
var circle= document.createElementNS(namespace, "circle")
cicrle.setAttribute(cx="40")
cicrle.setAttribute(cy="40")
cicrle.setAttribute(r="20")
cicrle.setAttribute("fill", "blue")
canvas.appendChild(circle)
currentShape="rect"
turn="player2"
}else{
var currentShape="rect"
var canvas= document.createElementNS(namespace,"rect")
rect.setAttribute("x" ,"80")
rect.setAttribute("y" ,"20")
rect.setAttribute("width" , "40")
rect.setAttribute("height"."40")
rect.setAttribute("fill" , "pink")
canvas.appendChild(rect)
currentShape="circle"
turn="player1"
} 

var namespace = "http://www.w3.org/2000/svg"

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 100)
circle.setAttribute("cy", 100)
circle.setAttribute("r", 30)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function makeShape2() {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 210)
circle.setAttribute("cy", 100)
circle.setAttribute("r", 30)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function makeShape5() {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 210)
circle.setAttribute("cy", 210)
circle.setAttribute("r", 30)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function makeShape9() {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 320)
circle.setAttribute("cy", 320)
circle.setAttribute("r", 30)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function makeShape3() {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 320)
circle.setAttribute("cy", 100)
circle.setAttribute("r", 30)
circle.setAttribute("fill","blue")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function makeShape4() {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 100)
circle.setAttribute("cy", 210)
circle.setAttribute("r", 30)
circle.setAttribute("fill","blue")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function makeShape6() {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 320)
circle.setAttribute("cy", 210)
circle.setAttribute("r", 30)
circle.setAttribute("fill","blue")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function makeShape7() {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 100)
circle.setAttribute("cy", 320)
circle.setAttribute("r", 30)
circle.setAttribute("fill","blue")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function makeShape8() {
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 210)
circle.setAttribute("cy", 320)
circle.setAttribute("r", 30)
circle.setAttribute("fill","blue")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

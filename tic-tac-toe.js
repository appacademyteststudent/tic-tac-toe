// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = "player1"

function makeShape1() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 100)
  circle.setAttribute("cy", 100)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

function makeShape2() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 210)
  circle.setAttribute("cy", 100)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

function makeShape3() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 320)
  circle.setAttribute("cy", 100)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

function makeShape4() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 100)
  circle.setAttribute("cy", 210)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

function makeShape5() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 210)
  circle.setAttribute("cy", 210)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

function makeShape6() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 320)
  circle.setAttribute("cy", 210)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

function makeShape7() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 100)
  circle.setAttribute("cy", 320)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

function makeShape8() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 210)
  circle.setAttribute("cy", 320)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

function makeShape9() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 320)
  circle.setAttribute("cy", 320)
  circle.setAttribute("r", 30)
  if(turn == "player1") {
    circle.setAttribute("fill", "red")
    turn="player2"
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
  } else {
    if(turn=="player2")
    circle.setAttribute("fill", "blue")
    turn="player1"
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  }
}

//Arie Werner
//April 5, 2018
//24567

var xPos = 0;
var yPos = 0;
var gameArea = document.querySelector("#gameArea");
var ball = document.createElement("div");
ball.classList.add("ball")

gameArea.appendChild(ball);

var xPos = 0;
var yPos = 0;
var xVel = 1;
var yVel = 1;

setInterval(update, 5); //this will call the update function every 5 miliseconds

function update() {
    xPos += xVel;
    yPos += yVel;
    
    if(yPos >= 600) {
        yVel *= -1;
        yPos = 600;
    }
    if(xPos >= 800) {
        xVel *= -1;
        xPos = 800;
    }
    if(yPos <= 0) {
        yVel *= -1;
        yPos = 0;
    }
    if(xPos <= 0) {
        xVel *= -1;
        xPos = 0;
    }

    ball.style.left = xPos + "px";
    ball.style.top = yPos + "px";
    
    xPos = xPos + xVel;
    yPos = yPos + yVel;
}
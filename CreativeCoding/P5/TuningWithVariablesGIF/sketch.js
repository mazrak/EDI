let gif; //for a gif you need to replace "img" with "gif"

function preload (){
  gif = loadImage ('assets/AiBackground75.gif')
}

function setup() { //runs once
  createCanvas(windowWidth, windowHeight);
}

function draw() {

background (255, 232, 252)

var num = 15; //variable for the number of squares in the array
var sideLen = windowWidth/num; //variable for the side length of each square

  for (var y = 0; y < windowHeight; y = y + sideLen) { // loop to create rows in the y direction
  for (var x = 0; x < windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction
image (gif, x, y, windowWidth/num, windowWidth/num)
  }
  }


// noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

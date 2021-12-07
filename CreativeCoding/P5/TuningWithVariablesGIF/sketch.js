var randDrawing

function preload (){

  Image1 = loadImage ('assets/AiBackgroundgifImage1');
  Image2 = loadImage ('assets/AiBackgroundgifImage2');
  Image3 = loadImage ('assets/AiBackgroundgifImage3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(.5);
}

function draw() {

background (255, 232, 252)

var num = 15; //variable for the number of squares in the array
var sideLen = windowWidth/num; //variable for the side length of each square

  for (var y = 0; y < windowHeight; y = y + sideLen) { // loop to create rows in y direction
  for (var x = 0; x < windowWidth; x = x + sideLen) {// loop to create rows in x direction
image (pics[int(random(0,2))], x+ (sideLen / 2-75), y + (sideLen / 2 - 75), windowWidth/num, windowWidth/num);
  }
  }


// noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

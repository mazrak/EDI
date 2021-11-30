let img;

function preload(){
img = loadImage('assets/AiBackgroundSingle.png');
}

function setup() {
  //runs once
  createCanvas(720, 720);
}


function draw() {
  background(220);
  for (var y = 0; y < 600; y = y + 300) { // loop to create rows in the y direction
  for (var x = 0; x < 600; x = x + 300) { // loop to create a row of squares in the x direction
  image (img,x,y);


  }

  }

  noLoop();
}

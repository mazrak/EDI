/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255);

  for (var x = 0; x <= width; x += 80) {
  for (var y = 0; y <= height; y += 80) {

      stroke(200,100,100);
      ellipse(x, y, 160, 160);
  }
  }

push();
  translate (15, 15)
  for (var x = 0; x <= width; x += 80) {
  for (var y = 0; y <= height; y += 80) {
    square(x, y, 50);
    }
  }
pop();

    translate (0, 0)
  for (var x = 0; x <= width; x += 80) {
  for (var y = 0; y <= height; y += 80) {
    ellipse(x, y, 40, 40);
    }
  }
  save("OverallPatternSVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}

var x = 100;
var y = 100;
var xspeed = 5;
var yspeed = 3.3;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('canvas_area');
  background(0);
}

function draw() {
  background(0);

  x += xspeed;
  y += yspeed;

  if((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }

  if((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }

  stroke(0);
  fill(175);
  ellipse(x, y, 50, 50);
}

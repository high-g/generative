var v1, velocity;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('canvas_area');
  background(0);

  v1 = createVector(40, 50);
  velocity = createVector(5, 3.3);

  console.log(v1);
  console.log(velocity);
}

function draw() {
  background(0);

  v1.x += velocity.x;
  v1.y += velocity.y;

  if((v1.x > width) || (v1.x < 0)) {
    velocity.x = velocity.x * -1;
  }

  if((v1.y > height) || (v1.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  stroke(0);
  fill(175);
  ellipse(v1.x, v1.y, 16, 16);
}

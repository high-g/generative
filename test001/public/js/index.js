function setup() {
  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  if(mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

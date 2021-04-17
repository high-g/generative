var mover;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('canvas_area');
  background(0);
  mover = new Mover();
}

function draw() {
  background(0);
  mover.update();
  mover.checkEdges();
  mover.display();
}

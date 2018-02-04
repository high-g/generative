var VALUE_SKETCH = (function(){
  var self = {};

  self.x = 0;
  self.y = 0;
  self.degree = 0;
  self.rad = 0;

  self.y_init = 150;

  self.x_move = 1;
  self.y_move = 90;
  self.degree_move = 3;

  return self;
})();

function setup() {
  var WIDTH = window.innerWidth,
      HEIGHT = window.innerHeight;
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  var v = VALUE_SKETCH;

  v.x += v.x_move;
  v.degree += v.degree_move;
  
  v.rad = v.degree * Math.PI / 180;
  v.y = Math.sin(v.rad) * v.y_move + v.y_init;

  background(255);
  ellipse(v.x, v.y, 50, 50);
}

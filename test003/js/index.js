var VALUE_SKETCH = (function(){
  var self = {};

  self.x = 0;
  self.y = 0;
  self.degree = 0;
  self.radian = 0;

  self.x_init = 150;
  self.y_init = 150;
  self.radius = 50;

  self.x_move = 1;
  self.y_move = 90;
  self.degree_move = 3;

  return self;
})();

function setup() {
  var WIDTH = window.innerWidth,
      HEIGHT = window.innerHeight;

  var v = VALUE_SKETCH;
  v.x_init = window.innerWidth / 2;
  v.y_init = window.innerHeight / 2;

  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  var v = VALUE_SKETCH;

  v.radius += 1;

  v.degree += v.degree_move;
  v.radian = v.degree * Math.PI / 180;

  v.x = Math.cos(v.radian) * v.radius + v.x_init;
  v.y = Math.sin(v.radian) * v.radius + v.y_init;

  //background(255);
  ellipse(v.x, v.y, 50, 50);
}

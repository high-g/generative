
/** 
 * Mover クラス
 * p5.jsを読み込む前提のクラス
 */
var Mover = function() {
  this.location;
  this.velocity;
  this.width;
  this.height;
  this.constructor();
};

var p = Mover.prototype;

p.constructor = function() {
  this.width = innerWidth;
  this.height = innerHeight;
  this.location = createVector(random(this.width), random(this.height));
  this.velocity = createVector(random(-20, 20), random(-20, 20));
}

p.update = function() {
  this.location.add(this.velocity);
};

p.display = function() {
  stroke(0);
  fill(175);
  ellipse(this.location.x, this.location.y, 50, 50);
};

p.checkEdges = function() {
  if(this.location.x > this.width) {
    this.location.x = 0;
  } else if(this.location.x < 0){
    this.location.x = this.width;
  }

  if(this.location.y > this.height) {
    this.location.y = 0;
  } else if(this.location.y < 0){
    this.location.y = this.height;
  }
};
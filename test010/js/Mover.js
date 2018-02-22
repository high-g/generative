
/** 
 * Mover クラス
 * p5.jsを読み込む前提のクラス
 */
var Mover = function() {
  this.location;
  this.velocity;
  this.acceleration;
  this.topspeed;
  this.width;
  this.height;
  this.constructor();
};

var p = Mover.prototype;

p.constructor = function() {
  this.width = innerWidth;
  this.height = innerHeight;
  this.location = createVector(this.width / 2, this.height / 2);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(-0.001, 0.01);
  this.topspeed = 100;
}

p.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.topspeed);
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
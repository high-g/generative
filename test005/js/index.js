function setup() {
  var canvas = createCanvas(800, 550);
  canvas.parent('canvas_area');

  background(200);

  noSmooth();
  arc(30, 30, 40, 50, 0, TWO_PI);
  arc(100, 30, 40, 40, 0, PI);
  arc(150, 30, 50, 50, 0, HALF_PI);
  arc(230, 30, 50, 50, 0, PI + QUARTER_PI, OPEN );
  arc(310, 30, 50, 50, 0, PI + QUARTER_PI, CHORD );
  arc(390, 30, 50, 50, 0, PI + QUARTER_PI, PIE );
  
  smooth();
  
  ellipse(30, 110, 50, 50);
  
  line(100, 100, 65, 65);
  stroke(255);
  line(100, 100, 60, 100);
  
  stroke(0);
  point(width / 2, height / 2);
  
  ellipseMode(RADIUS);
  fill(255);
  ellipse(200,110,30,30);
  
  ellipseMode(CENTER);
  fill(0);
  ellipse(200, 110, 30, 30);
  
  ellipseMode(CORNER);
  fill(255);
  ellipse(width/ 2, height/2, 30, 30);
  
  ellipseMode(CORNERS);
  fill(100);
  ellipse(300, 300, 350, 350);
}

function draw() {

}

var Walker = function() {
  this.x;
  this.y;
  this.construct();
};

Walker.prototype = {
  construct: function() {
    this.x = window.innerWidth;
    this.y = window.innerHeight;
  },

  display: function() {
    
  },
  
  step: function() {
    
  }
};

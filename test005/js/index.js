function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas_area');
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

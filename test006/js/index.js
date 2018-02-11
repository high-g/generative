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

function setup() {
  var canvas = createCanvas(800, 550);
  canvas.parent('canvas_area');
}

function draw() {

}

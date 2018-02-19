var v1,
    v2,
    v3,
    v4,
    v_random,
    velocity;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('canvas_area');
  background(0);

  v1 = createVector(40, 50);
  v2 = createVector(20, 120);
  velocity = createVector(5, 3.3);

  stroke(255);
  line(0, 0, v1.x, v1.y);

  stroke(255, 0, 0);
  line(0, 0, v2.x, v2.y);

  stroke(0, 255, 0);
  line(v1.x, v1.y, v2.x, v2.y);

  stroke(125);
  v3 = p5.Vector.add(v1, v2);
  line(0, 0, v3.x, v3.y);

  stroke(125, 55, 78);
  v4 = v3.normalize();
  console.log(v4);

  v_random = p5.Vector.random2D();
  console.log(v_random);

  stroke(255);
  v_random.mult(1000);
  line(0,0, v_random.x, v_random.y);
  console.log(v_random);


  console.log(p5.Vector.random2D().mult(1000));
  console.log(random(1000));
}

function draw() {
}

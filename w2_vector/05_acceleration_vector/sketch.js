/**************************************************************************
  Acceleration Vector
  REFERENCES:
  # Nature of Code 2nd Edition 1. Vectors : https://nature-of-code-2nd-edition.netlify.app/vectors/
  # Dan Shiffman’s Coding Train 1.3 Random Vectors: https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/1-vectors/6-acceleration-vector
  created 08 Feb 2023
  modified 08 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/
let mover;
function setup() {
  createCanvas(600, 600);
  mover = new Mover(width / 2, height / 2);
  background(220);
}

function draw() {
  // background(220);

  mover.move();
  mover.show();
}

//CLASS =============================
class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = p5.Vector.random2D();
    this.acc.setMag(0.1);
  }
  move() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  show() {
    circle(this.pos.x, this.pos.y, 30);
  }
}

/**************************************************************************
  Normalized Vector Array
  REFERENCES:
  # Nature of Code 2nd Edition 1. Vectors : https://nature-of-code-2nd-edition.netlify.app/vectors/
  # Dan Shiffman’s Coding Train 1.3 Random Vectors: https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/1-vectors/6-acceleration-vector
  created 08 Feb 2023
  modified 08 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/

let clrs = ["#183a37", "#efd6ac", "#c44900", "#432534"];
let dots = [];

function setup() {
  createCanvas(600, 600);
  background("#04151f");
  for (let i = 0; i < 100; i++) {
    dots.push(
      new Dot(random(width), random(height), clrs[floor(random(clrs.length))])
    );
  }
}

function draw() {
  for (let dot of dots) {
    dot.move();
    dot.show();
  }
}

//CLASS =============================
class Dot {
  constructor(x, y, clr) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.clr = clr;
  }
  move() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }
  show() {
    stroke(this.clr);
    point(this.pos.x, this.pos.y);
  }
}

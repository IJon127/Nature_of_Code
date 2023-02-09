/**************************************************************************
  Static v.s. Instance Vector
  REFERENCES:
  # Nature of Code 2nd Edition 1. Vectors : https://nature-of-code-2nd-edition.netlify.app/vectors/
  # Dan Shiffman’s Coding Train 1.3 Random Vectors: https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/1-vectors/4-static-functions
  created 08 Feb 2023
  modified 08 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/
let origin;
let insPos;

function setup() {
  createCanvas(600, 600);
  origin = createVector(width / 2, height / 2);
  // insPos = origin; <-------this dose not make a copy. WHY?
  insPos = createVector(width / 2, height / 2);
}

function draw() {
  background(220);
  let vel = createVector(random(-5, 5), random(-5, 5));

  //Instance---------

  insPos.add(vel);
  fill(255);
  circle(insPos.x, insPos.y, 30);

  //Static-----------

  let staPos = p5.Vector.add(origin, vel);
  fill(0);
  circle(staPos.x, staPos.y, 30);
}

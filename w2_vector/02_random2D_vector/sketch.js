"use strict";
/**************************************************************************
  P5 Random 2D
  REFERENCES:
  # Nature of Code 2nd Edition 1. Vectors : https://nature-of-code-2nd-edition.netlify.app/vectors/
  # Dan Shiffman’s Coding Train 1.3 Random Vectors: https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/1-vectors/3-random-vectors
  created 05 Feb 2023
  modified 06 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/

function setup() {
  createCanvas(600, 600);
}

function draw() {
  translate(width / 2, height / 2);
  background(220, 10);
  noFill();
  stroke(0);

  let v = p5.Vector.random2D();
  v.mult(random(100, 250));
  for (let i = 0; i < 20; i++) {
    line(0, 0, v.x, v.y);
  }
}

"use strict";
/**************************************************************************
  P5 Perlin Noise Walk
  REFERENCES:
  # Nature of Code 2nd Edition Introduction : https://nature-of-code-2nd-edition.netlify.app/introduction/
  # Dan Shiffman’s Coding Train Perlin Noise Tutorial: https://youtu.be/Qf4dIN99e2w
  created 01 Feb 2023
  modified 01 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/
let off = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // background(220);
  circle(
    noise(100 + off) * width,
    noise(500 + off) * height,
    noise(600 + off) * 50
  );
  off += 0.01;
}

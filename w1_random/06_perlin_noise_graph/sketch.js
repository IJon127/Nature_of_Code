"use strict";
/**************************************************************************
  P5 Perlin Noise Graph
  REFERENCES:
  # Nature of Code 2nd Edition Introduction : https://nature-of-code-2nd-edition.netlify.app/introduction/
  # Dan Shiffman’s Coding Train Graphing 1D Perlin Noise Tutorial: https://youtu.be/y7sgcFhk6ZM
  created 01 Feb 2023
  modified 01 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/

let xoff = 0;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(1, 100, 50);
  slider.position(10, 10);
}

function draw() {
  background(220);
  noFill();
  beginShape();
  for (let x = 0; x < width; x++) {
    vertex(x, noise(((xoff + x) * slider.value()) / 1000) * height);
  }
  endShape();

  xoff++;
}

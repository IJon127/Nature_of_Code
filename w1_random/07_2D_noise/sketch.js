"use strict";
/**************************************************************************
  P5 2D Perlin Noise 
  REFERENCES:
  # Nature of Code 2nd Edition Introduction : https://nature-of-code-2nd-edition.netlify.app/introduction/
  # Dan Shiffman’s Coding Train 2D Perlin Noise Tutorial: https://youtu.be/ikwNrFvnL3g
  created 01 Feb 2023
  modified 01 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/

let incrementSlider;
let detailSlider;

function setup() {
  createCanvas(400, 400);
  background(220);
  pixelDensity(1);

  incrementSlider = createSlider(1, 100, 50);
  detailSlider = createSlider(1, 24, 4);
  incrementSlider.position(70, 10);
  detailSlider.position(70, 30);
}

function draw() {
  let inc = incrementSlider.value() * 0.001;
  noiseDetail(detailSlider.value());

  loadPixels();

  let yoff = 0;
  for (let x = 0; x < width; x++) {
    let xoff = 0;
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let clr = noise(xoff, yoff) * 255;
      pixels[index + 0] = clr;
      pixels[index + 1] = clr;
      pixels[index + 2] = clr;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }

  updatePixels();
  // noLoop();

  text("increment", 10, 25);
  text("detail", 10, 45);
}

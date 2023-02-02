"use strict";
/**************************************************************************
  P5 Random Gaussian Walk to Mouse
  REFERENCES:
  # Nature of Code 2nd Edition Introduction : https://nature-of-code-2nd-edition.netlify.app/introduction/
  created 01 Feb 2023
  modified 01 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/
let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  walker = new Walker();
}

function draw() {
  walker.show();
  walker.step();
}

// CLASS ======================================
class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let xstep = randomGaussian((mouseX - this.x) / width, 1);
    let ystep = randomGaussian((mouseY - this.y) / height, 1);

    this.x += xstep;
    this.y += ystep;
  }
}

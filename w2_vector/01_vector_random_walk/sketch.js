"use strict";
/**************************************************************************
  Vector Random Walk
  REFERENCES:
  # Nature of Code 2nd Edition 1. Vectors : https://nature-of-code-2nd-edition.netlify.app/vectors/
  created 05 Feb 2023
  modified 05 Feb 2023
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
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);

    // this.x = width / 2;
    // this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.position.x, this.position.y);
    // point(this.x, this.y);
  }

  step() {
    this.velocity = [floor(random(3)) - 1, floor(random(3)) - 1];
    this.position.add(this.velocity);
  }
}

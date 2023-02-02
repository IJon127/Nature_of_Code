"use strict";
/**************************************************************************
  P5 Sprays
  created 01 Feb 2023
  modified 01 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/
let spots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function mouseClicked() {
  spots.push(
    new Spot(mouseX, mouseY, random(255), random(30, 100), random(20, 70))
  );
}

function draw() {
  for (let spot of spots) spot.show();
}

// CLASS ======================================
class Spot {
  constructor(x, y, clr, r, num) {
    this.x = x;
    this.y = y;
    this.clr = clr;
    this.r = r;
    this.num = num;
  }

  show() {
    fill(this.clr);
    noStroke();

    for (let i = 0; i < this.num; i++) {
      let xrange = randomGaussian(this.x, this.r);
      let yrange = randomGaussian(this.y, this.r);
      circle(xrange, yrange, random(2, 10));
    }
  }
}

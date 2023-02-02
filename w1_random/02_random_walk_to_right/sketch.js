"use strict";
/**************************************************************************
  P5 Random Walk to Right
  REFERENCES:
  # Nature of Code 2nd Edition Introduction : https://nature-of-code-2nd-edition.netlify.app/introduction/
  created 01 Feb 2023
  modified 01 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/

let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  for (let i = 0; i < height; i++) {
    walkers[i] = new Walker(i, floor(i % 255));
  }
}

function draw() {
  for (let walker of walkers) {
    walker.show();
    walker.step();
  }
}

// CLASS ======================================
class Walker {
  constructor(y, clr) {
    this.x = 0;
    this.y = y;
    this.clr = clr;
  }

  show() {
    stroke(this.clr);
    point(this.x, this.y);
  }

  step() {
    let r = random(1);
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
  }
}

"use strict";
/**************************************************************************
  Sunset Water
  created 02 Feb 2023
  modified 02 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  colorMode(HSB);
}

function draw() {
  let maxHeight = 100;
  let yoff = 0;

  for (let y = 0; y < height + maxHeight; y += 5) {
    let xoff = 0;
    fill(random(170, 210), random(20, 80), 50 - random(y / 20));
    stroke(random(50, 25), random(30, 80), 255, random(1 - y / height) * 1.5);
    strokeWeight(random(3));

    beginShape();
    vertex(0, height);
    for (let x = 0; x < width; x++) {
      let h = noise(xoff, yoff) * maxHeight - maxHeight;

      vertex(x, y + h);

      xoff += 0.003;
    }
    vertex(width, height);
    endShape();

    yoff += 0.3;
  }

  noLoop();
}

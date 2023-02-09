/**************************************************************************
  Normalized Vector Array
  REFERENCES:
  # Nature of Code 2nd Edition 1. Vectors : https://nature-of-code-2nd-edition.netlify.app/vectors/
  # Dan Shiffman’s Coding Train 1.3 Random Vectors: https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/1-vectors/5-unit-vector
  created 08 Feb 2023
  modified 08 Feb 2023
  by I-Jon Hsieh
 **************************************************************************/

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  let spacing = 18;
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      let v = createVector(mouseX - x, mouseY - y);
      v.setMag(10);
      line(x, y, x + v.x, y + v.y);
    }
  }
}

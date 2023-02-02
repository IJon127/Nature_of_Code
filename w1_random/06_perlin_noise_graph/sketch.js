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

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

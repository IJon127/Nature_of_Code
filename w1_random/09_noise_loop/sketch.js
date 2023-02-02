let t = 0;

function setup() {
  createCanvas(500, 500);
  background(220);
  colorMode(HSB);
}

function draw() {
  background(map(noise(t / 100), 0, 1, 200, 360), 20, 120, 0.2);

  translate(width / 2, height / 2);
  rotate(t / 50);
  strokeWeight(1);

  noFill();

  for (let r = 1; r < dist(0, 0, width, height) / 2; r += 2) {
    let originPoint = (r + t) / 100;
    stroke(
      map(noise(r / 30 + t / 100), 0, 1, 180, 360),
      map(noise(r / 20 + t / 100), 0, 1, 5, 50),
      map(noise(r / 50 + t / 300), 0, 1, 70, 200)
    );
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.01) {
      let xoff = cos(a) + originPoint;
      let yoff = sin(a) + originPoint;
      nr = r + noise(xoff, yoff / 2) * r;
      let x = nr * cos(a);
      let y = nr * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    t += 0.01;
  }

  // noLoop();
}

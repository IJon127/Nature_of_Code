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
    // 8 possible steps (int)
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;

    // // 8 possible steps (float)
    // let xstep = random(-1, 1);
    // let ystep = random(-1, 1);

    this.x += xstep;
    this.y += ystep;

    // // 4 possible steps
    // let choice = floor(random(4));
    // switch (choice) {
    //   case 0:
    //     this.x++;
    //     break;
    //   case 1:
    //     this.y++;
    //     break;
    //   case 2:
    //     this.x--;
    //     break;
    //   case 3:
    //     this.y--;
    //     break;
    //   default:
    //     console.log("not a int within 4");
    // }
  }
}

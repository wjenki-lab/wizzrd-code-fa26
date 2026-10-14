let walker;
let drops = [];
let speed=80*2
let extraCanvas;

function setup() {
  createCanvas(600, 400);
  extraCanvas=createGraphics(width,height);
  background(139, 0, 0);
  p = createVector(random(width), 200);
  drawBuildings();
  //    for (let i = 0; i < 10; i++){
  // } 
// fill the drops array with new drops with a for loop
  for (let i=0;i<10;i++){
 drops.push(new Drop())   
  }
}

function draw() {
  //console.log(walker);
  // draw walker
  
  extraCanvas.clear()
  drawBuildings()
  
  
  
 for (let i of drops){
    i.show()
    i.update()
 }  // loop through all the drops; update and show them with a for loop

  image(extraCanvas, 0, 0)
  
  if (walker) {
    walker.step();
    walker.show();
  }
}

function mousePressed() {
  walker = new Walker();
}

function drawBuildings() {
  // draw background buildings
//extraCanvas.background(139, 0, 0);
  extraCanvas.fill(2);
  extraCanvas.ellipse(50, 50, 250, 150);
  extraCanvas.fill(50);
  extraCanvas.ellipse(100, 50, 160, 150);
  extraCanvas.fill(50);
  extraCanvas.rect(-20, 60, 200, height);

  extraCanvas.fill(255, 210, 0);
  extraCanvas.rect(30, 110, 30, height);

  extraCanvas.fill(255, 210, 0);
  extraCanvas.rect(70, 110, 30, height);
  extraCanvas.fill(50);
  extraCanvas.rect(90, 70, height / 5, height);
  extraCanvas.fill(2);
  extraCanvas.rect(90, 70, 26, height);
  extraCanvas.fill(255, 210, 0);
  extraCanvas.rect(130, 90, 26, height);
  extraCanvas.fill(255, 170, 0);
  extraCanvas.rect(150, 90, 10, height);
  extraCanvas.fill(2);
  extraCanvas.rect(400, 70, width / 3, height);
  extraCanvas.fill(50);
  extraCanvas.rect(430, 70, width / 3, height);
  extraCanvas.fill(50);
  extraCanvas.rect(200, 30, width / 3, height);
  extraCanvas.fill(2);
  extraCanvas.rect(-180, 0, 200, height);
  extraCanvas.rect(200, 30, 30, height);
  extraCanvas.rect(120, 145, height / 7, height);
  extraCanvas.fill(50);
  extraCanvas.rect(140, 145, 130, height);
  extraCanvas.fill(255, 210, 0);
  extraCanvas.rect(170, 200, 14, height);
  extraCanvas.fill(255, 210, 0);
  extraCanvas.rect(190, 200, 14, height);
  extraCanvas.fill(255, 210, 0);
  extraCanvas.rect(210, 200, 14, height);
  extraCanvas.fill(255, 210, 0);
  extraCanvas.rect(230, 200, 14, height);
}

class Walker {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.prevX = this.x;
    this.prevY = this.y;
  }

  show() {
    stroke(255);
    strokeWeight(3);

    point(this.x, this.y);

    // line(this.x, this.y, this.prevX, this.prevY)
  }

  step() {
    // 0, 1, 2, 3
    // random(4) --> 0 and 3.99999999999
    let choice = floor(random(4));
    if (choice == 0) {
      this.x++*speed;
    } else if (choice == 1) {
      this.x--*speed;
    } else if (choice == 3) {
      this.y++ * speed;
    } else if (choice == 3) {
      this.y-- * speed;
    }
  }
}

class Drop {
  constructor() {
    this.length = random(20, 40);
    this.pos = createVector(random(width), -this.length);
    this.vel = createVector(0, random(8, 11));
    this.strength = random(255);
    this.dead = false;
  }
  show() {
    extraCanvas.stroke(255, this.strength);
    extraCanvas.line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.length);
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.y > height + 400) {
    this.dead = true
      //drops.shift()
      // reset y position back to the top
      this.pos.y= -this.length
      // reset x position to a new random x value (if you want)
    }
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 50);

  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.show();

    if (p.lifespan <= 0) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  let centerX = mouseX;
  let centerY = mouseY;
  let numParticles = 100;
  let angleStep = TWO_PI / numParticles;

  for (let i = 0; i < numParticles; i++) {
    let angle = i * angleStep;
    let radius = i * 2; // Adjust for spiral spacing
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;

    particles.push(new Particle(x, y, angle, radius, centerX, centerY));
  }
}

class Particle {
  constructor(x, y, angle, radius, centerX, centerY) {
    this.pos = createVector(x, y);
    this.vel = createVector(cos(angle) * 2, sin(angle) * 2);
    this.acc = createVector();
    this.lifespan = 255;
    this.radius = radius;
    this.center = createVector(centerX, centerY);
    this.angle = angle;
  }

  update() {
    this.acc = p5.Vector.sub(this.center, this.pos).setMag(0.01);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2;
  }

  show() {
    fill(150, 50, 255, this.lifespan);
    ellipse(this.pos.x, this.pos.y, 10);
  }
}

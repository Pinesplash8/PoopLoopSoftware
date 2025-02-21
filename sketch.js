let n = 0;
let c = 8;

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('p5-container');
  myCanvas.style('z-index', '-10'); // Move behind text
  myCanvas.style('position', 'fixed'); // Fix position
  myCanvas.style('top', '0');
  myCanvas.style('left', '0');
  myCanvas.style('pointer-events', 'none'); // Allow clicks through
}


function draw() {
    let a = n * 137.5;
    let r = c * sqrt(n);
    let x = r * cos(a) + width / 2;
    let y = r * sin(a) + height / 2;

    let s = map(n % 50, 0, 50, 4, 12); // Size variation
    let alpha = map(s, 4, 12, 20, 100); // Glow effect

    stroke(255, alpha); // Soft white with glow transparency
    strokeWeight(1.5);
    ellipse(x, y, s, s);

    n++;

    if (r > width / 2) noLoop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    n = 0;
    loop();
}

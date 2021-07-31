let x = 320;
let y = 180;
let x2 = 120;
let y2 = 900;
let xspeed = 1.5;
let yspeed = 1.5;
let xspeed2 = 4;
let yspeed2 = 3;
let font1;
let font2;
const r = 25;

const CanvasMsg = 'FAQ';
const CanvasMsg2 = 'MERCH';
console.log('*****************');

// function setup() {
//   console.log(windowWidth);
//   createCanvas(windowWidth, windowHeight);
// }
// setup();

function draw() {
  clear();
  textSize(25);
  const mW = textWidth(CanvasMsg) * 2;
  const mW2 = textWidth(CanvasMsg2) * 2;

  if (isMouseInsideText(CanvasMsg, x, y) || isMouseInsideText(CanvasMsg2, x2, y2)) {
    cursor(HAND);
  } else { cursor(ARROW); }

  if (isMouseInsideText(CanvasMsg, x, y)) {
    fill('#ddc558');
    rectMode(CENTER);
    stroke('#0000ff');
    strokeWeight(3);
    rect(x, y, mW, mW, 150, 150, 150, 150);
    fill('#0000ff');
    noStroke();
    text(CanvasMsg, x, y + 8, r * 2, r * 2);
    x += xspeed;
    y += yspeed;
  } else {
    fill('#0000ff');
    rectMode(CENTER);
    noStroke();
    rect(x, y, mW, mW, 150, 150, 150, 150);
    fill(255);

    text(CanvasMsg, x, y + 8, r * 2, r * 2);
  }

  if (isMouseInsideText(CanvasMsg2, x2, y2)) {
    fill('#ddc558');
    rectMode(CENTER);
    stroke('#2b8704');
    strokeWeight(3);
    rect(x2, y2, mW2, mW2, 150, 150, 150, 150);
    fill('#2b8704');
    noStroke();

    text(CanvasMsg2, x2 - 15, y2 + 10, r * 2, r * 2);
    x2 += xspeed2;
    y2 += yspeed2;
  } else {
    fill('#2b8704');
    rectMode(CENTER);
    noStroke();
    rect(x2, y2, mW2, mW2, 150, 150, 150, 150);
    fill(255);

    text(CanvasMsg2, x2 - 15, y2 + 10, r * 2, r * 2);
  }

  x -= xspeed;
  y -= yspeed;

  x2 -= xspeed2;
  y2 -= yspeed2;

  if (x > width - mW / 2 || x < mW / 2) {
    xspeed = -xspeed;
  }
  if (y > height - mW / 2 || y < mW / 2) {
    yspeed = -yspeed;
  }

  if (x2 > width - mW2 / 2 || x2 < mW2 / 2) {
    xspeed2 = -xspeed2;
  }
  if (y2 > height - mW2 / 2 || y2 < mW2 / 2) {
    yspeed2 = -yspeed2;
  }
}

function mouseClicked() {
  if (isMouseInsideText(CanvasMsg, x, y)) {
    document.body.scrollTop = 300000000; // For Safari
    document.documentElement.scrollTop = 300000000; // For Chrome, Firefox, IE and Opera
  }
}

function mouseClicked2() {
  if (isMouseInsideText(CanvasMsg2, x2, y2)) {
    document.body.scrollTop = 1000; // For Safari
    document.documentElement.scrollTop = 1000; // For Chrome, Firefox, IE and Opera
  }
}

function isMouseInsideText(CanvasMsg, x, y) {
  const messageWidth = textWidth(CanvasMsg);
  const messageTop = y - textAscent();
  const messageBottom = y + textDescent();

  return mouseX > x && mouseX < x + messageWidth
    && mouseY > messageTop && mouseY < messageBottom;
}

function isMouseInsideText2(CanvasMsg2, x, y) {
  const messageWidth = textWidth(CanvasMsg2);
  const messageTop = y - textAscent();
  const messageBottom = y + textDescent();

  return mouseX > x && mouseX < x + messageWidth
    && mouseY > messageTop && mouseY < messageBottom;
}

// colors ('#403380'), (233,158,58), (179,87,18), (44,18,179), (218, 100, 90, 100)
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(44,18,179);
 
  noStroke();
  
  push();
  fill('#403380')
  arc(250, 265, 375, 375, 0, TWO_PI);
  
  noFill();
  colorMode(HSB,360,100,100,100);
  stroke(218, 100, 90, 100);
  strokeWeight(15);
  arc(250, 265, 420, 420, 0, TWO_PI);
  pop();
  
  fill(179,87,18);
  beginShape();
    vertex(50,150);
    vertex(450, 150);
    vertex(250,500)
  endShape(CLOSE);
  
  push();
  colorMode(HSB,360,100,100,100);
  fill(218, 100, 90, 100);
  triangle(250, 100, 100, 350, 400, 350);
  pop();
 
  fill(179,87,18);
  arc(400, 350, 125, 125, 0, TWO_PI);
 
  fill(233,158,58);
  arc(400, 350, 100, 100, 0, TWO_PI);
 
  fill(179,87,18);
  arc(100, 350, 125, 125, 0, TWO_PI);
 
  fill(233,158,58);
  arc(100, 350, 100, 100, 0, TWO_PI);
 
  fill(179,87,18);
  arc(250, 100, 125, 125, 0, TWO_PI);
 
  fill(233,158,58);
  arc(250, 100, 100, 100, 0, TWO_PI);

  fill(233,158,58);
  arc(250, 265,170,170,0,TWO_PI);
 
  fill(179,87,18);
  arc(250, 265,100,100,0,TWO_PI);
}
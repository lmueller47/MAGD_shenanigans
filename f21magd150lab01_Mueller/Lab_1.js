function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  
  strokeWeight(20);
  
  push();
  fill(150);
  ellipseMode(CORNERS);
  ellipse(50, 50, 350, 350);
  fill(1);
  ellipse(100, 100, 300, 300);
  pop();
  
  //I know we haven't used arc yet but I asked in class on making semicirlces and I'm pretty sure you said it was fine 
  //I just assumed the same principles for fill applied
  fill(1);
  arc(0, 400, 290, 290, HALF_PI, 0);
  arc(400, 0, 290, 290, 0, PI);
  fill(200);
  arc(0,0, 260, 260, 0, HALF_PI);
  arc(400, 400, 260, 260, PI, HALF_PI );
  
  line(10, 25, 10, 375);
  line(25, 390, 375, 390);
  line(390, 375, 390, 25);
  line(375, 10, 25, 10);
  
  noFill();
  rect(200, 200, 100, 100, 10);
  rect(100, 100, 100, 100, 10);
  fill(200);
  rect(0, 300, 100, 100, 20);
  rect(300, 0 , 100, 100, 20);
  
  fill(100);
  ellipse(200, 200, 150, 150);
  
  fill(225);
  rect(150, 150, 100, 100, 10);
  
  ellipse(200, 200, 100, 100);
  
  strokeWeight(80);
  
  point(25, 25);
  point(375, 375);
  point(375, 25);
  point(25, 375);
}
headlines = [
  "Directed by Quentin Tarantino",
  "A FIGHT OF THE AGES",
  "Lots of EXPLOSIONS" ];

var f;
var x;
var index = 0;

var img; 
var img2;

function preload()
{
  //preload images and string files
  img = loadImage("OIP.jpg");
  img2 = loadImage("R.jpg");
  t1 = loadStrings("t1.txt");
  t2 = loadStrings("t2.txt");
}

function setup() {
  createCanvas(320, 300);
  noStroke() ;
  
  //load the two fonts used and intitalizes them
  poorRichard = loadFont("POORICH.TTF");
  f = loadFont( "arial.ttf");
  
  x = width;
  
  pdf = createPDF();
  pdf.beginRecord();
}

function draw() {
  //creates and fits the two images in the canvas
  push();
  tint(0, 200, 150, 255);
  image(img2, 0, 0, width, height/2);
  pop();
  
  push();
  img.filter(GRAY);
  image(img, 0, 150, width, height/2);
  pop();
  
  //creates and centers the title
  push();
  textFont(poorRichard);
  textSize(30);
  fill(0);
  textAlign(CENTER);
  translate(width/2, height/2 - 25);
  fill(127, 255, 255, 127);
  text(t1 + "\n VS \n" + t2, 0, 0);
  pop();
  
  //creates scolling effect on text by moving the text to teh left every frame
  push();
  fill(255);
  textFont(f, 16);
  textAlign (LEFT);
  
  text(headlines[index], x, height-20); 
  x = x - 3;
  
  let w = textWidth(headlines[index]); 
  if (x < -w) {
    x = width;
    index = (index + 1) % headlines.length;
  }
  pop();
}


//allowed for the pdf to be saved
function mousePressed()
{
    pdf.save();
}


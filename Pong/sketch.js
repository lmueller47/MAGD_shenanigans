var posY;
var posYl;

let x = 300;
let y = 150;
let xspeed = 5;
let yspeed = 2;

let r = 12.5;
function setup() {
  createCanvas(600, 400);
  posY = 150;
  posYl = 150;
}

function draw() {
  background(0);
  
  
  //Creating the ball and both paddles.
  push();
  rect(25, posYl, 25, 100);
  
  translate (525, 0);
  scale(1);
  rotate(TWO_PI);
  
  rect(25, posY, 25, 100);
  pop();
  
  scale(1);  
  ellipse(x, y, r*2, r*2);
  
  // Movement functions called every frame.
  paddleLeft();
  paddleRight();
  ballMove();
}

//Movement of left paddle using W and S.
function paddleLeft()
{
    if(keyIsDown(87))
    {
      posYl -= 5;
    }
  if(keyIsDown(83))
    {
      posYl += 5;
    }
}

//Movement of right paddle using up and down arrows.
function paddleRight()
{
    if(keyIsDown(UP_ARROW))
    {
      posY -= 5;
    }
  if(keyIsDown(DOWN_ARROW))
    {
      posY += 5;
    }
}

//Movement of the ball.
//The ball changes direction on collison by mulitplying speed in a direction by a negative.
function ballMove()
{
  x += xspeed;
  y += yspeed;
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
 
  if(x > 550 - r && y > posY && y < posY + 100)
    {
      xspeed = -xspeed;
    }
 
  if( x < 50 + r &&y > posYl && y < posYl + 100)
    {
      xspeed = -xspeed;
    }
  
  // Multiplies speed by two if a corner of either paddle is hit.
  if(x > 550 - r &&((y> posY && y < posY + 5) || (y < posY + 100 && y > posY + 95)))
    {
      xspeed *= 2;
    }
  
  if(x < 50 + r &&((y> posYl&& y < posYl+ 5) || (y < posYl+ 100 && y > posYl+ 95)))
    {
      xspeed *= 2;
    }
  
  // Resets the game.
  if(x > 575 || x < 25)
    {
      x = 300;
      y = 150;
      xspeed = 5;
      yspeed = 2;
    }
}
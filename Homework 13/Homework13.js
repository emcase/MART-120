// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(700, 700);
    // get a random speed when the it first starts
    for (var i = 0; i < 11; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(200, 350);
}

function draw() {
    background(150,75,108);
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorder(10);

    // exit message
    exit();

    //  Call Draw player and move player functions
    drawPlayer();
    playerMoves();

    //call mouse move function
    mouseShape();

    //  Call Winner Function
    Winner();  

    // potential enemy
    fill(0, 255, 255);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }


 // create function for shape based on mouse click
 function mouseShape()
    {
    fill(106,90,205);
    circle(mouseShapeX, mouseShapeY, 35);
    }
}

///Draw Player Function

function drawPlayer()
{
      fill(255,20,147);
      circle(characterX,characterY,50);
}

//Move Player Function

function playerMoves()
{
// handle keys
      if(keyIsDown(w))
      {
          characterY -= 10;
      }
      if(keyIsDown(s))
      {
          characterY += 10;
      }
      if(keyIsDown(a))
      {
          characterX -= 10;
      }
      if(keyIsDown(d)) 
      {
          characterX += 10;
      }
    }

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}


// exit message
function exit()
{
      textSize(20);
      fill(0);
      text("EXIT HERE", width-120,height-60);
}
function Winner()
    {
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(8);
        textSize(40);
        text("Winner!", width/2-50, height/2-50);
    }
    }
function createBorder(thickness) {
   // top border
   rect(0,0,width,15);
   // left border
         rect(0,0,10,height);
   // bottom border
         rect(0, height-10,width, 15);
   //right upper border
         rect(width-15,0,15,height-50);
}


function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
function keyPressed(){
    if ( keyCode === LEFT_ARROW) {
        characterX -= 10;
    }
    else if(keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW){
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }

  }
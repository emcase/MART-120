// x and y for my character
var characterX = 100;
var characterY = 100;
//define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y for a shape 1
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//A and B for a shape 2
var shapeA = 30;
var shapeB = 50;
var shapeASpeed;
var shapeBSpeed;

//create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
  function setup()
  {
     createCanvas (700, 700);
     
// get a random speed to begin
     shapeXSpeed = Math.floor(Math.random()* (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random()* (Math.floor(Math.random() * 5)) + 1);
     shapeASpeed = Math.floor(Math.random()* (Math.floor(Math.random() * 5)) + 1);
     shapeBSpeed = Math.floor(Math.random()* (Math.floor(Math.random() * 5)) + 1);
  }

  function draw()
  {
      background(150,75,108);
      stroke(0);
      fill(0);
      
//call CreateBorder function
    createBorders();

 //call Draw Shapes function
    drawShapes();  
    
//call move Shape 1 function

    moveShape1();

//move Shape 2 function

    moveShape2(); 

//  Call Draw player and move player functions
    drawPlayer();
    playerMoves();

// Call Mouse Shape Draw Function
    mouseShape();

//  Call Winner Function
    Winner();

//call Exit function
    exit();
  }

function createBorders()
{
// top border
    rect(0,0,width,15);
// left border
      rect(0,0,10,height);
// bottom border
      rect(0, height-10,width, 15);
//right upper border
      rect(width-15,0,15,height-50);
}

// exit message
function exit()
{
      textSize(20);
      fill(0);
      text("EXIT HERE", width-120,height-60);
}


//Draw Player Function

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
      // potential enemy
      fill(0,255,255);


//Draw Shapes Function
    function drawShapes(){

    // draw shape 1
      circle(shapeX, shapeY, 20);
      fill(124,252,0);

    // draw shape 2
      fill(124,252,0);
      circle(shapeA, shapeB, 35);
    }

     // get a random speed when it first begins
      shapeXSpeed = Math.floor(Math.random()* (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeed = Math.floor(Math.random()* (Math.floor(Math.random() * 5)) + 1);
      shapeASpeed = Math.floor(Math.random()* (Math.floor(Math.random() * 5)) + 1);
      shapeBSpeed = Math.floor(Math.random()* (Math.floor(Math.random() * 5)) + 1);

    // move shape 1 function

        function moveShape1()
        {
        shapeX += shapeXSpeed;
        shapeY += shapeYSpeed;

    // has the shape 1 gone out of bounds

        if(shapeX > width)
        {
           shapeX = 0;
        }
        if(shapeX < 0)
        {
            shapeX = width;
        }
        if(shapeY > height)
        {
            shapeY = 0;
        }
        if(shapeY < 0)
        {
            shapeY = height;
        }
        }
            
    // move shape 2 function

        function moveShape2()
        {

      shapeA += shapeASpeed;
      shapeB += shapeBSpeed;

    // has the shape 2 gone out of bounds

      if(shapeA > width)
      {
          shapeA = 0;
      }
      if(shapeA < 0)
      {
          shapeA = width;
      }
      if(shapeB > height)
      {
          shapeB = 0;
      }
      if(shapeB < 0)
      {
          shapeB = height;
      }
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

// create function for shape based on mouse click
    function mouseShape()
    {
   fill(106,90,205);
   circle(mouseShapeX, mouseShapeY, 35);
    }
  
  
  function mouseClicked()
  {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
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
    
   

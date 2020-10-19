
function setup() {
  createCanvas(1000,1000);
}

function draw() {
    background(220);
}

function draw()
{
    //head
    fill(240,128,128);
    circle(250,175,300);

    //eye1
    strokeWeight(13);
    fill(127,255,212);
    circle(300,115,35);

    //eye2
    fill(127,255,212);
    circle(188,115,35);

    //mouth
    fill(221,160,221);
    ellipse(245,255,76,30);
   
    //nose
    fill(255,20,147);
    triangle(220,220,250,175,330,220);

    
     //body
    fill(0,255,0);
    ellipse(245,450,100,270);

    //hair
    line(60,200,200,42);
    line(420,200,300,42);
    line(35,200,225,37);
    line(470,200,300,42);
    line(20,200,245,35);
    line(500,200,278,35);

    //legs
    line(210,800,210,550);
    line(280,800,280,550);

    //arms
    line(350,350,300,470);
    line(200,400,150,600);

    fill(140);
    textSize(30);
    text("Michelle Casey",500,100);


}
   
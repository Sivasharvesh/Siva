
var r = 0;
var g = 50;
var b=255;

var Movingcircle;



function setup(){

  createCanvas(1200,400);
Movingcircle = createSprite(200,200,50,50);
shapecolor = "red";

}


function draw(){
  background(0);

  ellipseMode(RADIUS);



  Movingcircle.x = World.mouseX;
  Movingcircle.y = World.mouseY;
  Movingcircle.shapecolor = "white";

  if(Movingcircle.x > 150){
    Movingcircle.shapecolor = "red";
}
if(Movingcircle.x > 200){
  Movingcircle.shapecolor = "GREEN";
}
if(Movingcircle.x > 350){
  Movingcircle.shapecolor = "BLUE"
}
display();

 drawSprite();

}
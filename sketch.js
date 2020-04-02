var fixedRect, movingRect;
var box1,box2;
var box3,box4;
function setup() {
  createCanvas(1200,800);
  box3 = createSprite(400, 100, 50, 80);
  box3.shapeColor = "green";
  box3.debug = true;
  box4= createSprite(400, 800,80,30);
  box4.shapeColor = "green";
  box4.debug = true;

  box4.velocityY = -5;
  box3.velocityY = +5;

  box1 = createSprite(600,300,20,30);
  box1.shapeColor = "yellow";
  box2 = createSprite(600,400,20,30);
  box2.shapeColor = "yellow";

}

function draw() {
  background(0,0,0);  

  box1.x = World.mouseX;
  box1.y = World.mouseY;
 
  if(isTouching(box1,box2)){
    box1.shapeColor= "purple";
    box2.shapeColor= "purple";
  }
  else{
    box1.shapeColor = "yellow";
    box2.shapeColor = "yellow";
  }

  bounceOff(box3,box4);
  
  drawSprites();
}


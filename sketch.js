var fixedRect,movingRect;

function setup() {
  createCanvas(400,400);                
  fixedRect = createSprite(200, 200, 50, 100);
  fixedRect.shapeColor="green";
  movingRect = createSprite(400,200,100,60);
  movingRect.shapeColor ="green";
}
                
function draw() 
{
  background(0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 +movingRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}
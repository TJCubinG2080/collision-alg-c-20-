var fixedRect,movingRect;

function setup() {
  
  createCanvas(1200,1000);
  fixedRect = createSprite(400, 400, 100, 40);
  fixedRect.shapeColor = "lime";

  movingRect = createSprite(600, 400, 40, 100);
  movingRect.shapeColor = "lime";

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y <= fixedRect.height/2+movingRect.height/2 ){
  fixedRect.shapeColor = "grey";
  movingRect.shapeColor = "grey"; 
  }else{
  fixedRect.shapeColor = "lime";
  movingRect.shapeColor = "lime";
  }
  drawSprites();
}
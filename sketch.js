var movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  //fixedRect = createSprite(600, 400, 50, 80);
 //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  movingRect = createSprite(800,400,80,30);
 movingRect.shapeColor= "red";

  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "green";
 
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "green";

  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "green";

  object4 = createSprite(400,100,50,50);
  object4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,object1)){
  movingRect.shapeColor = "blue";
  object1.shapeColor = "blue";
 }
 else {
  movingRect.shapeColor = "green";
  object1.shapeColor = "green";
}
if(isTouching(movingRect,object2)){
  movingRect.shapeColor = "red";
  object2.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  object2.shapeColor = "green";
}  
if(isTouching(movingRect,object3)){
  movingRect.shapeColor = "yellow";
  object3.shapeColor = "yellow";
 }
 else {
  movingRect.shapeColor = "green";
  object3.shapeColor = "green";
}
if(isTouching(movingRect,object4)){
  movingRect.shapeColor = "pink";
  object4.shapeColor = "pink";
 }
 else {
  movingRect.shapeColor = "green";
  object4.shapeColor = "green";
}

  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
 return true
}else{
  return false
}

}
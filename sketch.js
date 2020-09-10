var bullet, speed,weight;
var wall,thickness

function setup() {
  bullet = createSprite(50,200,80,20)
  bullet.shapeColor = "white"
  bullet.velocityX = 5
  
 
}

function draw() {
  background(0,255,255);  
 
drawSprites();
}

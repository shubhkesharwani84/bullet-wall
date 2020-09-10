var bullet, speed,weight;
var wall,thickness

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,80,20)
  bullet.velocityX = 5;
  
 
}

function draw() {
  background(0,255,255);  
 
drawSprites();
}

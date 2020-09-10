var bullet, speed,weight;
var wall,thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  thickness = random(22,83)
  weight = random(30,52)
  bullet = createSprite(50,200,80,20)
  bullet.velocityX = 5;
  
 
}

function draw() {
  background(0,255,255);  
 
drawSprites();
}

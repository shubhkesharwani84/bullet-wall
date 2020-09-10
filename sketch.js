var bullet, speed,weight;
var wall,thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  thickness = random(22,83)
  weight = random(30,52)
  bullet = createSprite(50,200,80,20)
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)
 }

function draw() {
  background(0,255,255);  
   
  
drawSprites();
}
function hascollided(bullet,wall){
var bulletRightEdge = bullet.x = bullet.width;
var wallLeftEdge = wall.x

if(bulletRightEdge>=wallLeftEdge){
   return true;
}else{
  return false;
}

}

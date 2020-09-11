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
  
  if(hascollided(bullet,wall)){
    bullet.velocityX =0;
  var damage =0.5*weight *speed * speed/(thickness*thickness*thickness);
  
  if(damage>10){
    bullet.shapeColor = "red"
  }
  if(damage<10)
  {bullet.shapeColor = "green"}
  }
  
  console.log(bullet.velocityX)
  drawSprites();
}
 
function hascollided(bullet,wall){
bulletLeftEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  
  if(bulletLeftEdge>=wallLeftEdge){
   return true;
}
  return false;
}

var bullet, speed,weight;
var wall,thickness

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223,331);
  weight = random(30,52);
  bullet = createSprite(50,200,80,20)
  bullet.shapeColor = "white"
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = "rgb(80,80,80)"
  bullet.velocityX = speed;
 
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
bulletRightEdge = bullet.x = bullet.width;
wallLeftEdge = wall.x

if(bulletRightEdge>=wallLeftEdge){
   return true;
}else{
  return false;
}

}
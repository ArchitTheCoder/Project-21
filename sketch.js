var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random(223,321);
  weight = random(30,52);
  thickness  = random(22,83);

  bullet = createSprite(50,200,40,10);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey";

}

function draw() {
  background(255); 
  

  if (hasCollided(bullet,wall)) {

    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness) ;

    if (damage < 10) {
      wall.shapeColor = "green";
    }
    
    if (damage > 10) {
      wall.shapeColor = "red";
    }

  }



  
  drawSprites();
}
function hasCollided(bulleT, wallL) {
  
  bulletRightEdge = bulleT.x + bulleT.width;
  wallLeftEge = wall.x;
  if (bulletRightEdge >= wallLeftEge) {
    return true
  }
  return false;
}

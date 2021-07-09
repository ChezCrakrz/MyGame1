var archer
var monster
var arrow
var score

function setup() {
  createCanvas(displayWidth, displayHeight);
  monster = new Monsters(width-30)
  archer = createSprite(750,800)
  score = 0
  
}

function draw() {
  background(255,255,255); 
  monster.display() 

  console.log(displayWidth, displayHeight);

  console.log(mouseX, mouseY);

  if (keyDown("LEFT_ARROW")){
    archer.x = archer.x -10
  }

  if (keyDown("RIGHT_ARROW")){
    archer.x = archer.x +10
  }

    createArrow();

 /*if (arrow.isTouching(monster.sprite)){
   monster.sprite.destroy();
    arrow.destroy();
    score=score+1
  } */

  drawSprites();
  text("Score: "+ score, 500,50);

}

function createArrow(){
  if(keyDown("space")){
    arrow= createSprite(archer.x, archer.y, 30, 30);
    arrow.x = archer.x;
    arrow.velocityY = -25
    arrow.lifetime = 150;
    arrow.scale = 0.4;
  }
}

var path;
var pathIMG;
var runner;
var runnerIMG;

function preload(){
  //pre-load images
pathIMG = loadImage("path.png");
runnerIMG = loadAnimation("runner-1.png","runner-1.png","runner-2.png","runner-1.png")

}

function setup(){
  createCanvas(400,400);

  //create sprites here 

  path = createSprite(200,200);
  path.addImage(pathIMG);
  path.velocityY = 4;
  path.scale = 1.2;

 runner = createSprite(200,300)
 runner.addAnimation("jacksonrunning",runnerIMG)
 runner.scale = 0.1
runner.velocityY = -0.5





}

function draw() {
  background(0);
  path.velocityY = 4;

  if ( path.y > 400){
    path.y = height/5
  }
  drawSprites()
  if (keyDown("right")) {
    runner.x = runner.x + 3;
  }
  if (keyDown("left")) {
   runner.x = runner.x - 3;
  }





}

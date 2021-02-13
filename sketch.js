var Ship, Ship_image,ship_imgBRK;
var back, back_img;
var end,end_img
var GameMode = "Play";
Score = 0;


function preload() {
  Ship_image = loadImage("Car.png")
  back_img = loadImage("background.png")
  end_img = loadImage("End.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  Ship = createSprite(-6900, 300, 10, 10);
  Ship.addImage(Ship_image)
  Ship.scale =0.5;

  back = createSprite(0,0)
  back.addImage(back_img)
  back.scale=1


}

function draw() {
  background(0)
  Ship.setCollider("rectangle", 0, 0, 800, 300)
  

  if (GameMode == "Play") {
    if ((keyWentDown("w") || touches.length > 0)) {
      Ship.velocityX=40;
      touches = []
    }
    if ((keyWentDown("s") || touches.length > 0)) {
      Ship.x=Ship.x-1000;
      touches = []
    }
    if(keyWentDown("space")){
      Ship.velocityX=0
    }
  }
  if (GameMode == "END") {
    Ship.velocityX=0
    if (keyDown("R") || touches.length > 0) {
      GameMode = "Play"
      Ship.x=-6900
      Ship.y=300
    }
  }
  if(Ship.x==7100){
    GameMode="END"
  }
  back.depth=-1
  camera.x=Ship.x
  camera.y=40
  drawSprites();

}



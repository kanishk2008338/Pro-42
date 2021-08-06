var hasDocked=false

function preload(){
bg=loadImage("images/spacebg.jpg")
issImg=loadImage("iss.png")
spacecraft1img=loadImage("spacecraft1.png")
spacecraft2img=loadImage("spacecraft2.png")
spacecraft3img=loadImage("spacecraft3.png")
spacecraft4img=loadImage("spacecraft4.png")

}

function setup() {
  createCanvas(800,400);
  spacecraft=createSprite(285,240);
  spacecraft.addImage(spacecraft1img)
  spacecraft.scale=0.15;

  iss=createSprite(330,130);
  iss.addImage(issImg);
  iss.scale=0.25


}

function draw() {
  background(bg);  
  if (!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
  
  if(keyDown ("UP_ARROW")){
spacecraft.y=spacecraft.y-2
  }
  if(keyDown ("DOWN_ARROW")){
    spacecraft.addImage(spacecraft2img)
  }
  if(keyDown ("LEFT_ARROW")){
    spacecraft.x=spacecraft.x+2
    spacecraft.addImage(spacecraft4img)
  }
  if(keyDown ("RIGHT_ARROW")){
    spacecraft.x=spacecraft.x-2
    spacecraft.addImage(spacecraft3img)
  }
  }
  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
hasDocked=true;
textSize(25)
text("docking successful",200,300)

  }
  drawSprites();
}


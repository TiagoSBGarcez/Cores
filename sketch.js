var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  //box.shapeColor = color(230, 230, 250);
  box.shapeColor = color("red");

}

function draw() {

   background(30);
   
   if (keyDown("d")){
    background("turquoise");
  }

    if (keyDown("a")){
    background("crimson");
  }
 
    if (keyDown("w")){
    background("indigo");
  }

  if (keyDown("s")){
    background("green");
  }

  drawSprites();
}





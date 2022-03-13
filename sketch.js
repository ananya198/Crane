const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var bg;
var bricks = createGroup();
var rope;
var crane;


function preload(){
bg=loadImage("construction sitecode.PNG");
}

function setup() {
  createCanvas(800,400);
  rope = new Rope(8,{x:40,y:30});
  crane=Bodies.circle(350,10,12,ball_options);
	World.add(world,crane);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(50);  
  image(bg,0,0,800,400);
  push();
  imageMode(CENTER);
  pop();
  
ellispe(crane.position.x,ball.position.y,10);
  drawSprites();

  if(collide(crane,block)==true)
  {
    bricks.destroyEach();
  }

  function createBrickRow(y) {
    for(c=0; c<6; c++)
    {
      var brick = createSprite(65+54*c,y,50, 25);
      bricks.add(brick);
    }
    createBrickRow(65);
  createBrickRow(65+29);
  createBrickRow(65+29+29);
  createBrickRow(65+29+29+29);
  }
  

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,crane);
               crane = null;
               return true; 
            }
            else{
              return false;
            }
         }
}
}

function keyPressed(){
	if(keyDown("RIGHT_ARROW")){
		Matter.Body.applyForce(bob,{x:0,y:0},{x:0,y:-0.05});
	  }
}

function keyPressed(){
	if(keyDown("LEFT_ARROW")){
		Matter.Body.applyForce(bob,{x:0,y:0},{x:0,y:0.05});
	  }
}
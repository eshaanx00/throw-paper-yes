
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dbimg,paperimg;
function preload()
{
  dbimg=loadImage("dustbingreen.png")
  paperimg=loadImage("paper.png")
}

function setup() {
	createCanvas(1500, 700);
  db=createSprite(625,510);
  db.scale=0.6
  db.addImage("db",dbimg);

  paper1=createSprite(200,200);
  paper1.addImage("paper",paperimg);
  paper1.scale=0.6

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   db1=new Db(600,600,100,15);
dB2 = new Db(550,560,15,100);
db3=new Db(700,560,15,100);
ground = new Db(750,600,width+100,10)
ball=new paper(100,100);
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper1.x=ball.body.position.x;
  paper1.y=ball.body.position.y;
  db1.display();
  dB2.display();
  db3.display();
  ground.display();
  ball.display();
  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:145,y:-145})
  }
}




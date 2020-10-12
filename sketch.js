
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var dustbin1,dustbin2,dustbin3;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(width/2,650,800,10);

	dustbin1=new Dustbin(600,635,500,20);
    dustbin2=new Dustbin(650,595,20,100);
	dustbin3=new Dustbin(550,595,20,100);
	
	paper1=new Paper(100,635,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:95});
		paper1.velocity.y(-15);
		paper1.velocity.x(5);
		isStatic:true
	}
}
//I tried different things but the ball is rolling away



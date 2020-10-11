const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Bin(1200,650);
	paperObject=new Paper(200,600,40);
	groundObject=new Ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 

  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	console.log("hi i am here")
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:400,y:-300});
  
	}
}
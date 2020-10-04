var packageSprite;
var packageBody,ground;

var baseBin, rightBin, leftBin;

var dustbinObj;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Bin(1200,650);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	console.log(ground);
 	World.add(world, ground);

	 keyPressed(); 

	Engine.run(engine);

//	baseBin = new Bin(200,200, 100, PI/2);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //baseBin.display();
  dustbinObj.display();
  rect(ground.position.x, ground.position.y, width, 20);
  ground.shapeColor = "red";

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Engine.update(engine);

	Matter.body.applyforce(paperobject.body,paperobject.body.Position,{x:85, y:85})
	World.add(world, packageBody);

	Engine.run(engine);
  }
}




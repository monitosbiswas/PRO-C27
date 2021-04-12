
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roof(800,250,500,45);
	
	bobObject1 = new BOB(660,550,70);
	bobObject2 = new BOB(730,550,70);
	bobObject3 = new BOB(800,550,70);
	bobObject4 = new BOB(870,550,70);
	bobObject5 = new BOB(940,550,70);
	
	rope1=new rope(bobObject1.body,roofObject.body,-70*2,0);
	rope2=new rope(bobObject2.body,roofObject.body,-70,0);
	rope3=new rope(bobObject3.body,roofObject.body,0,0);
	rope4=new rope(bobObject4.body,roofObject.body,70,0);
	rope5=new rope(bobObject5.body,roofObject.body,70*2,0);
	Engine.run(engine);
  
}


function draw() {
  
  background('white');
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-190,y:45});
	}
}



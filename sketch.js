
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engie, world;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paper = new Paper (100, 600, 10);

    ground = new ground (400,660,800,20);
 
	leftSide = new dustbin(550, 620, 20, 100);
	rightSide = new dustbin(610,660,100,20);
	bottom = new dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   
    Engine.update(engine);


   paper.display();

   ground.display();

   leftSide.display();
   rightSide.display();
   bottom.display();

  drawSprites();
 
}

 function keypressed  () {
   if (keyCode === UP_ARROW){
	   Matter.body.applyforce(paper.body, paper.body.position, {x:15, Y: -15})
   }
 }








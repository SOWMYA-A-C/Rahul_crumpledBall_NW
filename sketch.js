
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;



function setup() {
	createCanvas(1200, 400);



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	bottomBoxsprite=createSprite(1000,345,200,20)
	bottomBoxsprite.shapeColor = color(255)
    leftBoxsprite=createSprite(910,290,20,100)
	leftBoxsprite.shapeColor = color(255)
    rightBoxsprite=createSprite(1090,290,20,100)
	rightBoxsprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

    paper = new Paper(100,200)

    ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );
	World.add(world, ground);

	
	bottomBox = Bodies.rectangle(1000, 347, 200, 50 , {isStatic:true} );
	World.add(world, bottomBox);
	leftBox = Bodies.rectangle(910, 290, 20, 100 , {isStatic:true} );
	World.add(world, leftBox);
    rightBox = Bodies.rectangle(1090, 290, 20, 100 , {isStatic:true} );
	World.add(world, rightBox);
 
	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");


 
 Engine.run(engine);
//console.log(paper.body)
  paper.display();
  
  bottomBoxsprite.x= bottomBox.position.x 
  bottomBoxsprite.y= bottomBox.position.y 

  leftBoxsprite.x= leftBox.position.x 
  leftBoxsprite.y= leftBox.position.y

  rightBoxsprite.x= rightBox.position.x 
  rightBoxsprite.y= rightBox.position.y 

  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper,paper.position,{x:8,y:-3})
	}
}




const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Bodies;

var engine,world;

var object;

var Ground; 

var Ball;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;


  var opt={
    isStatic:true
  }

  Ground=Body.rectangle(200,390,200,20,opt);
  World.add(world,Ground);

  var ballopt={
    restitution:1.0
  }
  Ball=Body.circle(200, 100, 20,ballopt);
  World.add(world, Ball);
  console.log(Ground);


 
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(Ground.position.x,Ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(Ball.position.x, Ball.position.y, 20, 20);
  drawSprites();
}
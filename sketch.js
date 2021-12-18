// Actividad Inicial PRO C20 Fundamentos de Motores Físicos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
  
var ground, topWall, rightWall, leftWall;  
var ball 

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;


  ground =new Ground(200,390,400,20);
  topWall = new Ground(200,10,400,20);
  rightWall = new Ground(390,200,20,400);
  leftWall = new Ground(10,200,20,400);
  
  var options={
 restitution:0.85
  };

  ball=Bodies.circle(200,50,20,options)
   World.add(world,ball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(200);
  Engine.update(engine);
  ground.show();
  topWall.show();
  leftWall.show();
  rightWall.show();
  ellipse(ball.position.x,ball.position.y,20);
}

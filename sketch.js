const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var engine, world;
var box1, wheel;
var ground;
var log1,log2,lo3,log4,log5,log6;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
  world = engine.world;
  
  
  wheel=new Wheel(380,300,30);
  ground = new Boundary(600,height,1200,20)
  // log1 = new Box(810,260,200, PI);
  // log2=new Box(700,260,200,PI);
  // log3=new Box(600,260,200,PI);
  // log4=new Box(500,260,200,PI);
  // log5=new Box(550,260,200,PI);
  // log6=new Box(650,260,200,PI);

}


function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  
  wheel.display();
  ground.display();
  // log1.display();
  // log2.display();
  // log3.display();
  // log4.display();
  // log5.display();
  // log6.display();
}
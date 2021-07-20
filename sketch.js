const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var balls = [];


function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  
  
  


  right = new Base(700,250,250,150);
 left = new Base(100,250,250,150)
  ground = new Base(400,480,800,80)
  bridge = new Bridge(12, {x: 200, y: 150})
  Composite.add(bridge,right)

  jointLink = new Link (bridge, right.body)

}

function draw() {
  background("green");

  Engine.update(engine);

  bridge.show()

  fill ("brown");
  right.display();
  left.display();

  fill("lightblue")
  ground.display();

 for(var i = 0; i <= 8; i++){
   var x = random(250,450);
   b1 = new Ball(x,0,40,40);
   balls.push(b1)
   b1.display();
 }
 
  //b1.display();

  
}

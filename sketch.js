


//Crear espacio de nombre para Engine
const Engine = Matter.Engine
//Crear espacio de nombre para World
const World = Matter.World
//Crear espacio de nombre para Bodies
const Bodies = Matter.Bodies
//Crear espacio de nombre para Body
const Body = Matter.Body

var angle = 20

function setup() {
  createCanvas(400,400);
//crear engine
engine = Engine.create();


  //Agregar world a engine
  world = engine.world;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   Boton = createImg("up.png");
   Boton.position(350,100);
   Boton.size (50,50);
   Boton.mouseClicked(AplicarFuersa);

   
//crear un fondo
ground = Bodies.rectangle(200, 395, 400, 10, ground_options);
//agregarlo a world
World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball2);

  ground2 = Bodies.rectangle(300, 200, 200, 10,ground_options);
World.add(world,ground2);

piso1 = new Ground(70, 370, 50, 50)
   piso2 = new Ground(180, 370, 50, 50)
   piso3 = new Ground(270, 370, 50, 50)
   piso4 = new Ground(350, 370, 50, 50)

   
  cons = Matter.Constraint.create({

  pointA:{x: 200, y: 20},
  bodyB: ball,
  pointB:{x: 0, y: 0},
  length: 100, 
  stiffness: 0.1


  })

  World.add(world,cons)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  stroke("black");
  strokeWeight(3)
  line(cons.pointA.x,cons.pointA.y,ball.position.x,ball.position.y);
  //escribir una función rectangle para mostrar el suelo.
  rect(ground.position.x,ground.position.y,400, 10);
  rect(ground2.position.x,ground2.position.y,200, 10)
  ellipse(ball2.position.x,ball2.position.y,20)
  piso1.piso();
  piso2.piso();
  piso3.piso();
  piso4.piso();
  
}

function AplicarFuersa() {

   Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var block1,block2,block3;


function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //criado corpos do plano e bloco
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,580,1200,2,plane_options);
    World.add(world,plane);
  
    //criados múltiplos corpos de blocos 
    
    
    //estilizando os corpos aqui
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

  //criada forma para o plano e suporte
  rect(plane.position.x,plane.position.y,1200);
  

  //criadas formas para todas as partículas
  

  
}

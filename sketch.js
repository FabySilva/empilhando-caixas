const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var caixa, caixa2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    caixa = new Box(200,300,50,50);
    caixa2 = new Box(240,100,50,100);
    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    caixa.shapeColor = "red";
    Engine.update(engine);
    caixa.display();
    caixa2.display(); 
    ground.display();
   
}
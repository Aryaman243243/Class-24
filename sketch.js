const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(680,320,70,70);
    box2 = new Box(860,320,70,70);
    box3 = new Box(680,249,70,70);
    box4 = new Box(860,248,70,70);
    box5 = new Box(775,140,70,70);
    pig1 = new Pig(775,320);
    pig2 = new Pig(775,220);
    ground = new Ground(600,height,1200,20);
    log1 = new Log(773,255,250,PI/2);
    log2 = new Log(775,160,250,PI/2);
    log3 = new Log(780,90,220,-PI/7);
    log4 = new Log(750,50,220,PI/7);
    bird1 = new Bird(200,200);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}
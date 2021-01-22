const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var ground;
var ball1
var string

var box1
var box2
var box3
var box4
var box5

var box6
var box7
var box8
var box9
var box10

var box11
var box12
var box13
var box14
var box15


function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(500,790,1000,20,ground_options);
    World.add(world,ground);
     ball1 = new Ball()
     string = new Cons(ball1.body,{x:200,y:300})
     box1 = new Box(400,730)
     box2 = new Box(400,660)
     box3 = new Box(400,590)
     box4 = new Box(400,520)
     box5 = new Box(400,450)

     box6 = new Box(470,730)
     box7 = new Box(470,660)
     box8 = new Box(470,590)
     box9 = new Box(470,520)
     box10 = new Box(470,450)

     box11 = new Box(540,730)
     box12 = new Box(540,660)
     box13 = new Box(540,590)
     box14= new Box(540,520)
     box15 = new Box(540,450)
    
    //console.log(ground);
}

function draw(){
    background(200);
    Engine.update(engine);
    ball1.display()
    string.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()


    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()

    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1000,20);
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;  

var engine,world;
var ground;

function setup(){
createCanvas(3000,1000);
 engine=Engine.create();
world=engine.world;
ground=new Ground(600,550,1400,20);
box1=new Box(900,100,70,70);
box2=new Box(900,50,70,70);
box3=new Box(900,10,70,70);
box4=new Box(900,-10,70,70);
box5=new Box(900,-50,70,70);
box6=new Box(970,100,70,70);
box7=new Box(970,50,70,70);
box8=new Box(970,10,70,70);
box9=new Box(970,-10,70,70);
box10=new Box(970,-50,70,70);
ball=new Ball(200,200,50)
rope=new Rope(ball.body,{x:700,y:50});

}
function draw(){    
background("white");
Engine.update(engine);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
ball.display();
rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    
    }











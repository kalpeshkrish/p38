const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var p1,p2,p3,p4,p5,p6,p7,pin_img;
var lane_img,lane,bowl_img,bowl;

function preload(){
lane_img=loadImage("court.png");
pin_img=loadImage("pin.png");
bowl_img=loadImage("bowl.png")
}
function setup(){
createCanvas(displayWidth,displayHeight-147);
engine=Engine.create();
world=engine.world;

lane=createSprite(600,400);
lane.addImage(lane_img);
lane.scale=0.3;

p1=createSprite(570,140);
p1.addImage(pin_img);
p1.scale=0.2;

p2=createSprite(630,140);
p2.addImage(pin_img);
p2.scale=0.2;

p3=createSprite(520,145);
p3.addImage(pin_img);
p3.scale=0.2;

p4=createSprite(670,145);
p4.addImage(pin_img);
p4.scale=0.2;

p5=createSprite(560,165);
p5.addImage(pin_img);
p5.scale=0.2;

p6=createSprite(640,165);
p6.addImage(pin_img);
p6.scale=0.2;

p7=createSprite(600,180);
p7.addImage(pin_img);
p7.scale=0.2;

bowl=createSprite(600,600);
bowl.addImage(bowl_img);
bowl.scale=0.2
}
function draw(){
    background("orange");
    drawSprites();
    
}
function mouseDragged(){
    
        Matter.Body.setPosition(bowl_img, {x: mouseX , y: mouseY});
    
}
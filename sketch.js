const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
// var box1, box2;
var ground1;
// var pig1;
// var log1;
var bird;

var hwBox1, hwBox2, hwBox3, hwBox4, hwBox5;
var hwPig1, hwPig2;
var hwLog1, hwLog2, hwLog3, hwLog4;

function setup() {
  createCanvas(1200,800);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  // box1 = new Box(200,300,50,50);
  // box2 = new Box(240,100,50,100);

  ground1 = new Ground(600,600,1200,10);
  hwBox1 = new Box(400,599,60,60);
  hwBox2 = new Box(600,599,60,60);
  hwBox3 = new Box(400,489,60,60);
  hwBox4 = new Box(600,489,60,60);
  hwBox5 = new Box(500,479,60,60);
  hwPig1 = new Pig(500,599);
  hwPig2 = new Pig(500,489);
  hwLog1 = new Log(500, 590, 300, PI/2);
  hwLog2 = new Log(500,480,300, PI/2)
  hwLog3 = new Log(550,475, 130, 160);
  hwLog4 = new Log(450,475, 130, 60)

  // pig1 = new Pig(230,150);

  // log1 = new Log(220,150, 100, PI/2);

  bird = new Bird();
  
}

function draw() {
  background(0);  
  
  Engine.update(myEngine);

  ground1.groundShow();

  hwBox1.boxDisplay();
  hwBox2.boxDisplay();
  hwBox3.boxDisplay();
  hwBox4.boxDisplay();
  hwBox5.boxDisplay();

  // box1.boxDisplay();
  // box2.boxDisplay();

  hwPig1.pigShow();
  hwPig2.pigShow();
  // pig1.pigShow();

  // log1.logShow();
  hwLog1.logShow();
  hwLog2.logShow();
  hwLog3.logShow();
  hwLog4.logShow();

  bird.birdShow();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;  
var block13, block14, block15;
var block16;
var block17, block18, block19, block20, block21, block22;
var block23, block24, block25;  

var ground, polygon, ground2, sling1, Mground, bg, bgImage;

var score = 0;

function preload(){
  Time();
}

function setup() {
  
  createCanvas(1300,700);
  engine = Engine.create();
  world = engine.world;
  
  polygon = new Polygon(75,225,50);
  sling1 = new Slingshot(polygon.body,{x:75, y:225});

  // 1st pyramid, Level- 1
   block1 = new Block(325,450,35,35);  
   block2 = new Block(360,450,35,35);
   block3 = new Block(395,450,35,35);  
   block4 = new Block(430,450,35,35);  
   block5 = new Block(465,450,35,35);  
   block6 = new Block(500,450,35,35);  
   block7 = new Block(535,450,35,35); 
   

   // 1st pyramid, Level- 2 
   block8 = new Block(360,415,35,35);
   block9 = new Block(395,415,35,35);
  block10 = new Block(430,415,35,35);
  block11 = new Block(465,415,35,35);
  block12 = new Block(500,415,35,35);
  
  // 1st pyramid, Level- 3
  block13 = new Block(395,380,35,35);
  block14 = new Block(430,380,35,35);
  block15 = new Block(465,380,35,35);
  
  // 1st pyramid, Level- 4
  block16 = new Block(430,345,35,35)
  
  // 2nd pyramid ground
  ground2 = new Ground(1000,300,228,14);
  Mground = new Ground(650,690,1300,20);
  ground = new Ground(430,475,298,14);
  
  // 2nd pyramid, Level- 1
  block17 = new Block(930,275,35,35);
  block18 = new Block(965,275,35,35);
  block19 = new Block(1000,275,35,35);
  block20 = new Block(1035,275,35,35);
  block21 = new Block(1070,275,35,35);

  // 2nd pyramid, Level- 2
  block22 = new Block(965,240,35,35);
  block23 = new Block(1000,240 ,35,35);
  block24 = new Block(1035,240,35,35);

  // 2nd pyramid, Level- 3
  block25 = new Block(1000,205,35,35);

  Engine.run(engine);
}

function draw() {
  
  if(bgImage){
    background(bgImage);
  }

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  

  Engine.update(engine);
  
  sling1.display();

   fill('red');
   ground.display();
  ground2.display();
  Mground.display();

   // 1st pyramid, Level- 2
  fill('cyan');
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  // 1st pyramid, Level- 2
   fill('pink')
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //1st pyramid, Level- 3 
  fill('green');
  block13.display();
  block14.display();
  block15.display();

  //1st pyramid, Level- 4
  fill(211);
  block16.display();

  // 2nd pyramid, Level- 1
  fill('pink')
  block17.display(); 
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  // 2nd pyramid, Level- 2
  fill('green');
  block22.display();
  block23.display();
  block24.display();

  // 2nd pyramid, Level- 3
  fill(211)
  block25.display(); 

  fill('yellow')
  polygon.display();
  
  textSize(25);
  fill('white');
  text('Score: ' + score,900,50);

  textSize(25);
  fill('black');
  text('Press space to get a seccond chance',100,50);

  Engine.update(engine);
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}
  
	function mouseReleased(){
	  sling1.fly()
  }

  function keyPressed(){
    
    if(keyCode===32){
      Matter.Body.setPosition(polygon.body,{x:150,y:150})
      sling1.attach(polygon.body);
    }
  }

async function Time(){

  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var responseJson = await response.json();

  var dayTime = responseJson.datetime;
  var hour = dayTime.slice(11,13);

  if(hour >= 06 && hour <= 18){

    bg = 'sprites/bg.jpg';        
  }

 else{
    
    bg = 'sprites/bg2.jpg';
  }

  bgImage = loadImage(bg);

  }
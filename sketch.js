const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
//var score = 0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k<=width; k = k+50){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    var xAxis = k, yAxis = height-divisionHeight/2;
    console.log(xAxis, yAxis)
  }
 for(var j = 25; j<=480; j = j+50){
    plinkos.push(new Plinko(j,75))
 }
 for(var j = 50; j<=480-10; j = j+50){
  plinkos.push(new Plinko(j,175))
 }
 for(var j = 25; j<=480; j = j+50){
  plinkos.push(new Plinko(j,275))
 }
 for(var j = 50; j<=480-10; j = j+50){
  plinkos.push(new Plinko(j,375))
 }
}

function draw() {
  background("black");  
  textSize(20)
  Engine.update(engine)
  ground.display();
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  // if(frameCount%60=== 0 ){
  //   particles.push(new Particle(random(10,470),10,10))
  //   score++
  // }
  for(var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  //console.log(divisions.position.x)
  //scores part 
  score();
  drawSprites();
}

function score(){
  if (plinkos.position.x < 50 && plinko.position.x > 0 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
  }
  if (plinkos.position.x < 100 && plinko.position.x > 50 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
   }
  if (plinkos.position.x < 150 && plinko.position.x > 100 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
  }
  if (plinkos.position.x < 200 && plinko.position.x > 150 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
  }
  if (plinkos.position.x < 250 && plinko.position.x > 200 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
  }
  if (plinkos.position.x < 300 && plinko.position.x > 250 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
  }
  if (plinkos.position.x < 350 && plinko.position.x > 300 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
  }
  if (plinkos.position.x < 400 && plinko.position.x > 350 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
  }
  if (plinkos.position.x < 450 && plinko.position.x > 400 && plinko.position.y === 650){
    var score = score + 1;
    console.log(score);
  }
}
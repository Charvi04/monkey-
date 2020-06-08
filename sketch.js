//Global Variables
var monkeyImage, monkey;
var bananaImage, banana, bananaGroup;
var back, backImage;
var jungle, jungleImage;
var score;
var invisible;



function preload(){
bananaImage = loadImage ("Banana.png");
jungleImage = loadImage ("jungle.jpg");
obstacleImage = loadImage ("ground.jpg");
monkeyImage = loadImage ("Monkey_01.png");
  
}


function setup() {
createCanvas(600,500);
  
jungle = createSprite (200,200,600,500);
jungle.addImage (jungleImage);
jungle.scale = 0.8;
  
monkey = createSprite (100,250,600,500);
monkey.addImage (monkeyImage);
monkey.scale = 0.2;


  
invisible = createSprite (200,350,5000,20);
invisible.scale = 0.1;
invisible.visible = false;
  
bananaGroup = createGroup;
  
}


function draw(){
 background(255);

  if(keyDown("space")){
  monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY +1;
  monkey.collide (invisible);
  
  
  
 banana1 ();
  
drawSprites ();
}

function banana1 (){
if (frameCount % 500 === 0){
banana = createSprite (600,100,600,500);
banana.addImage (bananaImage);

banana.scale = 0.1;
banana.velocityX = -1;

  

}
}
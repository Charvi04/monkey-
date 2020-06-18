    //Global Variables
    var PLAY = 1;
    var END = 0;
    var gameState = PLAY;
    var wall;
    var  monkey;
    var player_running;
    var bananaImage, banana, bananaGroup;
    var back, backImage;
    var jungle, jungleImage;
    var score = 0;
    var invisible;
    var stone, stoneImage;
    var gameOver, restart;
    var player_collided;
    
    function preload(){
      
    bananaImage = loadImage ("Banana.png");
    jungleImage = loadImage ("jungle.jpg");
    stoneImage = loadImage ("stone.png");
    player_running = loadAnimation("Monkey_01.png" ,        "Monkey_02.png", "Monkey_03.png" , "Monkey_04.png" ,  "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" ,    "Monkey_08.png" , "Monkey_09.png" , "Monkey_10.png" );
      
    gameOverImg = loadImage ("gameOver.png");
    restartImg = loadImage ("gameOver.png");
    player_collided = loadAnimation ("Monkey_01.png");
    }


    function setup() {
    createCanvas(600,440);
    
    wall = createSprite (0,100,100,400);
    wall.addImage(jungleImage);
    wall.velocityX = -1;
      
    jungle = createSprite (0,100);
    jungle.addImage (jungleImage);
    jungle.scale = 0.9;
    jungle.velocityX = -1;
   
    monkey = createSprite (100,350,600,500);
    monkey.addAnimation ("running",player_running);
    monkey.addAnimation("collided", player_collided);
    monkey.scale = 0.1;
   
    gameOver = createSprite(300,290);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 1.0;
    gameOver.visible = false;
  
      
    invisible = createSprite (200,350,5000,20);
    invisible.scale = 0.1;
    invisible.visible = false;

    bananaGroup = new Group ();
    stoneGroup = new Group ();
  
    score = 0;
    }


    function draw(){
    background(255);

    if (gameState === PLAY)
    {
    if(keyDown("space")){
    monkey.velocityY = -10;
    }
    
    if(stoneGroup.isTouching(monkey)){
      monkey.scale = 0.1;
      score = score -1;
      stoneGroup.destroyEach();
        
    }
      
      if(stoneGroup.isTouching(monkey)&&monkey.scale === 0.1){
      gameState =END;
     jungle.velocityX = 0;
    
    }
      
     banana1 ();
    stone1 ();
     
      if (monkey.isTouching(bananaGroup)){
    
      bananaGroup.destroyEach();
      score = score + 1;  
         
    
      
      
    switch(score) {
      case 10: monkey.scale = 0.12;
              break;
      case 20: monkey.scale = 0.14;
              break;
      case 30: monkey.scale = 0.16;
              break;
      case 40: monkey.scale = 0.18;
              break;
     case 50: monkey.scale = 0.21;
              break;
      default: break;
    }
      }
      
      
    monkey.velocityY = monkey.velocityY +1;
    monkey.collide (invisible);

    if (wall.x < 0){
    wall.x = wall.width/2;
    }
    }
      
    else if (gameState === END)
    {
    gameOver.visible = true;
    monkey.changeAnimation("collided", player_collided); 
    
      
      wall.velocityX =0;
     
    }
      
   if (jungle.x < 300){
    jungle.x = jungle.width/2;
    }
      
    drawSprites ();
    
    stroke("white");
    textSize (40);
    textFont ("Times New Roman");
    fill ("white")  
    text ("Score : " + score , 400,50);

    }

    function banana1 (){
    if (frameCount % 200 === 0){
    banana = createSprite (600,100,600,500);
    banana.addImage (bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 1000;
      bananaGroup.add(banana);
    
    }
    }

    function stone1 (){
    if (frameCount % 400 === 0){
    stone = createSprite (600,350,600,500);
    stone.addImage (stoneImage);
    stone.scale = 0.1;
    stone.velocityX = -2;
    stone.lifetime = 1000;
    stoneGroup.add(stone);
      
   
    }
    }
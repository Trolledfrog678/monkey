 
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
  
}



function setup() {
  
   //create Monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
   
  ground = createSprite(400,350,900,10);
  
  
  
  
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();

  
}


function draw() {
background(990,880)
  
  
stroke("white");
textSize(20);
fill("white");
text("Score: "+score,500,500);

 
  if(keyDown("space")&& monkey.y >=100) {
     monkey.velocityY=-12; 
    
  }
  monkey.velocityY=monkey.velocityY+5  
  monkey.collide(ground);
     
survivalTime=0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  
  
  
  

  
  drawSprites();
     }

     function spawnobstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);

    } 
 
     }

     x = x + 200;
      
        y = displayHeight - allPlayers[plr].distance;
      monkey[index-1].x = x;
    monkey[index-1].y = y;

        if (index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        
    

  






 

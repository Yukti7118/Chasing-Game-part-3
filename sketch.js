var background,backgroundImg;
var theif,police,policevan,obstacles,energydrink,life,house,house2,carblast,RoadImg,road;
var GameOver;
Distance=500;

function preload()     
{
RoadImg=loadImage("Extra/Road.png");
theifrunningImg=loadAnimation("Theifrunning/Theifrunning1.png","Theifrunning/Theifrunning2.png","Theifrunning/Thiefrunning3.png","Theifrunning/Theifrunning4.png");
theiffallingImg=loadAnimation("Theiffalling/Theiffalling1.png","Theiffalling/Theiffalling2.png","Theiffalling/Theiffalling3.png","Theiffalling/Theiffalling4.png","Theiffalling/TheifFalling5.png");
mainHouseImg=loadImage("Extra/StartingHouse.png");
Bicycle1Img=loadAnimation("BicycleAnimation/Bicycle1.png","BicycleAnimation/Bicycle2.png");
Bicycle2Img=loadAnimation("BicycleAnimation/Bicycle3.png","BicycleAnimation/Bicycle4.png");
carblastImg=loadImage("Extra/Carblast.png");
EnergyImg=loadImage("Extra/Energydrink.png");
LifeImg=loadImage("Extra/Life.png");
PoliceImg=loadImage("Extra/Policeman.png");
PolicevanImg=loadImage("Extra/Policevan.png");
obstacle1 = loadImage("Obstacles/OCar1.png");
obstacle2 = loadImage("Obstacles/Ocar2.png");
obstacle3 = loadImage("Obstacles/OCar3.png"); 
obstacle4 = loadImage("Obstacles/OCar4.png");
obstacle5 = loadImage("Obstacles/OCar5.png");
obstacle7 = loadImage("Obstacles/OCar7.png");
GameOverImg=loadImage("Extra/Gameover.png");
}

function setup()
{
    createCanvas(800,800);


road = createSprite(200,400);
road.addImage("road",RoadImg);
road.velocityX=-5;

theif=createSprite(100,400,20,20);
theif.addAnimation("theifrunning",theifrunningImg);
//theif.velocityY=5;
theif.life=185;

console.log(theif.velocityY)

mainHouse=createSprite(100,400,80,80);
mainHouse.addImage("mainHouse",mainHouseImg);
//mainHouse.scale=0.5
//mainHouse.velocityX=5;

/*gameOver = createSprite(300,100);
gameOver.addImage("End",GameOverImg);
gameOver.scale = 0.5;*/

obstaclesGroup = new Group();
}


function draw()
{
//background("black")


if(road.x<0)
{
road.x=200;
}
 theif.y=mouseY

/*if(KeyDown("UP_ARROW"))
{
theif.y-=5;
}

if(KeyDown("DOWN_ARROW"))
{
theif.y+=5;
}*/

/*if(theif.isTouching(obstaclesGroup))
{
road.velocityX=0;
theif.addAnimation(carblastImg)
}*/

if(theif.life<=0){
swal(
{
        title: `Game Over`,
        text: "Oops you lost the race....!!!",      
}
)
obstaclesGroup.destroy()
}


drawSprites()
showLife();
spawnObstacles()
}

function showLife() 
{
    push()
    image(LifeImg, 270, 50, 20, 20)
    fill("white")
    rect(300,50, 185, 20)
    fill("red")
    rect(300,50, theif.life, 20)
    noStroke()
    pop()
}

function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(100,random(100,600),10,40);
      obstacle.velocityX = 6
      
     // obstacle.velocityX = -(6 + score/100);
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(obstacle1);
                 break;
         case 2: obstacle.addImage(obstacle2);
                 break;
         case 3: obstacle.addImage(obstacle3);
                 break;
         case 4: obstacle.addImage(obstacle4);
                 break;
         case 5: obstacle.addImage(obstacle5);
                 break;
         case 6: obstacle.addImage(obstacle7);
                 break;
         case 7:obstacle.addImage(PolicevanImg);
                 break;
         default: break; 
       }
           
       obstacle.scale = 0.5;
       obstacle.lifetime = 300;
    
       obstaclesGroup.add(obstacle);
    }
   }
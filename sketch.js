var mObject , fObject;
var object1,object2;
function setup() 
{
  createCanvas(800,400);
 mObject = createSprite(400, 200, 80, 50);
 mObject.shapeColor = "green";
 mObject.velocityX = -5;
 fObject = createSprite(300, 200, 50, 80);
 fObject.shapeColor = "green";
 fObject.velocityX = 5;
 object1 = createSprite(200,400,80,50);
 object2 = createSprite(100,300,80,50);
 
}

function draw() {
  background(255,255,255);  
  //mObject.x = World.mouseX;
 // mObject.y = World.mouseY;
 console.log(fObject.width/2+mObject.width/2); 
 console.log(mObject.x-fObject.x) 
 console.log(fObject.x);
 console.log(mObject.x);
 /*if(isTouching(mObject,object1))
 {

 
 mObject.shapeColor="red";
        object1.shapeColor="red"; 
      } else
       { 
         mObject.shapeColor="green";
          //object1.shapeColor="green"; }
       }*/
  bounceOff(mObject,fObject);
  drawSprites();
}
function bounceOff(object1,object2)
{
  if(object1.x-object2.x < object2.width/2+object1.width/2
    && object2.x-object1.x < object2.width/2+object1.width/2)
    {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if( object1.y-object2.y < object2.width/2+object1.width/2 
    && object2.y-object1.y < object2.width/2+object1.width/2)
    {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);

    }
    
  }


//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  happyDog = loadImage("images/happydog.png")
  dog1 = loadImage("images/Dog.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(225,275,70,70)
  dog.addImage(dog1);
  dog.scale = 0.2
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  stroke("black")
  textSize(20)
  text("foodRemaining:"+foodS,170,200)
  }
  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){
    if(x<=0){
      x = 0;
    }
    else{
      x=x-1
    }
    database.ref("/").update({
      Food:x
    })
  }
  //add styles here






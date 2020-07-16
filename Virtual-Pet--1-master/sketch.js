//Create variables here
var dog,happyDog,database,foodS,foodStock

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dogSprite = createSprite(250,100,10,10)
 
  
  
  dogSprite.addImage(dogImage,dog)
  database = firebase.database();
  foodStock = database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87) 
fill("red")
textSize(20)
text("Note:Press Up Arrow To Feed The Dog",50,200)

//feed 
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImage2)
}
  drawSprites();
  console.log(foodStock)
  //add styles here

}

function readStock(data){
  foodS = data.val()

}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

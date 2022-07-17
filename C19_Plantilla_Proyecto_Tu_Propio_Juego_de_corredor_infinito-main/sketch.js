var spaceImg, coheteImg;
var cohete,ovni,ovnisGroup,space;


function preload(){
spaceImg = loadImage("space.webp")
coheteImg = loadImage("cohete.png");
ovniImg = loadImage("ovni.png");
}

function setup() {
createCanvas(600,600);

cohete = createSprite(300,540);
cohete.addImage("cohete.png",coheteImg);
cohete.scale = 0.3;
cohete.rotation = -50;
console.log(cohete.rotation);

ovnisGroup = new Group();

space = createSprite(300,300);
space.addImage("space.webp",spaceImg);
space.velocity = 1;

}

function draw() {
 background();
 drawSprites();
}

function spawnOvnis(){
  if(frameCount%60 === 0){
    ovni = createSprite(200,-50);
    ovni.addImage(ovniImg); 
    ovni.x = Math.round(random(120,400));
    ovni.velocityY = 1;
    ovni.lifetime = 800;
    ovnisGroup.add(ovni);
  }  
}



let shark;
let highScore = 0;
let fish;
let numfish;
let fishVisible = true;

function preload() {
    shark = loadImage('assets/shark.png');
    fish = loadImage('assets/fish.png');
}

function setup() {
    let canvas = new Canvas(400,400);



	shark = new Sprite();
    shark.width = 20
    shark.height = 20 
    

    cursor(createImage(20, 50).loadPixels());

    fish = new Sprite();
    fish.width = 10;
    fish.height = 10;

    numfish = int(random(5,21));


    textFont("Courier", 24);
}

function draw() {
    background("blue");

    let sharkX = mouseX - shark.width / 2;
    let sharkY = mouseY - shark.height / 2; 


    image(shark, sharkX, sharkY, shark.width, shark.height); 
    

    for (let i = 0; i < numFish; i++) {

        let x = random(width - fish.width); 
        let y = random(height - fish.height);
        
     
        image(fish, x, y);
      }

    }

    function mousePressed() {
       
        if (
          mouseX > fishX && 
          mouseX < fishX + fish.width && 
          mouseY > fishY && 
          mouseY < fishY + fish.height
        ) {
          fishVisible = false; 
        }
      }

  //  text("HIGH:  " + (highScore-1), 40, 86);


let shark;
let sharksprite;
let fish;

function preload(){
  shark = loadImage('assets/shark.png');
}

function setup() {
	new Canvas(500, 500);

	fish = new Group();
	fish.diameter = 10;
	fish.x = () => random(0, canvas.w);
	fish.y = () => random(0, canvas.h);
	fish.amount = 80;

	sharksprite = new Sprite();
  sharksprite.image = shark;
  sharksprite.diameter = 30;

	sharksprite.overlaps(fish, collect);
}

function collect(sharksprite, fish) {
	fish.remove();
}

function draw() {

  sharksprite.x = mouseX;
  sharksprite.y = mouseY;

  sharksprite.visible = true;

	clear();
	sharksprite.moveTowards(mouse);

  background("blue");


}
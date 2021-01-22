class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.intensity=255;
  }
display(){
  if(this.body.speed<=3){
    super.display();
  }
  else{
    World.remove(world,this.body);
    push();
    this.intensity=this.intensity-2;
    tint(255,this.intensity);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
}
}
class Ground{

constructor(x, y, w, h){

var option = {

isStatic: true

}
this.ground = Bodies.rectangle(x, y, w, h, option);
this.w = w;
this.h = h;

World.add(world,this.ground);
}
  piso(){

var pos = this.ground.position;
Matter.Body.rotate(ground,angle);
push();
rectMode(CENTER);
fill("red");
translate(pos.x, pos.y);
rotate(angle);
rect(0, 0, this.w, this.h);
pop();
angle += 0.1
  }  
}
class Ball{
constructor(x,y){
 var options = {
  isStatic : false }



 this.body = Bodies.circle(x,y,40)
    World.add(world, this.body)
}

display(){
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,40,40);
}

}
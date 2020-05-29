class Paper {
  constructor(x, y,radius) {
    var options = {
        setStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x, y,radius/2,options);
    this.radius = radius;
        
  }
  display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER)
    strokeWeight(3);
    stroke("pink");
    fill("pink");
    ellipse(0,0,this.radius,this.radius);
    pop();
  }
};
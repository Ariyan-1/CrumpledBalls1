class Dustbin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
    this.x = x;
    this.y = y;
    this.dustbinWidth = 200;
    this.dustbinHeight = 100;
    this.wallThickness = 20;
    this.angle = 0;
    this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, { isStatic: true });
    this.leftWallBody = Bodies.rectangle(this.x - this.dustbinWidth / 2, this.y - this.dustbinHeight / 2, this.wallThickness, this.dustbinHeight, { isStatic: true });
    Matter.Body.setAngle(this.leftWallBody, this.angle);
    this.rightWallBody = Bodies.rectangle(this.x + this.dustbinWidth / 2, this.y - this.dustbinHeight / 2, this.wallThickness, this.dustbinHeight, { isStatic: true });
    Matter.Body.setAngle(this.rightWallBody, -1 * this.angle);
    World.add(world, this.bottomBody);
    World.add(world, this.leftWallBody);
    World.add(world, this.rightWallBody);
  }

  display() {
    //left wall
    var posl = this.leftWallBody.position;
    //var angle = this.body.angle;
    push();
    translate(posl.x, posl.y);
    //rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue");
    fill("green");
    rotate(this.angle)
    rect(0, 0, this.wallThickness, this.dustbinHeight);
    pop();

    //right wall
    var posr = this.rightWallBody.position;
    //var angle = this.body.angle;
    push();
    translate(posr.x, posr.y);
    //rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue");
    fill("green");
    rotate(-1*this.angle)
    rect(0, 0, this.wallThickness, this.dustbinHeight);
    pop();
    
    //bottom body
    var posb = this.bottomBody.position;
    //var angle = this.body.angle;
    push();
    translate(posb.x, posb.y);
    //rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue");
    fill("green");
    //rotate(this.angle)
    rect(0, 0, this.dustbinWidth, this.wallThickness);
    pop();
  }
}

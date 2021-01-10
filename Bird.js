class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trail = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if (this.body.velocity.x > 10 && this.body.position.x > 200 && gameState == launched) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

    for (var n = 0  ;  n < this.trajectory.length  ;  n++) {
      image(this.trail, this.trajectory[n][0], this.trajectory[n][1])
    }
  }
}

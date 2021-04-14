class Bird{
    constructor(){
        this.birdBody = Bodies.rectangle(50, 50, 20, 20);
        this.w = 20;
        this.h = 20;
        World.add(myWorld, this.birdBody);
    }

    birdShow() {
        var pos = this.birdBody.position;
        push ()
        var angle = this.birdBody.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        pos.x = mouseX;
        pos.y = mouseY;
        fill("red");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
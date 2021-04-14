class Pig {
    constructor(x,y){

        var options = {
            restitution : 0.5
        }
        this.pigBody = Bodies.rectangle(x,y,50,50, options);
        this.w = 50;
        this.h = 50;
        World.add(myWorld, this.pigBody);
    }

    pigShow() {
        var pos = this.pigBody.position;
        push();
        var angle = this.pigBody.angle;
        translate (pos.x, pos.y);
        rotate(angle);
        fill("green");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
        
    }
}
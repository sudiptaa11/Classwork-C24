class Log{
    constructor(x,y,height,angle) {
        var options = {
            restitution : 0.5
        }
        this.logBody = Bodies.rectangle(x,y,10,height,options);
        this.w = 10;
        this.h = height;
        Matter.Body.setAngle(this.logBody, angle);
        World.add(myWorld, this.logBody);
    }
    logShow() {
        var pos = this.logBody.position;
        push();
        var angle = this.logBody.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("brown");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
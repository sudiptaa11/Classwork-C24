class Box{
    constructor(x,y,width,height) {
        
        var options = {
            isStatic : false,
            restitution : 0.8
        }
        this.boxBody = Bodies.rectangle(x,y,width,height, options);
        this.w = width;
        this.h = height;
        World.add(myWorld, this.boxBody);
    }

    boxDisplay() {
        var pos = this.boxBody.position;
        var angle = this.boxBody.angle;

        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(6);
        stroke("red");
        rect(0, 0 ,this.w,this.h);
        pop();
    }
}
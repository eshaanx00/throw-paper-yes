class paper {
    constructor(x,y){
        var option = {
            isStatic:false,
            density:1.2,
            friction:0.5,
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,30,option);
        this.r=30
        World.add(world,this.body)
    }
display(){
    var pos = this.body.position;
   push();
   translate(pos.x,pos.y)
   //rotate(this.body.angle)
    fill("white")
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
}
}
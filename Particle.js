class Particle {
    constructor(x,y,r){
     var options = {
         restitution: 0.4
     }
     this.r = r
     this.body = Bodies.circle(x,y,this.r,options)
     this.color = color (random(16,143),random(16,228),random(143,228));
     //console.log(this.color);
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop();
    }
}
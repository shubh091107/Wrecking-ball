class Ball{
    constructor(){
        var op ={
            restitution: 1,
            friction: 0.5,
            density: 3,
            frictionAir:0.009
        }
        this.body = Bodies.circle(200,500,60,op)
        this.radius = 60
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)

    }
}
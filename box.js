class Box{
    constructor(x,y){
    var op ={
        restitution:0.3,
        density:0.8,
        friction:0
    }
    this.body = Bodies.rectangle(x,y,70,70,op)
    this.width = 70
    this.height =70
    World.add(world,this.body)
    }
    display(){
        push()
        var pos = this.body.position
        rotate(this.body.angle)
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(10)
        stroke("brown")
        fill(200)
        rect(0,0,this.width,this.height)
        pop()
    }
}
class Cons{
    constructor(bodyA,pointB){
        var op = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.5,
            length:400
        }
        this.body = Constraint.create(op)
        this.pointB = pointB
        World.add(world,this.body)

    }
    display(){
        var posa =this.body.bodyA.position
        var posb = this.pointB
       push()
       //    strokeWeight(20)

     line(posb.x,posb.y,posa.x,posa.y)
     pop()
    }
}
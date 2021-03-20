class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
            
        }
        this.image1 = loadImage("sprites/sling1.png")
        this.image2 = loadImage("sprites/sling2.png")
        this.image3 = loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image2,175,30)
        image(this.image1,200,30)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#301608")
            strokeWeight(4);
           
            line(pointA.x - 15, pointA.y, pointB.x - 7, pointB.y);
            line(pointA.x +15, pointA.y, pointB.x + 25, pointB.y);
            image(this.image3,pointA.x -17,pointA.y)
            
           
        }
    }
    
}
class Slingshot{

    constructor(bodyA, pointB){

        var options= {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 3
        }
        
        this.pointB = pointB;
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){

        if(this.sling.bodyA){
            //line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);


            if(this.sling.bodyA.position.x < 250){
                line(this.sling.bodyA.position.x - 25, this.sling.bodyA.position.y, this.pointB.x-15, this.pointB.y+5);
            }

            else{                
                line(this.sling.bodyA.position.x + 25, this.sling.bodyA.position.y, this.pointB.x-15, this.pointB.y+5);
    }
    }
    }

}
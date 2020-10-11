class Polygon{

    constructor(x,y,radius){
        
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius/2);
       
        World.add(world,this.body);
    }

    display(){

        push();
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        
        pop();
    }

}
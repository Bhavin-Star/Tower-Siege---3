class Block{

    constructor(x,y,width,height){

        var options= {
            
            restitution:0.4,
            friction: 0
            
        }
     
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.visible = 255;
          
        World.add(world,this.body);
        
    
    }

    score(){

        if(this.visible < 0 && this.visible > -502.5){
          score++;
        }
    
      }

    display(){

        
        if(this.body.speed < 5){
    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        pop();
        }
        
        else{
         
            World.remove(world,this.body);
            push();
            this.visible = this.visible - 5;
            
            pop();
          }
    
    }
}
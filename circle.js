class Wheel{
    constructor(x,y,r){
        var options=
        {
            'restitution':1.0,
            'isStatic':false,
            'friction':0,
            'density':0.9,
            'angularSpeed':10,
            //'velocity':3
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image=loadImage("wheel.png")
        
        console.log(this.body)
    }
    display()
    {
        var paperpos=this.body.position;
        
        push();
        
        fill("violet");
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r*3,this.r*3);
        pop();
    }
}

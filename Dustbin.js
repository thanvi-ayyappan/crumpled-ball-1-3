class Dustbin{
    constructor(x,y,width,height){
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.Width,this.height);
    }
}


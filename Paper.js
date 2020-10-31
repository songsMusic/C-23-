class Paper  {
    constructor(x, y,r) {
        var options = {
            isStatic:false , 
            'restitution':0.3,
            'friction': 0.5  ,
            'density':1.2 
        }
        this.body = Bodies.rectangle(this.x,this.y,this.r/2,options);
        this.x = x  ; 
        this.y = y 
        this.r = r 
        
        World.add(world, this.body);
    } 
display() {
    var paperPos = this.body.position
    push(); 
    translate(paperPos.x , paperPos.y) ; 
    rectMode(CENTER); 
    strokeWeight(3); 
    fill(255,0,225) ; 
    ellipse(0,0,this.r, this.r) ; 
    pop()
    
}
    } 
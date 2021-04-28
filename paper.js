


class paper {

    constructor(x, y, radius) {
    
    var options = {
    isStatis: false,
    "restitution": 0.3,
    "friction": 0.5,
    "density": 1.2
    
    }
    
    this.body = Bodies. cricle(x, y, radius, options);
    this.radius = radius;
    
    world: add(wrold, this.body);
    }
    
     display () {
     ellipsemode(RADIUS);
       
       
       fill("yellow");
    
    
    cricle(this.body.position.x, this.body.position.y, this.radius);
    
    
    
     }
    
    
    
    
    
    
    }
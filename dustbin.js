

class dustbin {

    constructor(x, y, width, heigth) {
    
    var options = {
    isStatis: true,
    "restitution": 0,
    "friction": 1,
    "density": 1
    
    }
    
    this.body = Bodies. rectangle(x, y, width, heigth, options);
    this.width = width;
    this.heigth = heigth
    
    world: add(wrold, this.body);
    }
    
     display () {
    
       rectmode (center);
       fill(255);
    
    
       rect(this.body.position.x, this.body.position.y, this.width, this. heigth);
    
    
    
     }
    
    
    
    
    
    
    }
class Box {
    constructor(x, y, Width, Height) {
      var options = {
          isStatic: false, 
          'restitution':0.3,
          'friction': 0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options, maxSides);
      this.radius = radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      rectMode(CENTER);
      fill(255);
      circle(0, 0, this.radius);
      pop();
      
    }
  }
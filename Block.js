class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){

      //console.log(this.body.speed);

      var pos= this.body.position;
     push()
      rectMode(CENTER);
     
      rect(pos.x,pos.y,this.width, this.height);
      if (this.body.speed<2){
      }
  
      else {
        
        World.remove(world,this.body);
        
        this.Visiblity-=5;
        tint(255,this.Visiblity)
        image(pos.x,pos.y,50,50)
        imageMode(CENTER);
        pop();
      }
    }
}
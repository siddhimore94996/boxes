class Box{
   constructer(){
    var options={
        restitution:1.0
    }
    this.body=Bodies.rectangle(200,100,50,50,options);
World.add(world,this.body)
      
   } 
   display(){
    rectMode(CENTER) 
  fill(255);
    rect(this.body.position.x,this.body.position.y,50,50) 
      
   }
}

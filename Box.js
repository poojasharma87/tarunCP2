class Box {
    constructor() {
      var options = {
         isStatic:true
      }
     this.body1 =Bodies.rectangle(600,720,20,100,options);
     this.body2 =Bodies.rectangle(700,720,20,100,options);
     this.body3 =Bodies.rectangle(645,730,0,20,options);
      this.Image=loadImage("dustbin.png");
      
      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
      //World.add(world,this.Image);

    }
    display(){
      var pos =this.body1.position;
      var angle =this.body1.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);  
      
    //fill("green")
      
     // rect(0,0,20,100);
      pop();
      var pos =this.body2.position;
      var angle =this.body2.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);  
     // rectMode(CENTER);
      
   // fill("green")
      
   // rect(0,0,20,100);
      pop();
      var pos =this.body3.position;
      var angle =this.body3.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);  
      //rectMode(CENTER);
      
    //fill("green")
      
     // rect(0,0, 100,20);
      imageMode(CENTER);
      image(this.Image,0,0,100,100);
      pop();
    }
  };
  
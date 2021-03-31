class Rope{
constructor(bodyA,pointB){
    var options={
bodyA:bodyA,
pointB:pointB,
stiffness:1.0,
length:200
    }
    this.pointB=pointB
this.rope=Matter.Constraint.create(options);
World.add(world,this.rope);
}
display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.pointB;
    push(); 
    strokeWeight(3);
    stroke("red");
line(pointB.x,pointB.y,pointA.x,pointA.y);
pop();
}
}

function Firefly(x,y,r,c,vx,vy){
    this.x=x;
    this.y=y;
    this.r=r;
    this.c=c;
    this.vx=vx;
    this.vy=vy;
}

Firefly.prototype.update = function(dt){
    this.x += this.vx*dt;
    this.y += this.vy*dt;
}

f1 = new Firefly(100,100,25,"black",10,-5);
f2 = new Firefly(50,70,10,"red",25,15);
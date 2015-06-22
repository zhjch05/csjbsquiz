function Firefly(x,y,r,c,vx,vy){
    this.x=x;
    this.y=y;
    this.r=r;
    this.c=c;
    this.vx=vx;
    this.vy=vy;
}

Firefly.prototype.update(dt){
    this.x += this.vx*dt;
    this.y += this.vy*dt;
}
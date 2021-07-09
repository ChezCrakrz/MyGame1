class Monsters{
    constructor(x){
        this.x = x;
        this.body = createSprite(this.x, height-40, 100, 100)
    }
    display(){
        drawSprites();
    }
}
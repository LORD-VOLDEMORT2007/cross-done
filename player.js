class Player {

constructor(x,y){
    this.x = x
    this.y = y
    this.spt = createSprite(this.x , this.y , 50 , 50)
    this.spt.shapeColor = "gold"

}

moveUp(){

    this.spt.y += -15

}

moveDown(){

    this.spt.y += 15

}

moveLeft(){

    this.spt.x += -15

}

moveRight(){

    this.spt.x += 15

}




}
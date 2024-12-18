class ThrowableObject extends MoveableObject {

    IMAGE_BUBBLE = './assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png';
    IMAGE_BUBBLE_POISONED = './assets/img/1.Sharkie/4.Attack/Bubble trap/BubblePoisoned.png';

    constructor(x, y) {
        super().loadImage(this.IMAGE_BUBBLE);
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.throw(this.x, this.y);
        //this.animate();
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedGravity = -5;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25)
    }
}
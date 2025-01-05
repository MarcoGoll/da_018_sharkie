class ThrowableObject extends MoveableObject {
    isPoisonedBubble = false;
    bubblePower = 100;
    bubblePowerPoison = 200;
    IMAGE_BUBBLE = './assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png';
    IMAGE_BUBBLE_POISONED = './assets/img/1.Sharkie/4.Attack/Bubble trap/BubblePoisoned.png';

    /**
    * Initializes a new instance of the object
    * The bubble can be either a normal bubble or a poisoned bubble.
    */
    constructor(x, y, isPoisonedBubble) {
        super();
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.isPoisonedBubble = isPoisonedBubble;
        if (this.isPoisonedBubble) {
            this.loadImage(this.IMAGE_BUBBLE_POISONED);
        } else {
            this.loadImage(this.IMAGE_BUBBLE);
        }
        this.throw(this.x, this.y);
    }

    /**
    * Makes the bubble move in a projectile motion.
    * @param {number} x - Initial X position of the bubble.
    * @param {number} y - Initial Y position of the bubble.
    */
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedGravity = -5;
        this.applyGravity();
        addStoppableIntervallId(setInterval(() => this.x += 10, 25));
        shootBubbleSound.play();
    }
}
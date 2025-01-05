class Coin extends MoveableObject {
    width = 40;
    height = 40;
    offset = {
        x: 0,
        y: 0,
        widht: 0,
        height: 0,
    }
    img = './assets/img/4. Marcadores/1. Coins/1.png';
    IMAGES_COIN = [
        './assets/img/4. Marcadores/1. Coins/1.png',
        './assets/img/4. Marcadores/1. Coins/2.png',
        './assets/img/4. Marcadores/1. Coins/3.png',
        './assets/img/4. Marcadores/1. Coins/4.png',
    ];

    /**
    * Initializes a new instance of the object at a specific position, preloading coin images and starting animation.
    * @param {number} x - The initial x-coordinate of the object.
    * @param {number} y - The initial y-coordinate of the object.
    */
    constructor(x, y) {
        super().loadImage(this.img);
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
    * Starts the animation for the coin by cycling through a series of images at a fixed frame rate.
    */
    animate() {
        addStoppableIntervallId(setInterval(() => this.playAnimation(this.IMAGES_COIN), 1000 / 5));
    }
}

class JellyfishPink extends Jellyfish {
    energyMax = 400;
    energy = 400;
    offset = {
        x: 30,
        y: 30,
        widht: 60,
        height: 70,
    }
    IMAGES_SWIM = [
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];
    IMAGES_DEAD = [
        './assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
    ]

    /**
    * Initializes a new instance of the object with the specified position, size, image, and speed.
    * Preloads swim and dead animations, and sets a random speed for the object. 
    * @param {number} x - The initial x-coordinate of the object.
    * @param {number} y - The initial y-coordinate of the object.
    * @param {number} width - The width of the object.
    * @param {number} height - The height of the object.
    * @param {string} img - The path to the image that represents the object.
    */
    constructor(x, y, width, height, img) {
        super(x, y, width, height).loadImage(img);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }
}
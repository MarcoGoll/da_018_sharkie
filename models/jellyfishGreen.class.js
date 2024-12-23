class JellyfishGreen extends Jellyfish {
    energyMax = 300;
    energy = 300;

    offset = {
        x: 30,
        y: 30,
        widht: 60,
        height: 70,
    }

    IMAGES_SWIM = [
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
    ];

    IMAGES_DEAD = [
        './assets/img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
    ]




    constructor(x, y, width, height, img) {
        super(x, y, width, height).loadImage(img);

        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);

        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }
}
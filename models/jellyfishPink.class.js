class JellyfishPink extends Jellyfish {
    energyMax = 200;
    energy = 200;

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



    constructor(x, y, width, height, img) {
        super(x, y, width, height).loadImage(img);

        this.loadImages(this.IMAGES_SWIM);

        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }
}
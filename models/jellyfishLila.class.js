class JellyfishLila extends Jellyfish {
    energyMax = 100;
    energy = 100;

    offset = {
        x: 30,
        y: 30,
        widht: 60,
        height: 70,
    }

    IMAGES_SWIM = [
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    IMAGES_DEAD = [
        './assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ]




    constructor(x, y, width, height, img) {
        super(x, y, width, height).loadImage(img);

        this.loadImages(this.IMAGES_SWIM);

        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }
}
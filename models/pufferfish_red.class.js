class PufferfishRed extends Pufferfish {
    energyMax = 300;
    energy = 300;

    IMAGES_SWIM = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    IMAGES_TRANSITION = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
    ]

    IMAGES_AGRESSIVESWIM = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];

    IMAGES_DEAD = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.Dead1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.Dead2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.Dead3.png',
    ];


    constructor(x, y, width, height, img) {
        super(x, y, width, height).loadImage(img);

        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_AGRESSIVESWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }
}
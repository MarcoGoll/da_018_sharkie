class PufferfishOrange extends Pufferfish {
    energyMax = 200;
    energy = 200;

    IMAGES_SWIM = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];

    IMAGES_TRANSITION = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
    ]

    IMAGES_AGRESSIVESWIM = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
    ];

    IMAGES_DEAD = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.Dead1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.Dead2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.Dead3.png',
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
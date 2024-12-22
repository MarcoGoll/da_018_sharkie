class Pufferfish extends MoveableObject {
    x;
    y;
    width;
    height;
    energy = 200;
    transitionAnimationWasPlayed = false;

    IMAGES_SWIM = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    IMAGES_TRANSITION = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ]


    IMAGES_AGRESSIVESWIM = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];

    offset = {
        x: 10,
        y: 10,
        widht: 30,
        height: 30,
    }

    constructor(x, y, width, height, img) {
        super().loadImage(img);

        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_AGRESSIVESWIM);


        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        let iTransition = 0;

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // 60fps

        setInterval(() => {

            if (this.energy < 200) { //Transition Animation
                if (iTransition < this.IMAGES_TRANSITION.length) {
                    if (this.transitionAnimationWasPlayed == false) {
                        this.currentImage = 0;
                        this.transitionAnimationWasPlayed = true;
                    }
                    this.playAnimation(this.IMAGES_TRANSITION);
                    iTransition++
                }
                else {
                    this.playAnimation(this.IMAGES_AGRESSIVESWIM);
                }
            } else {
                this.playAnimation(this.IMAGES_SWIM);
            }


        }, 1000 / 10);
    }

}
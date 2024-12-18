class Character extends MoveableObject {
    width = 220;
    height = 240;
    idleCount = 0;

    IMAGES_SWIM = [
        './assets/img/1.Sharkie/3.Swim/1.png',
        './assets/img/1.Sharkie/3.Swim/2.png',
        './assets/img/1.Sharkie/3.Swim/3.png',
        './assets/img/1.Sharkie/3.Swim/4.png',
        './assets/img/1.Sharkie/3.Swim/5.png',
        './assets/img/1.Sharkie/3.Swim/6.png',
    ];
    IMAGES_IDLE = [
        './assets/img/1.Sharkie/1.IDLE/1.png',
        './assets/img/1.Sharkie/1.IDLE/2.png',
        './assets/img/1.Sharkie/1.IDLE/3.png',
        './assets/img/1.Sharkie/1.IDLE/4.png',
        './assets/img/1.Sharkie/1.IDLE/5.png',
        './assets/img/1.Sharkie/1.IDLE/6.png',
        './assets/img/1.Sharkie/1.IDLE/7.png',
        './assets/img/1.Sharkie/1.IDLE/8.png',
        './assets/img/1.Sharkie/1.IDLE/9.png',
        './assets/img/1.Sharkie/1.IDLE/10.png',
        './assets/img/1.Sharkie/1.IDLE/11.png',
        './assets/img/1.Sharkie/1.IDLE/12.png',
        './assets/img/1.Sharkie/1.IDLE/13.png',
        './assets/img/1.Sharkie/1.IDLE/14.png',
        './assets/img/1.Sharkie/1.IDLE/15.png',
        './assets/img/1.Sharkie/1.IDLE/16.png',
        './assets/img/1.Sharkie/1.IDLE/17.png',
        './assets/img/1.Sharkie/1.IDLE/18.png',
    ];
    IMAGES_LONGIDLE = [
        './assets/img/1.Sharkie/2.Long_IDLE/I1.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I2.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I3.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I4.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I5.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I6.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I7.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I8.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I9.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I10.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I11.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I12.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I13.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I14.png',

    ];
    IMAGES_ATTACKBUBBLENORMAL = [
    ];
    IMAGES_ATTACKBUBBLEPOISON = [
    ];
    IMAGES_ATTACKFINSLAP = [
    ];
    IMAGES_DEADNORMAL = [
        './assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',

        './assets/img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];
    IMAGES_HURTNORMAL = [
        './assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];

    world;
    speed = 4;
    swimSound = new Audio('./assets/audio/splash.mp3');

    offset = {
        x: 30,
        y: 140,
        widht: 80,
        height: 210,
    }

    constructor(img) {
        super().loadImage(img);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONGIDLE);
        this.loadImages(this.IMAGES_DEADNORMAL);
        this.loadImages(this.IMAGES_HURTNORMAL);


        this.animate();
        //this.applyGravity();
    }

    animate() {

        let characterInterval = setInterval(() => {
            if (this.isDead()) { //DEADANIMATION
                this.playAnimation(this.IMAGES_DEADNORMAL);
                //clearInterval(characterInterval); TODO: so hört es nach dem ersten Image auf. Ich muss das Ende vom ersten Imagedurchlauf abfangen/abfragen
            } else
                if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURTNORMAL);
                } else if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) { //WALKANIMATION
                    this.playAnimation(this.IMAGES_SWIM);
                    this.idleCount = 0;
                } else if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.UP && !this.world.keyboard.DOWN) { //IDLEANIMATION
                    if (this.idleCount < 100) {
                        this.playAnimation(this.IMAGES_IDLE);
                        this.idleCount++;
                    } else {
                        this.playAnimation(this.IMAGES_LONGIDLE);
                    }
                }
        }, 1000 / 8);

        //MOVEMENT
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                if (!this.isStartOfLevelReached()) {
                    this.moveLeft();
                }
                this.otherDirection = true;
                this.swimSound.play();
            }
            if (this.world.keyboard.RIGHT && !this.isEndOfLevelReached()) {
                this.moveRight();
                this.otherDirection = false;
                this.swimSound.play();
                console.log(this.x);
            }
            if (this.world.keyboard.UP && this.isUnderTop()) {
                this.moveUp();
                this.swimSound.play();
            }
            if (this.world.keyboard.DOWN && this.isAboveGround()) {
                this.moveDown();
                this.swimSound.play();
                this.speedGravity = 0;
            }

            if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.UP && !this.world.keyboard.DOWN) {
                this.swimSound.pause();
            }

            this.world.camera_x = -this.x; // xAchse der World Camera, soll sich entgegengesetzt zur Character xAchse bewegen
        }, 1000 / 60)
    }
}


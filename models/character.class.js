class Character extends MoveableObject {
    width = 220;
    height = 240;
    IMAGES_SWIM = [
        './assets/img/1.Sharkie/3.Swim/1.png',
        './assets/img/1.Sharkie/3.Swim/2.png',
        './assets/img/1.Sharkie/3.Swim/3.png',
        './assets/img/1.Sharkie/3.Swim/4.png',
        './assets/img/1.Sharkie/3.Swim/5.png',
        './assets/img/1.Sharkie/3.Swim/6.png',
    ];
    world;
    speed = 4;
    swimSound = new Audio('./assets/audio/splash.mp3');


    constructor(img) {
        super().loadImage(img);
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
    }

    animate() {
        setInterval(() => {
            //WALKANIMATION
            if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 1000 / 8);

        //MOVEMENT
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                if (this.x > 0) {
                    this.x -= this.speed;
                }
                this.otherDirection = true;
                this.swimSound.play();
            }
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX - 720) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swimSound.play();
            }
            if (this.world.keyboard.UP && this.y > -110) {
                this.y -= this.speed;
                this.swimSound.play();
            }
            if (this.world.keyboard.DOWN && this.y < 295) {
                this.y += this.speed;
                this.swimSound.play();
            }

            if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.UP && !this.world.keyboard.DOWN) {
                this.swimSound.pause();
            }

            this.world.camera_x = -this.x; // xAchse der World Camera, soll sich entgegengesetzt zur Character xAchse bewegen
        }, 1000 / 60)
    }

    swim() {

    }
}


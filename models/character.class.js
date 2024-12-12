class Character extends MoveableObject {
    width = 180;
    height = 200;
    IMAGES_SWIM = [
        './assets/img/1.Sharkie/3.Swim/1.png',
        './assets/img/1.Sharkie/3.Swim/2.png',
        './assets/img/1.Sharkie/3.Swim/3.png',
        './assets/img/1.Sharkie/3.Swim/4.png',
        './assets/img/1.Sharkie/3.Swim/5.png',
        './assets/img/1.Sharkie/3.Swim/6.png',
    ];
    currentImage = 0;
    world;
    speed = 4;

    constructor(img) {
        super().loadImage(img);
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
    }

    animate() {
        setInterval(() => {
            //WALKANIMATION
            if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                let i = this.currentImage % this.IMAGES_SWIM.length; // Wirkt wie eine Endlosschleife. i = 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0 ... (jeweils der Rest von x % y )
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 8);

        //MOVEMENT
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.UP) {
                if (this.y > -90) {
                    this.y -= this.speed;
                }
            }
            if (this.world.keyboard.DOWN) {
                if (this.y < 320) {
                    this.y += this.speed;
                }
            }
            this.world.camera_x = -this.x; // xAchse der World Camera, soll sich entgegengesetzt zur Character xAchse bewegen
        }, 1000 / 60)
    }


    swim() {

    }
}
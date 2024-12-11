class Character extends MoveableObject {
    width = 180;
    height = 200;
    IMAGES_SWIM = [
        '../assets/img/1.Sharkie/3.Swim/1.png',
        '../assets/img/1.Sharkie/3.Swim/2.png',
        '../assets/img/1.Sharkie/3.Swim/3.png',
        '../assets/img/1.Sharkie/3.Swim/4.png',
        '../assets/img/1.Sharkie/3.Swim/5.png',
        '../assets/img/1.Sharkie/3.Swim/6.png',
    ];
    currentImage = 0;
    world;

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
                this.moveLeft();
            }
            if (this.world.keyboard.RIGHT) {
                this.moveRight();
            }
            if (this.world.keyboard.UP) {
                this.moveUp();
            }
            if (this.world.keyboard.DOWN) {
                this.moveDown();
            }
        }, 1000 / 60)
    }


    swim() {

    }
}
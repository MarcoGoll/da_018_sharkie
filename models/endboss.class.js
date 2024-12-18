class Endboss extends MoveableObject {
    width = 400;
    height = 400;

    IMAGES_SPAWNING = [
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    IMAGES_SWIM = [
        './assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    world;

    offset = {
        x: 30,
        y: 200,
        widht: 80,
        height: 310,
    }

    constructor() {
        super().loadImage(this.IMAGES_SPAWNING[0]);
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IMAGES_SWIM);

        this.x = 1000;
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (i < this.IMAGES_SPAWNING.length) {
                this.playAnimation(this.IMAGES_SPAWNING);
            }
            else {
                this.playAnimation(this.IMAGES_SWIM);
            }
            i++;
        }, 1000 / 10);
    }
}
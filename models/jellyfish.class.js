class Jellyfish extends MoveableObject {
    x;
    y;
    width;
    height;

    IMAGES_SWIM = [
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
    ];


    constructor(x, y, width, height, img) {
        super().loadImage(img);
        this.loadImages(this.IMAGES_SWIM);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        this.moveLeft();
        if (Math.random() > 0.5) {
            this.moveUp();
        } else { this.moveDown(); }

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 1000 / 6);
    }
}
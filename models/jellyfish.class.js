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

    offset = {
        x: 30,
        y: 30,
        widht: 60,
        height: 70,
    }
    energy = 200;



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
        setInterval(() => {
            this.moveLeft();
            if (Math.random() > 0.5) {
                this.moveUp();
            } else { this.moveDown(); }
        }, 1000 / 60); // 60fps

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 1000 / 6);
    }
}
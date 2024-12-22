class Pufferfish extends MoveableObject {
    x;
    y;
    width;
    height;
    energy = 100;

    IMAGES_SWIM = [
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    offset = {
        x: 10,
        y: 10,
        widht: 30,
        height: 50,
    }

    constructor(x, y, width, height, img) {
        super().loadImage(img);

        this.loadImages(this.IMAGES_SWIM);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // 60fps

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 1000 / 10);
    }

}
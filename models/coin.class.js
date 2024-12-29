class Coin extends MoveableObject {

    img = './assets/img/4. Marcadores/1. Coins/1.png';

    width = 40;
    height = 40;

    IMAGES_COIN = [
        './assets/img/4. Marcadores/1. Coins/1.png',
        './assets/img/4. Marcadores/1. Coins/2.png',
        './assets/img/4. Marcadores/1. Coins/3.png',
        './assets/img/4. Marcadores/1. Coins/4.png',
    ];
    offset = {
        x: 0,
        y: 0,
        widht: 0,
        height: 0,
    }

    constructor(x, y) {
        super().loadImage(this.img);
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        intervallIds.push(setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 1000 / 5));
    }
}

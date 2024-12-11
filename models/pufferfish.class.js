class Pufferfish extends MoveableObject {
    x;
    y;
    width;
    height;

    IMAGES_SWIM = [
        '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
    currentImage = 0;

    constructor(x, y, width, height, img) {
        super().loadImage(img);

        this.loadImages(this.IMAGES_SWIM);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length; // Wirkt wie eine Endlosschleife. i = 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0 ... (jeweils der Rest von x % y )
            let path = this.IMAGES_SWIM[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 10);
    }

}
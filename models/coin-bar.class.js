class CoinBar extends DrawableObject {

    IMAGES_POISONBAR = [
        './assets/img/4. Marcadores/orange/0_coin1.png',
        './assets/img/4. Marcadores/orange/20_coin2.png',
        './assets/img/4. Marcadores/orange/40_coin3.png',
        './assets/img/4. Marcadores/orange/60_coin4.png',
        './assets/img/4. Marcadores/orange/80_coin5.png',
        './assets/img/4. Marcadores/orange/100_coin6.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_POISONBAR);
        this.x = 400;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }

    setPercentage(percentage, multiplier) {
        this.percentage = percentage; // => Ermittle Zahl zwischen 0...5
        let path = this.IMAGES_POISONBAR[this.resolveImageIndex(multiplier)];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(multiplier) {
        if (this.percentage * multiplier == 100) {
            return 5;
        } else if (this.percentage * multiplier > 80) {
            return 4;
        } else if (this.percentage * multiplier > 60) {
            return 3;
        } else if (this.percentage * multiplier > 40) {
            return 2;
        } else if (this.percentage * multiplier > 20) {
            return 1;
        } else {
            return 0;
        }
    }

}
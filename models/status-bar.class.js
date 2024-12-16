class StatusBar extends DrawableObject {

    IMAGES_HEALTH = [
        '.assets/img/4. Marcadores/orange/0_  copia.png',
        'assets/img/4. Marcadores/orange/20_ copia 2.png',
        'assets/img/4. Marcadores/orange/40_  copia.png',
        'assets/img/4. Marcadores/orange/60_  copia.png',
        'assets/img/4. Marcadores/orange/80_  copia.png',
        'assets/img/4. Marcadores/orange/100_  copia.png',
    ];

    percentage = 100;

    constructor() {
        this.loadImages(this.IMAGES_HEALTH);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // => Ermittle Zahl zwischen 0...5
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

}
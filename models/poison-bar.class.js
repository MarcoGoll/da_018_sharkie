class PoisonBar extends DrawableObject {

    IMAGES_POISONBAR = [
        './assets/img/4. Marcadores/orange/0_poison1.png',
        './assets/img/4. Marcadores/orange/20_poison2.png',
        './assets/img/4. Marcadores/orange/40_poison3.png',
        './assets/img/4. Marcadores/orange/60_poison4.png',
        './assets/img/4. Marcadores/orange/80_poison5.png',
        './assets/img/4. Marcadores/orange/100_poison6.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_POISONBAR);
        this.x = 200;
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
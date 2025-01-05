class CoinBar extends DrawableObject {
    percentage = 0;

    IMAGES_COINBAR = [
        './assets/img/4. Marcadores/orange/0_coin1.png',
        './assets/img/4. Marcadores/orange/20_coin2.png',
        './assets/img/4. Marcadores/orange/40_coin3.png',
        './assets/img/4. Marcadores/orange/60_coin4.png',
        './assets/img/4. Marcadores/orange/80_coin5.png',
        './assets/img/4. Marcadores/orange/100_coin6.png',
    ];

    /**
    * Initializes a new instance of the object, preloading coin bar images and setting default dimensions and position.
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.x = 400;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }

    /**
    * Sets the percentage and updates the image path based on the multiplier and percentage.
    * @param {number} percentage - The percentage value to set (0 to 100).
    * @param {number} multiplier - A multiplier to adjust the percentage when determining the image index.
    */
    setPercentage(percentage, multiplier) {
        this.percentage = percentage;
        let path = this.IMAGES_COINBAR[this.resolveImageIndex(multiplier)];
        this.img = this.imageCache[path];
    }

    /**
    * Resolves the image index based on the calculated percentage after applying the multiplier.
    * @param {number} multiplier - A multiplier applied to the percentage to determine the appropriate image index.
    * @returns {number} The index of the image to use, ranging from 0 to 5, based on the percentage thresholds.
    */
    resolveImageIndex(multiplier) {
        if (this.percentage * multiplier == 100) {
            return 5;
        } else if (this.percentage * multiplier > 80) {
            return 5;
        } else if (this.percentage * multiplier > 60) {
            return 4;
        } else if (this.percentage * multiplier > 40) {
            return 3;
        } else if (this.percentage * multiplier > 20) {
            return 2;
        } else if (this.percentage * multiplier > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}
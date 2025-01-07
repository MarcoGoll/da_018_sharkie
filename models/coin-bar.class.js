class CoinBar extends DrawableObject {
    percentage = 0;
    IMAGES_COINBAR = [
        './assets/img/4. Marcadores/1. Coins/1.png',
    ];

    /**
    * Initializes a new instance of the object, preloading coin bar images and setting default dimensions and position.
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.x = 300;
        this.y = 20;
        this.width = 25;
        this.height = 25;
        this.setPercentage(0);
    }

    /**
    * Sets the percentage and updates the image path based on the multiplier and percentage.
    * @param {number} percentage - The percentage value to set (0 to 100).
    * @param {number} multiplier - A multiplier to adjust the percentage when determining the image index.
    */
    setPercentage(percentage, multiplier) {
        this.percentage = percentage;
        let path = this.IMAGES_COINBAR[0];
        this.img = this.imageCache[path];
    }
}
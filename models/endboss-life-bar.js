class EnbossLifeBar extends DrawableObject {
    percentage = 100;
    IMAGES_HEALTH = [
        './assets/img/4. Marcadores/green/Life/0_copia3.png',
        './assets/img/4. Marcadores/green/Life/20_copia4.png',
        './assets/img/4. Marcadores/green/Life/40_copia3.png',
        './assets/img/4. Marcadores/green/Life/60_copia3.png',
        './assets/img/4. Marcadores/green/Life/80_copia3.png',
        './assets/img/4. Marcadores/green/Life/100_copia2.png',
    ];

    /**
   * Initializes a new instance of the object, setting up the status bar
   */
    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 200;
        this.y = 400;
        this.width = 310;
        this.height = 80;
        this.setPercentage(1000);
    }

    /**
    * Sets the current health percentage and updates the displayed image.
    * @param {number} percentage - The current health percentage (0 to 100).
    */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
    * Resolves the image index based on the current health percentage.
    * @returns {number} The index of the health bar image to display.
    */
    resolveImageIndex() {
        if (this.percentage == 1000) {
            return 5;
        } else if (this.percentage > 800) {
            return 5;
        } else if (this.percentage > 600) {
            return 4;
        } else if (this.percentage > 400) {
            return 3;
        } else if (this.percentage > 200) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }

}
class StatusBar extends DrawableObject {
    percentage = 100;
    IMAGES_HEALTH = [
        './assets/img/4. Marcadores/orange/0_health1.png',
        './assets/img/4. Marcadores/orange/20_health2.png',
        './assets/img/4. Marcadores/orange/40_health3.png',
        './assets/img/4. Marcadores/orange/60_health4.png',
        './assets/img/4. Marcadores/orange/80_health5.png',
        './assets/img/4. Marcadores/orange/100_health6.png',
    ];

    /**
   * Initializes a new instance of the object, setting up the status bar
   */
    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 10;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(100);
    }

    /**
    * Sets the current health percentage and updates the displayed image.
    * @param {number} percentage - The current health percentage (0 to 100).
    */
    setPercentage(percentage) {
        this.percentage = percentage; // => Ermittle Zahl zwischen 0...5
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
    * Resolves the image index based on the current health percentage.
    * @returns {number} The index of the health bar image to display.
    */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 5;
        } else if (this.percentage > 60) {
            return 4;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }

}
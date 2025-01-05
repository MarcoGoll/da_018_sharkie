class PoisonBar extends DrawableObject {
    percentage = 0;
    IMAGES_POISONBAR = [
        './assets/img/4. Marcadores/orange/0_poison1.png',
        './assets/img/4. Marcadores/orange/20_poison2.png',
        './assets/img/4. Marcadores/orange/40_poison3.png',
        './assets/img/4. Marcadores/orange/60_poison4.png',
        './assets/img/4. Marcadores/orange/80_poison5.png',
        './assets/img/4. Marcadores/orange/100_poison6.png',
    ];

    /**
    * Initializes a new instance of the object, setting up the poison bar
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES_POISONBAR);
        this.x = 200;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }

    /**
    * Sets the current percentage of the poison bar and updates the displayed image accordingly.
    * @param {number} percentage - The current poison percentage (0-100).
    * @param {number} multiplier - A multiplier applied to the percentage for determining the image index.
    */
    setPercentage(percentage, multiplier) {
        this.percentage = percentage;
        let path = this.IMAGES_POISONBAR[this.resolveImageIndex(multiplier)];
        this.img = this.imageCache[path];
    }

    /**
    * Resolves the appropriate image index based on the current percentage and multiplier.
    * @param {number} multiplier - A multiplier applied to the percentage.
    * @returns {number} The index of the image corresponding to the current poison level.
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
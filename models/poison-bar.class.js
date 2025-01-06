class PoisonBar extends DrawableObject {
    percentage = 0;
    IMAGES_POISONBAR = [
        'assets/img/4. Marcadores/Posión/Animada/1.png'
    ];

    /**
    * Initializes a new instance of the object, setting up the poison bar
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES_POISONBAR);
        this.x = 220;
        this.y = 0;
        this.width = 35;
        this.height = 45;
        this.setPercentage(0);
    }

    /**
    * Sets the current percentage of the poison bar and updates the displayed image accordingly.
    * @param {number} percentage - The current poison percentage (0-100).
    * @param {number} multiplier - A multiplier applied to the percentage for determining the image index.
    */
    setPercentage(percentage, multiplier) {
        this.percentage = percentage;
        let path = this.IMAGES_POISONBAR[0];
        this.img = this.imageCache[path];
    }
}
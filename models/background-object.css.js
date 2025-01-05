class BackgroundObject extends MoveableObject {
    /**
    * Creates a new instance of the object and initializes it with a position and an image. 
    * @param {number} x - The initial x-coordinate of the object.
    * @param {string} img - The path to the image that will be loaded for the object.
    */
    constructor(x, img) {
        super().loadImage(img);
        this.x = x;
    }
}
class Light extends MoveableObject {

    /**
    * Initializes a new object with a specified position (x) and image, and starts the animation to move left.
    * @param {number} x - The initial x-coordinate of the object.
    * @param {string} img - The path to the image to be loaded for the object.
    */
    constructor(x, img) {
        super().loadImage(img);
        this.x = x;
        this.animate();
    }

    /**
    * Starts an animation that moves the object to the left.
    */
    animate() {
        addStoppableIntervallId(setInterval(() => this.moveLeft(), 1000 / 60));
    }
}
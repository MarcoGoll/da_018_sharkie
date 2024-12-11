class Light extends MoveableObject {

    constructor(img) {
        super().loadImage(img);
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}
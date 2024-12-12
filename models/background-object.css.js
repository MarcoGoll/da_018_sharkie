class BackgroundObject extends MoveableObject {
    constructor(x, img) {
        super().loadImage(img);
        this.x = x;
    }
}
class BackgroundObject extends MoveableObject {
    height;

    constructor(x, y, width, img) {
        this.height = HEIGHT;
        super(x, y, width, this.height);
        super.loadImage(img);
    }
}
class Character extends MoveableObject {
    constructor(x, y, width, height, img) {
        super(x, y, width, height);
        super.loadImage(img);
    }
}
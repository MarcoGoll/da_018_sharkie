class Character extends MoveableObject {
    width = 180;
    height = 200;

    constructor(img) {
        super();
        super.loadImage(img);
    }
}
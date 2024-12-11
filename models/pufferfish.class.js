class Pufferfish extends MoveableObject {
    x;
    y;
    width;
    height;

    constructor(x, y, width, height, img) {
        super().loadImage(img);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

}
class MoveableObject {
    x = X;
    y = Y;
    height = HEIGHT;
    width = WIDTH;
    img;

    // constructor(x, y, width, height) {
    // this.x = x;
    // this.y = y;
    // this.width = width;
    // this.height = height;
    // }

    constructor() {
    }

    loadImage(path) {
        this.img = new Image(); //Image Objekt funktioniert wie das <img> HTML-Tag (also z.B. auch mit dem Attribut src)
        this.img.src = path;
    }

    moveRight() {
        console.log('move right');
    }
    moveLeft() {
        console.log('move left');
    }
    moveUp() {
        console.log('move up');
    }
    moveDown() {
        console.log('move down');
    }
}
class MoveableObject {
    x = X;
    y = Y;
    height = HEIGHT;
    width = WIDTH;
    img;

    imageCache = {};

    loadImage(path) {
        this.img = new Image(); //Image Objekt funktioniert wie das <img> HTML-Tag (also z.B. auch mit dem Attribut src)
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} array - ['img/image1.png','img/image1.png', ...] 
     */
    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; // this.imageCache[path] does not exist, thats why a new Key:Value Pair will added to imageCache. 
            //The Key will be the value of the Variable "path" (in our case an relative path) and the Value will be the variable "img"
        });
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
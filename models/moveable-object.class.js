class MoveableObject {
    x = X;
    y = Y;
    height = HEIGHT;
    width = WIDTH;
    img;

    speed = 0.15;
    speedGravity = 0;
    acceleration = 0.5;
    otherDirection = false;
    currentImage = 0;
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
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60); // 60fps
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60); // 60fps
    }
    moveUp() {
        setInterval(() => {
            this.y -= this.speed;
        }, 1000 / 60); // 60fps
    }
    moveDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 60); // 60fps
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // Wirkt wie eine Endlosschleife. i = 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0 ... (jeweils der Rest von x % y )
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.speedGravity;
                this.speedGravity -= this.acceleration;
            }

        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 295;
    }

    isUnderTop() {
        return this.y > -110;
    }

    isStartOfLevelReached() {
        return this.x > 0;
    }
    isEndOfLevelReached() {
        return this.x < this.world.level.levelEndX - 720;
    }
}
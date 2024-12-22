class DrawableObject {
    x = X;
    y = Y;
    height = HEIGHT;
    width = WIDTH;
    img;
    imageCache = {};
    currentImage = 0;

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

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // ctx.drawImage(image, dx, dy, dWidth, dHeight) - eine Methode, die  dank der Zuweisung via getContext('2d') nun möglich ist. Sie Zeichnet im Context des Canvas ein Bild 
        } catch (error) {
            console.warn('Error loading Image', error);
            console.log('Could not load image', this.img.src);
        }
    }

    drawFrame(ctx) {
        //Draw Rectangle
        if (this instanceof Jellyfish || this instanceof Pufferfish || this instanceof ThrowableObject || this instanceof Character || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y, this.width - this.offset.widht, this.height - this.offset.height);
            ctx.stroke();
        }
    }
}
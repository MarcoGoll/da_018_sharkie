class DrawableObject {
    x = X;
    y = Y;
    height = HEIGHT;
    width = WIDTH;
    img;
    imageCache = {};
    currentImage = 0;

    /**
    * Loads a single image from the given path and assigns it to the object's `img` property. 
    * @param {string} path - The relative or absolute path to the image.
    */
    loadImage(path) {
        this.img = new Image(); //Image Objekt funktioniert wie das <img> HTML-Tag (also z.B. auch mit dem Attribut src)
        this.img.src = path;
    }

    /**
     * Loads multiple images into the `imageCache` object for later use.
     * Each image path in the array becomes a key in `imageCache`, and the corresponding value is the loaded image object.
     * @param {Array<string>} array - An array of image paths to load (e.g., ['img/image1.png', 'img/image2.png']).
     */
    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; // this.imageCache[path] does not exist, thats why a new Key:Value Pair will added to imageCache. 
            //The Key will be the value of the Variable "path" (in our case an relative path) and the Value will be the variable "img"
        });
    }

    /**
    * Draws the object's image onto the provided canvas context.
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of a `<canvas>` element.
    */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // ctx.drawImage(image, dx, dy, dWidth, dHeight) - eine Methode, die  dank der Zuweisung via getContext('2d') nun möglich ist. Sie Zeichnet im Context des Canvas ein Bild 
        } catch (error) {
            console.warn('Error loading Image', error);
            console.log('Could not load image', this.img.src);
        }
    }

    /**
    * Draws a rectangle frame around the object on the provided canvas context for debugging purposes.
    * This is only applied to specific object types (e.g., `Jellyfish`, `Pufferfish`, etc.).* 
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of a `<canvas>` element.
    */
    drawFrame(ctx) {
        //Draw Rectangle
        if (this instanceof Jellyfish ||
            this instanceof Pufferfish ||
            this instanceof ThrowableObject ||
            this instanceof Character ||
            this instanceof Endboss ||
            this instanceof Coin ||
            this instanceof Poison
        ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y, this.width - this.offset.widht, this.height - this.offset.height);
            ctx.stroke();
        }
    }
}
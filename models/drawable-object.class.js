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
        this.img = new Image();
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
            this.imageCache[path] = img;
        });
    }

    /**
    * Draws the object's image onto the provided canvas context.
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of a `<canvas>` element.
    */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Error loading Image', error);
            console.log('Could not load image', this.img.src);
        }
    }

    /**
    * Draws a text onto the provided canvas context.
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of a `<canvas>` element.
    * @param {number} x - The initial x-coordinate of the object.
    * @param {number} y - The initial y-coordinate of the object.
    */
    drawText(ctx, fontsize, text, x, y) {
        try {
            ctx.font = `${fontsize}px anton_SC`;
            ctx.fillStyle = "#571d86";
            ctx.fillText(text, x, y);
        } catch (error) {
            console.warn('Error drawing text', error);
            console.log('Could not draw the text: ', text);
        }
    }

}
class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedGravity = 0;
    acceleration = 0.5;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    moveRight() {
        this.x += this.speed;
    }
    moveLeft() {
        this.x -= this.speed;
    }
    moveUp() {
        this.y -= this.speed;
    }
    moveDown() {
        this.y += this.speed;
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
        return this.x <= 0;
    }
    isEndOfLevelReached() {
        return this.x >= this.world.level.levelEndX - 720;
    }

    drawFrame(ctx) {
        //Draw Rectangle
        if (this instanceof Character || this instanceof Jellyfish || this instanceof Pufferfish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    // Beispiel: character.isColliding(chicken)
    isColliding(movableObject) {
        return this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x &&
            this.y < movableObject.y + movableObject.height;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // aktuelle Zeit (in ms seit dem 1.1.1970)
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit // aktuelle Zeit  (in ms seit dem 1.1.1970) - die Zeit (in ms seit dem 1.1.1970), die wir beim Hit gespeichert haben (see hit())
        timepassed = timepassed / 1000 // ms in s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }
} 
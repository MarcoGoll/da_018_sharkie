class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedGravity = 0;
    acceleration = 0.3;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    offset = {
        x: 0,
        y: 0,
        widht: 0,
        height: 0,
    }

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
        //Showcase 20.12.24
        // if (this instanceof Character) {
        //     console.log(this.img, this.currentImage)
        // }
    }

    applyGravity() {
        setInterval(() => {
            if (this.isUnderTop() || this.speedGravity < 0) {
                this.y -= this.speedGravity;
                this.speedGravity += this.acceleration;
            }

        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 295;
    }

    isUnderTop() {
        if (this instanceof ThrowableObject) { //ThrowableObject should always go up
            return true;
        } else {
            return this.y > -110;
        }
    }

    isStartOfLevelReached() {
        return this.x <= 0;
    }
    isEndOfLevelReached() {
        return this.x >= this.world.level.levelEndX - 720;
    }

    // Beispiel: character.isColliding(chicken)
    isColliding(movableObject) {
        return this.x + this.offset.x + this.width - this.offset.widht > movableObject.x + movableObject.offset.x &&
            this.y + this.offset.y + this.height - this.offset.height > movableObject.y + movableObject.offset.y &&
            this.x + this.offset.x < movableObject.x + movableObject.offset.x + movableObject.width - movableObject.offset.widht &&
            this.y + this.offset.y < movableObject.y + movableObject.offset.y + movableObject.height - movableObject.offset.height;
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
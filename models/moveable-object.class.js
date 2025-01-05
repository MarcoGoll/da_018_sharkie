class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedGravity = 0;
    acceleration = 0.3;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    poisonAmmunition = 0;
    coinCounter = 0;
    offset = {
        x: 0,
        y: 0,
        widht: 0,
        height: 0,
    }

    /**
    * Moves the object to the right based on its speed.
    */
    moveRight() {
        this.x += this.speed;
    }

    /**
    * Moves the object to the left based on its speed.
    */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
    * Moves the object upwards based on its speed.
    */
    moveUp() {
        this.y -= this.speed;
    }

    /**
    * Moves the object downwards based on its speed.
    */
    moveDown() {
        this.y += this.speed;
    }

    /**
    * Plays an animation by cycling through an array of images.
    * @param {Array} images - An array of image paths to be displayed in sequence.
    */
    playAnimation(images) {
        let i = this.currentImage % images.length; // Wirkt wie eine Endlosschleife. i = 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0 ... (jeweils der Rest von x % y )
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
    * Applies gravity to the object, pulling it down unless it is under a certain limit or has an upward velocity.
    */
    applyGravity() {
        addStoppableIntervallId(setInterval(() => {
            if (this.isUnderTop() || this.speedGravity < 0) {
                this.y -= this.speedGravity;
                this.speedGravity += this.acceleration;
            }

        }, 1000 / 25));
    }

    /**
    * Checks if the object is above the ground.
    * @returns {boolean} True if the object is above ground, false otherwise.
    */
    isAboveGround() {
        return this.y < 295;
    }

    /**
    * Checks if the object is under the top boundary or if it is an instance of `ThrowableObject`.* 
    * @returns {boolean} True if the object is under the top limit or is throwable, false otherwise.
    */
    isUnderTop() {
        if (this instanceof ThrowableObject) { //ThrowableObject should always go up
            return true;
        } else {
            return this.y > -65;
        }
    }

    /**
    * Checks if the object has reached the start of the level.
    * @returns {boolean} True if the object is at or beyond the level start, false otherwise.
    */
    isStartOfLevelReached() {
        return this.x <= 0;
    }

    /**
    * Checks if the object has reached the end of the level. 
    * @returns {boolean} True if the object is at or beyond the level end, false otherwise.
    */
    isEndOfLevelReached() {
        return this.x >= this.world.level.levelEndX - 720;
    }

    /**
    * Checks if this object is colliding with another movable object.
    * @param {Object} movableObject - The object to check collision against.
    * @returns {boolean} True if the objects are colliding, false otherwise.
    */
    isColliding(movableObject) {
        return this.x + this.offset.x + this.width - this.offset.widht > movableObject.x + movableObject.offset.x &&
            this.y + this.offset.y + this.height - this.offset.height > movableObject.y + movableObject.offset.y &&
            this.x + this.offset.x < movableObject.x + movableObject.offset.x + movableObject.width - movableObject.offset.widht &&
            this.y + this.offset.y < movableObject.y + movableObject.offset.y + movableObject.height - movableObject.offset.height;
    }

    /**
    * Reduces the object's energy by a specified attack power.
    * @param {number} attackPower - The amount of energy to deduct from the object.
    */
    hit(attackPower) {
        this.energy -= attackPower;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // aktuelle Zeit (in ms seit dem 1.1.1970)
        }
    }

    /**
    * Checks if the object has been recently hurt. 
    * @returns {boolean} True if the object was hit less than 1 second ago, false otherwise.
    */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit // aktuelle Zeit  (in ms seit dem 1.1.1970) - die Zeit (in ms seit dem 1.1.1970), die wir beim Hit gespeichert haben (see hit())
        timepassed = timepassed / 1000 // ms in s
        return timepassed < 1;
    }

    /**
    * Checks if the object is dead. 
    * @returns {boolean} True if the object's energy is 0, false otherwise.
    */
    isDead() {
        return this.energy == 0;
    }

    /**
    * Increases the poison ammunition by 1.
    */
    addPoison() {
        this.poisonAmmunition += 1;
    }

    /**
    * Decreases the poison ammunition by 1.
    */
    deletePoison() {
        this.poisonAmmunition -= 1;
    }

    /**
    * Increases the coin counter by 1.
    */
    addCoin() {
        this.coinCounter += 1;
    }
} 
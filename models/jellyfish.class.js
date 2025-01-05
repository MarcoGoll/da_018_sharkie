class Jellyfish extends MoveableObject {
    x;
    y;
    width;
    height;
    offset = {
        x: 30,
        y: 30,
        widht: 60,
        height: 70,
    }
    isMovingUp = false;
    isMovingDown = true;
    iDead = 0;
    energyMax = 200;
    energy = 200;
    isHitAudio = new Audio('./assets/audio/enemyIsHit.mp3')
    isDyingAudio = new Audio('./assets/audio/jellyfishIsDying.mp3')

    /**
    * Initializes a new instance of the object with the specified position, size, and sound settings.
    * @param {number} x - The initial x-coordinate of the object.
    * @param {number} y - The initial y-coordinate of the object.
    * @param {number} width - The width of the object.
    * @param {number} height - The height of the object.
    */
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isHitAudio.volume = 0.5;
        this.isDyingAudio.volume = 0.5;
        this.setSoundsMuted();
        this.animate();
    }

    /**
    * Starts the animation and movement for the jellyfish.
    */
    animate() {
        addStoppableIntervallId(setInterval(() => this.moveJellyfish(), 1000 / 60)); // 60fps
        addStoppableIntervallId(setInterval(() => this.playJellyfishAnimations(), 1000 / 6));
    }

    /**
    * Plays the appropriate animation for the jellyfish based on its state.
    */
    playJellyfishAnimations() {
        if (this.isDead()) this.playDeadAnimation();
        else this.playMoveAnimation();
    }

    /**
    * Plays the death animation for the jellyfish if it hasn't been fully played yet.
    */
    playDeadAnimation() {
        if (this.isDeadAnimationStillRequired()) {
            if (this.deadAnimationWasPlayed == false) {
                this.currentImage = 0;
                this.deadAnimationWasPlayed = true;
            }
            this.playAnimation(this.IMAGES_DEAD);
            this.iDead++
        }
    }

    /**
    * Plays the swimming animation for the jellyfish.
    */
    playMoveAnimation() {
        this.playAnimation(this.IMAGES_SWIM);
    }

    /**
    * Controls the movement of the jellyfish.
    * The jellyfish moves up or down depending on its current position and movement flags.
    */
    moveJellyfish() {
        if (this.shouldMoveDown()) {
            this.moveDown();
        }
        if (this.shouldMoveUp()) {
            this.moveUp();
        }
    }

    /**
    * Moves the jellyfish downward and sets the appropriate movement flags.
    */
    moveDown() {
        super.moveDown();
        this.isMovingDown = true;
        if (this.y > 300) {
            this.isMovingDown = false;
            this.isMovingUp = true;
        }
    }

    /**
    * Moves the jellyfish upward and sets the appropriate movement flags.
    */
    moveUp() {
        super.moveUp();
        this.isMovingUp = true;
        if (this.y < 0) {
            this.isMovingUp = false;
            this.isMovingDown = true;
        }
    }

    /**
    * Determines if the jellyfish should continue moving downward. 
    * @returns {boolean} True if the jellyfish is below a specific value and flagged to move down, otherwise false.
    */
    shouldMoveDown() {
        return this.y < 300 && this.isMovingDown;
    }

    /**
    * Determines if the jellyfish should continue moving upward. 
    * @returns {boolean} True if the jellyfish is above a specific value and flagged to move up, otherwise false.
    */
    shouldMoveUp() {
        return this.y > 0 && this.isMovingUp;
    }

    /**
    * Checks if the death animation for the jellyfish is still required to play.
    * @returns {boolean} True if the death animation has not been fully played, otherwise false.
    */
    isDeadAnimationStillRequired() {
        return this.iDead < this.IMAGES_DEAD.length;
    }

    /**
   * Toggles the mute attribute for all sounds associated with a jellyfish.
   * This is controlled by the global `muteMode` variable.
   */
    setSoundsMuted() {
        if (muteMode) {
            this.isHitAudio.muted = true;
            this.isDyingAudio.muted = true;
        } else {
            this.isHitAudio.muted = false;
            this.isDyingAudio.muted = false;

        }
    }
}
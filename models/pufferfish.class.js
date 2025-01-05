class Pufferfish extends MoveableObject {
    x;
    y;
    width;
    height;
    offset = {
        x: 10,
        y: 10,
        widht: 30,
        height: 30,
    }
    energyMax = 200;
    energy = 200;
    transitionAnimationWasPlayed = false;
    deadAnimationWasPlayed = false;
    iDead = 0;
    isHitAudio = new Audio('./assets/audio/enemyIsHit.mp3');
    isDyingAudio = new Audio('./assets/audio/pufferfishIsDying.mp3');
    iTransition = 0;

    /**
    * Initializes a new instance of the object, setting up a pufferfish
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
    * Initializes animation and movement intervals for the pufferfish.
    */
    animate() {
        addStoppableIntervallId(setInterval(() => this.movePufferfish(), 1000 / 60)); // 60fps
        addStoppableIntervallId(setInterval(() => this.playPufferfishAnimations(), 1000 / 10));
    }

    /**
    * Moves the pufferfish to the left.
    */
    movePufferfish() {
        this.moveLeft();
    }

    /**
    * Determines and plays the appropriate animation for the pufferfish.
    */
    playPufferfishAnimations() {
        if (this.isHurt()) {
            if (this.isTransitionAnimationStillRequired()) this.playTransitionAnimation();
            else this.playMoveAgressiveAnimation();
        } else if (this.isDead()) {
            if (this.isDeadAnimationStillRequired()) this.playDeadAnimation();
        }
        else this.playMoveNormalAnimation();
    }

    /**
    * Plays the transition animation when the pufferfish is hurt.
    */
    playTransitionAnimation() {
        if (this.transitionAnimationWasPlayed == false) {
            this.currentImage = 0;
            this.transitionAnimationWasPlayed = true;
        }
        this.playAnimation(this.IMAGES_TRANSITION);
        this.iTransition++
    }

    /**
    * Plays the aggressive swimming animation.
    */
    playMoveAgressiveAnimation() {
        this.playAnimation(this.IMAGES_AGRESSIVESWIM); //MoveAGRESSIVE 
    }

    /**
    * Plays the dead animation when the pufferfish dies.
    */
    playDeadAnimation() {
        if (this.deadAnimationWasPlayed == false) {
            this.currentImage = 0;
            this.deadAnimationWasPlayed = true;
        }
        this.playAnimation(this.IMAGES_DEAD);
        this.iDead++
    }

    /**
    * Plays the normal swimming animation.
    */
    playMoveNormalAnimation() {
        this.playAnimation(this.IMAGES_SWIM); //MoveNormal
    }

    /**
    * Checks if the pufferfish is hurt but not dead.
    * @returns {boolean} True if the pufferfish is hurt and not dead, otherwise false.
    */
    isHurt() {
        return this.energy < this.energyMax && !(this.isDead());
    }

    /**
    * Checks if the transition animation is still required.
    * @returns {boolean} True if the transition animation is incomplete, otherwise false.
    */
    isTransitionAnimationStillRequired() {
        return this.iTransition < this.IMAGES_TRANSITION.length;
    }

    /**
    * Checks if the dead animation is still required.
    * @returns {boolean} True if the dead animation is incomplete, otherwise false.
    */
    isDeadAnimationStillRequired() {
        return this.iDead < this.IMAGES_DEAD.length;
    }

    /**
    * Toggles the mute attribute for all sounds associated with a pufferfish.
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
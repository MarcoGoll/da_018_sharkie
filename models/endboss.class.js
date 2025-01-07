class Endboss extends MoveableObject {
    width = 400;
    height = 400;
    offset = {
        x: 30,
        y: 200,
        widht: 80,
        height: 310,
    }
    energyMax = 800;
    energy = 1000;
    iDead = 0;
    world;
    deadAnimationWasPlayed = false;
    attackAnimationIsPlaying = false;
    i = 0;
    iAttack = 0;
    isSpawnAudio = new Audio('./assets/audio/endboss_spawn.mp3');
    isHitAudio = new Audio('./assets/audio/endboss_isHit.mp3');
    isDyingAudio = new Audio('./assets/audio/endboss_dying.mp3');
    IMAGES_SPAWNING = [
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];
    IMAGES_SWIM = [
        './assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];
    IMAGES_DEAD = [
        './assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',

    ];
    IMAGES_HURT = [
        './assets/img/2.Enemy/3 Final Enemy/Hurt/1.png',
        './assets/img/2.Enemy/3 Final Enemy/Hurt/2.png',
        './assets/img/2.Enemy/3 Final Enemy/Hurt/3.png',
        './assets/img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];
    IMAGES_ATTACK = [
        './assets/img/2.Enemy/3 Final Enemy/Attack/1.png',
        './assets/img/2.Enemy/3 Final Enemy/Attack/2.png',
        './assets/img/2.Enemy/3 Final Enemy/Attack/3.png',
        './assets/img/2.Enemy/3 Final Enemy/Attack/4.png',
        './assets/img/2.Enemy/3 Final Enemy/Attack/5.png',
        './assets/img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    /**
    * Initializes a new instance of the object, preloading multiple animations and setting initial properties. 
    * @param {number} AMOUNTBACKGROUNDS - The number of backgrounds used to calculate the x-coordinate.
    */
    constructor() {
        super().loadImage(this.IMAGES_SPAWNING[0]);
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = (AMOUNTBACKGROUNDS * 1440) - 1200;
        this.isSpawnAudio.volume = 0.5;
        this.isHitAudio.volume = 0.5;
        this.isDyingAudio.volume = 0.5;
        this.setSoundsMuted();
        this.animate();
    }

    /**
    * Starts the animation cycle for the end boss.
    * This includes spawning, moving, getting hurt, or dying animations, updated at 10 frames per second.
    */
    animate() {
        addStoppableIntervallId(setInterval(() => this.playEndbossAnimations(), 1000 / 10));
    }

    /**
    * Plays the appropriate animation for the end boss based on its state.
    * The states include spawning, dying, getting hurt, or moving.
    */
    playEndbossAnimations() {
        if (this.isSpawnAnimationStillRequired()) this.playSpawnAnimation();
        else if (this.isDead()) this.playDeadAnimation();
        else if (this.isHurt()) this.playHurtAnimation();
        else if (this.isAttacking) this.playAttackAnimation();
        else this.playMoveAnimation();
        this.i++;
    }

    /**
    * Plays the spawning animation and associated audio for the end boss.
    */
    playSpawnAnimation() {
        this.playAnimation(this.IMAGES_SPAWNING);
        this.isSpawnAudio.play();
    }

    /**
    * Plays the death animation for the end boss if it hasn't been fully played yet.
    * Once the animation is completed, the last death image is displayed.
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
        else {
            this.loadImage(this.getLastDeathImg());
        }
    }

    /**
    * Plays the hurt animation for the end boss.
    */
    playHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
    }

    /**
    * Plays the attack animation for the end boss.
    */
    playAttackAnimation() {
        if (this.iAttack < this.IMAGES_ATTACK.length) {
            if (this.attackAnimationIsPlaying == false) {
                this.attackAnimationIsPlaying = true;
                this.currentImage = 0;
            }
            this.playAnimation(this.IMAGES_ATTACK);
            this.iAttack++;
        } else {
            this.attackAnimationIsPlaying = false;
            this.iAttack = 0;
        }
    }

    /**
    * Plays the movement animation for the end boss.
    */
    playMoveAnimation() {
        this.playAnimation(this.IMAGES_SWIM);
    }

    /**
    * Determines if the spawning animation is still required to play. 
    * @returns {boolean} True if the spawning animation has not finished, otherwise false.
    */
    isSpawnAnimationStillRequired() {
        return this.i < this.IMAGES_SPAWNING.length;
    }

    /**
    * Determines if the death animation is still required to play. 
    * @returns {boolean} True if the death animation has not finished, otherwise false.
    */
    isDeadAnimationStillRequired() {
        return this.iDead < this.IMAGES_DEAD.length;
    }

    /**
    * Retrieves the last image of the death animation sequence.* 
    * @returns {string} The path to the last image in the death animation array.
    */
    getLastDeathImg() {
        return this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1];
    }

    /**
    * Toggles the mute attribute for all sounds associated with the end boss.
    * This is controlled by the global `muteMode` variable.
    */
    setSoundsMuted() {
        if (muteMode) {
            this.isSpawnAudio.muted = true;
            this.isHitAudio.muted = true;
            this.isDyingAudio.muted = true;
        } else {
            this.isSpawnAudio.muted = false;
            this.isHitAudio.muted = false;
            this.isDyingAudio.muted = false;
        }
    }
}
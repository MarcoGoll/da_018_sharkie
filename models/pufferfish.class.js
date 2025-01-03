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

    animate() {
        addStoppableIntervallId(setInterval(() => this.movePufferfish(), 1000 / 60)); // 60fps
        addStoppableIntervallId(setInterval(() => this.playPufferfishAnimations(), 1000 / 10));
    }

    movePufferfish() {
        this.moveLeft();
    }

    playPufferfishAnimations() {
        if (this.isHurt()) {
            if (this.isTransitionAnimationStillRequired()) this.playTransitionAnimation();
            else this.playMoveAgressiveAnimation();
        } else if (this.isDead()) {
            if (this.isDeadAnimationStillRequired()) this.playDeadAnimation();
        }
        else this.playMoveNormalAnimation();
    }

    playTransitionAnimation() {
        if (this.transitionAnimationWasPlayed == false) {
            this.currentImage = 0;
            this.transitionAnimationWasPlayed = true;
        }
        this.playAnimation(this.IMAGES_TRANSITION);
        this.iTransition++
    }

    playMoveAgressiveAnimation() {
        this.playAnimation(this.IMAGES_AGRESSIVESWIM); //MoveAGRESSIVE 
    }

    playDeadAnimation() {
        if (this.deadAnimationWasPlayed == false) {
            this.currentImage = 0;
            this.deadAnimationWasPlayed = true;
        }
        this.playAnimation(this.IMAGES_DEAD);
        this.iDead++
        console.log(this.iDead);
    }

    playMoveNormalAnimation() {
        this.playAnimation(this.IMAGES_SWIM); //MoveNormal
    }

    isHurt() {
        return this.energy < this.energyMax && !(this.isDead());
    }

    isTransitionAnimationStillRequired() {
        return this.iTransition < this.IMAGES_TRANSITION.length;
    }

    isDeadAnimationStillRequired() {
        return this.iDead < this.IMAGES_DEAD.length;
    }

    /**
   * set muted attribut of global sounds
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
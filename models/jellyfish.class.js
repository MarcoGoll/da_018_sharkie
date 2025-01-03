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
        addStoppableIntervallId(setInterval(() => this.moveJellyfish(), 1000 / 60)); // 60fps
        addStoppableIntervallId(setInterval(() => this.playJellyfishAnimations(), 1000 / 6));
    }

    playJellyfishAnimations() {
        if (this.isDead()) this.playDeadAnimation();
        else this.playMoveAnimation();
    }

    playDeadAnimation() {
        if (this.isDeadAnimationStillRequired()) {
            if (this.deadAnimationWasPlayed == false) {
                this.currentImage = 0;
                this.deadAnimationWasPlayed = true;
            }
            this.playAnimation(this.IMAGES_DEAD);
            this.iDead++
            console.log(this.iDead);
        }
    }

    playMoveAnimation() {
        this.playAnimation(this.IMAGES_SWIM);
    }

    moveJellyfish() {
        if (this.shouldMoveDown()) {
            this.moveDown();
        }
        if (this.shouldMoveUp()) {
            this.moveUp();
        }
    }

    moveDown() {
        super.moveDown();
        this.isMovingDown = true;
        if (this.y > 300) {
            this.isMovingDown = false;
            this.isMovingUp = true;
        }
    }

    moveUp() {
        super.moveUp();
        this.isMovingUp = true;
        if (this.y < 0) {
            this.isMovingUp = false;
            this.isMovingDown = true;
        }
    }

    shouldMoveDown() {
        return this.y < 300 && this.isMovingDown;
    }

    shouldMoveUp() {
        return this.y > 0 && this.isMovingUp;
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
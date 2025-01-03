class Character extends MoveableObject {
    width = 220;
    height = 240;
    x = 110;
    offset = {
        x: 30,
        y: 140,
        widht: 80,
        height: 210,
    }
    world;
    speed = 4;
    idleCount = 0;

    iDead = 0;
    iAttackBubble = 0;
    iAttackBubblePoison = 0;
    iAttackSlap = 0;

    deadAnimationWasPlayed = false;
    attackBubbleAnimationIsPlaying = false;
    attackBubblePoisonAnimationIsPlaying = false;
    attackSlapAnimationIsPlaying = false;
    isShooting = false;
    deadSoundWasPlayed = false;

    swimSound = new Audio('./assets/audio/splash.mp3');
    isHitAudio = new Audio('./assets/audio/characterIsHit.mp3');
    IMAGES_SWIM = [
        './assets/img/1.Sharkie/3.Swim/1.png',
        './assets/img/1.Sharkie/3.Swim/2.png',
        './assets/img/1.Sharkie/3.Swim/3.png',
        './assets/img/1.Sharkie/3.Swim/4.png',
        './assets/img/1.Sharkie/3.Swim/5.png',
        './assets/img/1.Sharkie/3.Swim/6.png',
    ];
    IMAGES_IDLE = [
        './assets/img/1.Sharkie/1.IDLE/1.png',
        './assets/img/1.Sharkie/1.IDLE/2.png',
        './assets/img/1.Sharkie/1.IDLE/3.png',
        './assets/img/1.Sharkie/1.IDLE/4.png',
        './assets/img/1.Sharkie/1.IDLE/5.png',
        './assets/img/1.Sharkie/1.IDLE/6.png',
        './assets/img/1.Sharkie/1.IDLE/7.png',
        './assets/img/1.Sharkie/1.IDLE/8.png',
        './assets/img/1.Sharkie/1.IDLE/9.png',
        './assets/img/1.Sharkie/1.IDLE/10.png',
        './assets/img/1.Sharkie/1.IDLE/11.png',
        './assets/img/1.Sharkie/1.IDLE/12.png',
        './assets/img/1.Sharkie/1.IDLE/13.png',
        './assets/img/1.Sharkie/1.IDLE/14.png',
        './assets/img/1.Sharkie/1.IDLE/15.png',
        './assets/img/1.Sharkie/1.IDLE/16.png',
        './assets/img/1.Sharkie/1.IDLE/17.png',
        './assets/img/1.Sharkie/1.IDLE/18.png',
    ];
    IMAGES_LONGIDLE = [
        './assets/img/1.Sharkie/2.Long_IDLE/I1.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I2.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I3.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I4.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I5.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I6.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I7.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I8.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I9.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I10.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I11.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I12.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I13.png',
        './assets/img/1.Sharkie/2.Long_IDLE/I14.png',

    ];
    IMAGES_ATTACKBUBBLENORMAL = [
        './assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',

    ];
    IMAGES_ATTACKBUBBLEPOISON = [
        './assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './assets/img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];
    IMAGES_ATTACKSLAP = [
        './assets/img/1.Sharkie/4.Attack/Fin slap/1.png',
        './assets/img/1.Sharkie/4.Attack/Fin slap/2.png',
        './assets/img/1.Sharkie/4.Attack/Fin slap/3.png',
        './assets/img/1.Sharkie/4.Attack/Fin slap/4.png',
        './assets/img/1.Sharkie/4.Attack/Fin slap/5.png',
        './assets/img/1.Sharkie/4.Attack/Fin slap/6.png',
        './assets/img/1.Sharkie/4.Attack/Fin slap/7.png',
        './assets/img/1.Sharkie/4.Attack/Fin slap/8.png',

    ];
    IMAGES_DEADNORMAL = [
        './assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];
    IMAGES_HURTNORMAL = [
        './assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];

    /**
     * Constructor for the class Character
     * @param {string} img - initial image for character
     */
    constructor(img) {
        super().loadImage(img);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONGIDLE);
        this.loadImages(this.IMAGES_DEADNORMAL);
        this.loadImages(this.IMAGES_HURTNORMAL);
        this.loadImages(this.IMAGES_ATTACKBUBBLENORMAL);
        this.loadImages(this.IMAGES_ATTACKBUBBLEPOISON);
        this.loadImages(this.IMAGES_ATTACKSLAP);
        this.swimSound.volume = 1;
        this.isHitAudio.volume = 0.5;
        this.setSoundsMuted();
        this.animate();
    }

    animate() {
        addStoppableIntervallId(setInterval(() => this.playCharacterAnimations(), 1000 / 8));
        addStoppableIntervallId(setInterval(() => this.moveCharacter(), 1000 / 60));
    }

    /**
    * set muted attribut of global sounds
    */
    setSoundsMuted() {
        if (muteMode) {
            this.swimSound.muted = true;
            this.isHitAudio.muted = true;
        } else {
            this.swimSound.muted = false;
            this.isHitAudio.muted = false;
        }
    }

    playCharacterAnimations() {
        if (this.isDead()) this.playDeadAnimation();
        else if (this.isHurt()) this.playHurtAnimation();
        else if (this.isAttackingWithBubble()) this.playAttackBubbleAnimation();
        else if (this.isAttackingWithBubblePoison()) this.playAttackBubblePoisonAnimation();
        else if (this.isAttackingWithSlapp()) this.playAttackSlapAnimation();
        else {
            if (this.isMoving()) this.playMoveAnimation();
            else if (this.characterStopedMoving()) this.playIdleAnimations();
        }
    }


    playDeadAnimation() {
        if (!this.deadSoundWasPlayed) {
            lostSound.play();
            this.deadSoundWasPlayed = true;
        }
        if (this.iDead < this.IMAGES_DEADNORMAL.length) {
            if (this.deadAnimationWasPlayed == false) {
                this.currentImage = 0;
                this.deadAnimationWasPlayed = true;
            }
            this.playAnimation(this.IMAGES_DEADNORMAL);
            this.iDead++
        }
        else {
            this.loadImage(this.IMAGES_DEADNORMAL[this.IMAGES_DEADNORMAL.length - 1]);
        }
    }
    playHurtAnimation() {
        this.playAnimation(this.IMAGES_HURTNORMAL); //hurtANIMATION
    }
    playAttackBubbleAnimation() {
        if (this.iAttackBubble < this.IMAGES_ATTACKBUBBLENORMAL.length) {
            if (this.attackBubbleAnimationIsPlaying == false) {
                this.attackBubbleAnimationIsPlaying = true;
                this.currentImage = 0;
            }
            this.playAnimation(this.IMAGES_ATTACKBUBBLENORMAL);
            this.idleCount = 0;
            this.iAttackBubble++;
        } else {
            this.attackBubbleAnimationIsPlaying = false;
            this.iAttackBubble = 0;
        }
    }
    playAttackBubblePoisonAnimation() {
        if (this.iAttackBubblePoison < this.IMAGES_ATTACKBUBBLEPOISON.length) {
            if (this.attackBubblePoisonAnimationIsPlaying == false) {
                this.attackBubblePoisonAnimationIsPlaying = true;
                this.currentImage = 0;
            }
            this.playAnimation(this.IMAGES_ATTACKBUBBLEPOISON);
            this.idleCount = 0;
            this.iAttackBubblePoison++;
        } else {
            this.attackBubblePoisonAnimationIsPlaying = false;
            this.iAttackBubblePoison = 0;
        }
    }
    playAttackSlapAnimation() {
        if (this.iAttackSlap < this.IMAGES_ATTACKSLAP.length) {
            if (this.attackSlapAnimationIsPlaying == false) {
                this.attackSlapAnimationIsPlaying = true;
                this.currentImage = 0;
            }
            this.playAnimation(this.IMAGES_ATTACKSLAP);
            this.idleCount = 0;
            this.iAttackSlap++;
        } else {
            this.attackSlapAnimationIsPlaying = false;
            this.iAttackSlap = 0;
        }
    }
    playMoveAnimation() {
        this.playAnimation(this.IMAGES_SWIM);
        this.idleCount = 0;
    }
    playIdleAnimations() {
        if (this.idleCount < 100) {
            this.playAnimation(this.IMAGES_IDLE);
            this.idleCount++;
        } else {
            this.playAnimation(this.IMAGES_LONGIDLE);
        }
    }

    isAttackingWithBubble() {
        return this.world.keyboard.Q || this.attackBubbleAnimationIsPlaying;
    }
    isAttackingWithBubblePoison() {
        return this.world.keyboard.E || this.attackBubblePoisonAnimationIsPlaying;
    }
    isAttackingWithSlapp() {
        this.world.keyboard.SPACE || this.attackSlapAnimationIsPlaying;
    }
    isMoving() {
        this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN;
    }

    //MOVEMENT
    moveCharacter() {
        if (this.shouldCharacterMoveLeft()) this.moveLeft();
        if (this.shouldCharacterMoveRight()) this.moveRight();
        if (this.shouldCharacterMoveUp()) this.moveUp();
        if (this.shouldCharacterMoveDown()) this.moveDown();
        if (this.characterStopedMoving()) this.swimSound.pause();
        this.setCameraDependingOnCharacter();
    }

    shouldCharacterMoveLeft() {
        return this.world.keyboard.LEFT;
    }
    shouldCharacterMoveRight() {
        return this.world.keyboard.RIGHT && !this.isEndOfLevelReached();
    }
    shouldCharacterMoveUp() {
        return this.world.keyboard.UP && this.isUnderTop();
    }
    shouldCharacterMoveDown() {
        return this.world.keyboard.DOWN && this.isAboveGround();
    }
    characterStopedMoving() {
        return !this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.UP && !this.world.keyboard.DOWN;
    }
    moveLeft() {
        if (!this.isStartOfLevelReached()) {
            super.moveLeft();
        }
        this.otherDirection = true;
        this.swimSound.play();
    }
    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        this.swimSound.play();
    }
    moveUp() {
        super.moveUp();
        this.swimSound.play();
    }
    moveDown() {
        super.moveDown();
        this.swimSound.play();
        this.speedGravity = 0;
    }

    setCameraDependingOnCharacter() {
        this.world.camera_x = -this.x; // xAchse der World Camera, soll sich entgegengesetzt zur Character xAchse bewegen
    }
}


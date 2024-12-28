class Jellyfish extends MoveableObject {
    x;
    y;
    width;
    height;

    isMovingUp = false;
    isMovingDown = true;
    iDead = 0;

    offset = {
        x: 30,
        y: 30,
        widht: 60,
        height: 70,
    }
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
        this.setSounds();
        this.animate();
    }

    animate() {
        setInterval(() => {
            //this.moveLeft();   

            if (this.y < 300 && this.isMovingDown) {
                this.moveDown();
                this.isMovingDown = true;
                if (this.y > 300) {
                    this.isMovingDown = false;
                    this.isMovingUp = true;
                }
            }

            if (this.y > 0 && this.isMovingUp) {
                this.moveUp();
                this.isMovingUp = true;
                if (this.y < 0) {
                    this.isMovingUp = false;
                    this.isMovingDown = true;
                }
            }
        }, 1000 / 60); // 60fps

        setInterval(() => {
            if (this.isDead()) {
                if (this.iDead < this.IMAGES_DEAD.length) {
                    if (this.deadAnimationWasPlayed == false) {
                        this.currentImage = 0;
                        this.deadAnimationWasPlayed = true;
                    }
                    this.playAnimation(this.IMAGES_DEAD);
                    this.iDead++
                    console.log(this.iDead);
                }
            }
            else {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 1000 / 6);
    }

    setSounds() {
        if (muteMode) {
            this.isHitAudio.volume = 0;
            this.isDyingAudio.volume = 0;
        } else {
            this.isHitAudio.volume = 0.5;
            this.isDyingAudio.volume = 0.5;
        }
    }
}
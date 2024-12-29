class Pufferfish extends MoveableObject {
    x;
    y;
    width;
    height;

    energyMax = 200;
    energy = 200;

    transitionAnimationWasPlayed = false;
    deadAnimationWasPlayed = false;
    iDead = 0;

    offset = {
        x: 10,
        y: 10,
        widht: 30,
        height: 30,
    }

    isHitAudio = new Audio('./assets/audio/enemyIsHit.mp3')
    isDyingAudio = new Audio('./assets/audio/pufferfishIsDying.mp3')

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
        let iTransition = 0;


        intervallIds.push(setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)); // 60fps

        intervallIds.push(setInterval(() => {

            if (this.energy < this.energyMax && !(this.isDead())) { //Transition Animation
                if (iTransition < this.IMAGES_TRANSITION.length) {
                    if (this.transitionAnimationWasPlayed == false) {
                        this.currentImage = 0;
                        this.transitionAnimationWasPlayed = true;
                    }
                    this.playAnimation(this.IMAGES_TRANSITION);
                    iTransition++
                }
                else {
                    this.playAnimation(this.IMAGES_AGRESSIVESWIM);
                }
            } else if (this.isDead()) {
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


        }, 1000 / 10));
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
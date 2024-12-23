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

    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.animate();
    }

    animate() {
        let iTransition = 0;


        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // 60fps

        setInterval(() => {

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


        }, 1000 / 10);
    }

}
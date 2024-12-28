class Endboss extends MoveableObject {
    width = 400;
    height = 400;
    energyMax = 800;
    energy = 800;
    iDead = 0;

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

    world;
    deadAnimationWasPlayed = false;


    offset = {
        x: 30,
        y: 200,
        widht: 80,
        height: 310,
    }

    isSpawnAudio = new Audio('./assets/audio/endboss_spawn.mp3')
    isHitAudio = new Audio('./assets/audio/endboss_isHit.mp3')
    isDyingAudio = new Audio('./assets/audio/endboss_dying.mp3')

    constructor() {
        super().loadImage(this.IMAGES_SPAWNING[0]);
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.x = (AMOUNTBACKGROUNDS * 1440) - 1200;
        this.setSounds();
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (i < this.IMAGES_SPAWNING.length) {
                this.playAnimation(this.IMAGES_SPAWNING);
                this.isSpawnAudio.play();
            } else if (this.isDead()) { //DEADANIMATION
                if (this.iDead < this.IMAGES_DEAD.length) {
                    if (this.deadAnimationWasPlayed == false) {
                        this.currentImage = 0;
                        this.deadAnimationWasPlayed = true;
                    }
                    this.playAnimation(this.IMAGES_DEAD);
                    this.iDead++
                }
                else {
                    this.loadImage(this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]);
                }
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            }
            else {
                this.playAnimation(this.IMAGES_SWIM);
            }
            i++;
        }, 1000 / 10);

    }

    setSounds() {
        if (muteMode) {
            this.isSpawnAudio.volume = 0;
            this.isHitAudio.volume = 0;
            this.isDyingAudio.volume = 0;
        } else {
            this.isSpawnAudio.volume = 0.5;
            this.isHitAudio.volume = 0.5;
            this.isDyingAudio.volume = 0.5;
        }
    }
}
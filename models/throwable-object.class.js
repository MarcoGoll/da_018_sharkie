class ThrowableObject extends MoveableObject {

    IMAGES_POISON = [
        './assets/img/4. Marcadores/Posión/Animada/1.png',
        './assets/img/4. Marcadores/Posión/Animada/2.png',
        './assets/img/4. Marcadores/Posión/Animada/3.png',
        './assets/img/4. Marcadores/Posión/Animada/4.png',
        './assets/img/4. Marcadores/Posión/Animada/5.png',
        './assets/img/4. Marcadores/Posión/Animada/6.png',
        './assets/img/4. Marcadores/Posión/Animada/7.png',
        './assets/img/4. Marcadores/Posión/Animada/8.png',
    ];

    constructor(x, y) {
        super().loadImage('./assets/img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISON);
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.throw(this.x, this.y);
        this.animate();
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedGravity = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25)

    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON);
        }, 1000 / 6);
    }
}
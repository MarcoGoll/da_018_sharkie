class Poison extends MoveableObject {

    img = './assets/img/4. Marcadores/Posión/Animada/1.png';

    width = 60;
    height = 80;

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

    offset = {
        x: 15,
        y: 30,
        widht: 30,
        height: 30,
    }

    constructor(x, y) {
        super().loadImage(this.img);
        this.loadImages(this.IMAGES_POISON);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON);
        }, 1000 / 8);
    }
}
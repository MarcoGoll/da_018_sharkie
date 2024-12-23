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
    energyMax = 200;
    energy = 200;

    constructor(x, y, width, height) {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            if (Math.random() > 0.5) {
                this.moveUp();
            } else { this.moveDown(); }
        }, 1000 / 60); // 60fps

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 1000 / 6);
    }
}
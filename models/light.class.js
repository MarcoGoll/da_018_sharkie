class Light extends MoveableObject {


    constructor(img) {
        super().loadImage(img);
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60); // 60fps

    }
}
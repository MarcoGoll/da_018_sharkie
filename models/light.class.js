class Light extends MoveableObject {

    constructor(x, img) {
        super().loadImage(img);
        this.x = x;
        //this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        addStoppableIntervallId(setInterval(() => this.moveLeft(), 1000 / 60)); // 60fps
    }
}
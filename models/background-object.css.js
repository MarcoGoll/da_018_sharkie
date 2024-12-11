class BackgroundObject extends MoveableObject {
    constructor(img) {
        // VARAINTE 1 (so initial bei mir - obwohl ich gar kein constructor in der Superklasse hab (wird hier automatisch einer erzeugt, den man nicht sieht?))
        //super();
        //this.loadImage(img);

        // VARIANTE 2 (so bei Junus)
        super().loadImage(img);

        // VARIANTE 3
        //super.loadImage(img);

        //Warum gehen Variante 1 und 2, 3 aber nicht?
    }
}
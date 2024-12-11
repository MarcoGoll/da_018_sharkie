class World {
    ctx; // um den (ctx/)Context  des Canvas zu verändern (wird immer im Zusammenhang mit canvas benötigt und wird traditionell immer so benannt)
    canvas;

    // character = new Character(0, 0, 180, 200, "../assets/img/1.Sharkie/3.Swim/1.png");
    character = new Character("../assets/img/1.Sharkie/3.Swim/1.png");
    lights = [
        new Light("../assets/img/3. Background/Layers/1. Light/1.png"),
    ];
    enemiesPufferfish = [
        new Pufferfish(((Math.random() * 500) + 180), ((Math.random() * 100)), 100, 95, "../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"),
    ];
    enemiesJellyfish = [
        new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 100, 120, "../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
        new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 100, 120, "../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
        new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 100, 120, "../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png")
    ];
    backgroundObjects = [
        new BackgroundObject("../assets/img/3. Background/Layers/5. Water/L1.png"),
        new BackgroundObject("../assets/img/3. Background/Layers/4.Fondo 2/L1.png"),
        new BackgroundObject("../assets/img/3. Background/Layers/3.Fondo 1/L1.png"),
        new BackgroundObject("../assets/img/3. Background/Layers/2. Floor/L1.png"),
    ];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d'); // Gibt an das wir mit 2d arbeiten wollen und returnd ein Objekt mit Eigenschaften/Methoden zurück, die uns das entsprechende Arbeiten mit 2d ermöglichen und speichert dieses in die Variable ctx
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Löscht zu Beginn des Zeichnes den Inhalt des Canvas (sonst würde jeder vorher gezeichnete Frame immernoch da sein)

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.enemiesJellyfish);
        this.addObjectsToMap(this.enemiesPufferfish);
        this.addObjectToMap(this.character);

        self = this; // wird benötigt, da in der Methode requestAnimationFrame "this" nicht bekannt ist. Wenn wir this (also das aktuelle Objekt) aber vorher einer Variablen zuordnen, können wir diese in der Funktion requestAnimationFrame nutzen
        requestAnimationFrame(function () {
            self.draw();
        }); // requestAnimationFrame wird so häufig aufgerufen, wie es die Grafikkarte hergibt
    }

    addObjectToMap(moveableObject) {
        this.ctx.drawImage(moveableObject.img, moveableObject.x, moveableObject.y, moveableObject.width, moveableObject.height); // ctx.drawImage(image, dx, dy, dWidth, dHeight) - eine Methode, die  dank der Zuweisung via getContext('2d') nun möglich ist. Sie Zeichnet im Context des Canvas ein Bild
    }

    addObjectsToMap(arryOfMoveableObjects) {
        arryOfMoveableObjects.forEach(moveableObject => {
            this.addObjectToMap(moveableObject);
        });
    }
}


class World {
    ctx; // um den (ctx/)Context  des Canvas zu verändern (wird immer im Zusammenhang mit canvas benötigt und wird traditionell immer so benannt)
    canvas;

    // character = new Character(0, 0, 180, 200, "../assets/img/1.Sharkie/3.Swim/1.png");
    character = new Character("./assets/img/1.Sharkie/3.Swim/1.png");
    lights = [
    ];
    enemiesPufferfish = [
        new Pufferfish(((Math.random() * 500) + 180), ((Math.random() * 100)), 100, 95, "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"),
    ];
    enemiesJellyfish = [
        new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 150, 180, "./assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
        new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 150, 180, "./assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
        new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 150, 180, "./assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png")
    ];
    backgroundObjects = [
    ];


    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // Gibt an das wir mit 2d arbeiten wollen und returnd ein Objekt mit Eigenschaften/Methoden zurück, die uns das entsprechende Arbeiten mit 2d ermöglichen und speichert dieses in die Variable ctx
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.createRepeatedElements(5);
        this.draw();
        this.setWorld();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Löscht zu Beginn des Zeichnes den Inhalt des Canvas (sonst würde jeder vorher gezeichnete Frame immernoch da sein)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.enemiesJellyfish);
        this.addObjectsToMap(this.enemiesPufferfish);
        this.addObjectToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => {
            this.draw();
        }); // requestAnimationFrame wird so häufig aufgerufen, wie es die Grafikkarte hergibt
    }

    addObjectToMap(moveableObject) {
        if (moveableObject.otherDirection) { // Vor dem Zeichnen spiegeln, wenn otherdirection == true
            this.ctx.save(); // aktueller Status vom Kontext wird zwischengespeichert, um ihn später wieder laden zu können
            this.ctx.translate(moveableObject.width, 0) // Nötig, um beim Spiegeln den Sprung des Characters zu verhindern 
            this.ctx.scale(-1, 1); // Sagt dem Kontext, dass das nächste Bild gespiegelt gezeichnet werden soll
            moveableObject.x = moveableObject.x * -1 // Spiegelt die x Position, ist nötig da wir den Context gespiegelt haben
        }
        this.ctx.drawImage(moveableObject.img, moveableObject.x, moveableObject.y, moveableObject.width, moveableObject.height); // ctx.drawImage(image, dx, dy, dWidth, dHeight) - eine Methode, die  dank der Zuweisung via getContext('2d') nun möglich ist. Sie Zeichnet im Context des Canvas ein Bild
        if (moveableObject.otherDirection) { // Nach dem Zeichnen zurückspiegeln, wenn otherdirection == true
            moveableObject.x = moveableObject.x * -1 // Spiegelt die x Position zur Ausgangssituation zurück
            this.ctx.restore(); // läd den Status vom Kontext, bevor wir die Eigenschaften zum Spiegeln eingestellt haben. Damit die nächsten Bilder wieder normal gezeichnet werden
        }
    }

    addObjectsToMap(arryOfMoveableObjects) {
        arryOfMoveableObjects.forEach(moveableObject => {
            this.addObjectToMap(moveableObject);
        });
    }

    setWorld() {
        this.character.world = this; // Wir müssen dem Character eine Referenz zur World geben, da in der World das Keyboardobject liegt auf was wir, aber vom MovableObjekt (in dem Fall der Character) aus zurgreifen wollen. Ohne die Referenz, könnten wir vom Character aus nicht auf das Keyboard Object zugreifen
    }

    createRepeatedElements(amount) {
        let counter = 0;
        for (let i = 0; i < amount; i++) {
            this.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/5. Water/L1.png"));
            this.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/4.Fondo 2/L1.png"));
            this.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/3.Fondo 1/L1.png"));
            this.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/2. Floor/L1.png"));
            this.lights.push(new Light(counter * 720, "./assets/img/3. Background/Layers/1. Light/1.png"));
            counter++;
            this.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/5. Water/L2.png"));
            this.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/4.Fondo 2/L2.png"));
            this.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/3.Fondo 1/L2.png"));
            this.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/2. Floor/L2.png"));
            this.lights.push(new Light(counter * 720, "./assets/img/3. Background/Layers/1. Light/2.png"));
            counter++;


        }
    }
}

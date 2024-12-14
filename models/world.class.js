class World {
    character = new Character("./assets/img/1.Sharkie/3.Swim/1.png");
    canvas;
    ctx; // um den (ctx/)Context  des Canvas zu verändern (wird immer im Zusammenhang mit canvas benötigt und wird traditionell immer so benannt)
    keyboard;
    camera_x = 0;

    level = level1;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // Gibt an das wir mit 2d arbeiten wollen und returnd ein Objekt mit Eigenschaften/Methoden zurück, die uns das entsprechende Arbeiten mit 2d ermöglichen und speichert dieses in die Variable ctx
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Löscht zu Beginn des Zeichnes den Inhalt des Canvas (sonst würde jeder vorher gezeichnete Frame immernoch da sein)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => {
            this.draw();
        }); // requestAnimationFrame wird so häufig aufgerufen, wie es die Grafikkarte hergibt
    }

    addObjectToMap(moveableObject) {
        if (moveableObject.otherDirection) { // Vor dem Zeichnen spiegeln, wenn otherdirection == true
            this.flipImage(moveableObject);
        }

        moveableObject.draw(this.ctx);
        moveableObject.drawFrame(this.ctx);

        if (moveableObject.otherDirection) { // Nach dem Zeichnen zurückspiegeln, wenn otherdirection == true
            this.flipImageBack(moveableObject);
        }
    }

    flipImage(moveableObject) {
        this.ctx.save(); // aktueller Status vom Kontext wird zwischengespeichert, um ihn später wieder laden zu können
        this.ctx.translate(moveableObject.width, 0) // Nötig, um beim Spiegeln den Sprung des Characters zu verhindern 
        this.ctx.scale(-1, 1); // Sagt dem Kontext, dass das nächste Bild gespiegelt gezeichnet werden soll
        moveableObject.x = moveableObject.x * -1 // Spiegelt die x Position, ist nötig da wir den Context gespiegelt haben
    }

    flipImageBack(moveableObject) {
        moveableObject.x = moveableObject.x * -1 // Spiegelt die x Position zur Ausgangssituation zurück
        this.ctx.restore(); // läd den Status vom Kontext, bevor wir die Eigenschaften zum Spiegeln eingestellt haben. Damit die nächsten Bilder wieder normal gezeichnet werden
    }

    addObjectsToMap(arryOfMoveableObjects) {
        arryOfMoveableObjects.forEach(moveableObject => {
            this.addObjectToMap(moveableObject);
        });
    }

    setWorld() {
        this.character.world = this; // Wir müssen dem Character eine Referenz zur World geben, da in der World das Keyboardobject liegt auf was wir, aber vom MovableObjekt (in dem Fall der Character) aus zurgreifen wollen. Ohne die Referenz, könnten wir vom Character aus nicht auf das Keyboard Object zugreifen
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    console.log('Collision with Character:', enemy);
                }
            });
        }, 1000);
    }
}

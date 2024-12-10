class World {

    ctx; // um den (ctx/)Context  des Canvas zu verändern (wird immer im Zusammenhang mit canvas benötigt und wird traditionell immer so benannt)
    character = new Character(0, 0, 100, 75, "../assets/img/1.Sharkie/3.Swim/1.png");
    enemiesJellyfish = [
        new Jellyfish(110, 20, 50, 25, "../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"),
    ];
    enemiesPufferfish = [
        new Pufferfish(120, 40, 50, 25, "../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
        new Pufferfish(200, 70, 50, 25, "../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
        new Pufferfish(250, 90, 50, 25, "../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png")
    ];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d'); // Gibt an das wir mit 2d arbeiten wollen und returnd ein Objekt mit Eigenschaften/Methoden zurück, die uns das entsprechende Arbeiten mit 2d ermöglichen und speichert dieses in die Variable ctx
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height) // ctx.drawImage(image, dx, dy, dWidth, dHeight) - eine Methode, die über dank der Zuweisung via getContext('2d') nun möglich ist
        this.enemiesJellyfish.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)
        });
        this.enemiesPufferfish.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)
        });
    }
}


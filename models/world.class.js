class World {
    character = new Character("./assets/img/1.Sharkie/3.Swim/1.png");
    canvas;
    ctx; // um den (ctx/)Context  des Canvas zu verändern (wird immer im Zusammenhang mit canvas benötigt und wird traditionell immer so benannt)
    keyboard;
    camera_x = 0;
    level = level1;
    statusBarHealth = new StatusBar();
    poisonBar = new PoisonBar();
    coinBar = new CoinBar();
    throwableObjects = [];
    hadFirstContact = false;
    collisionPower = 5;
    gameIsOver = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // Gibt an das wir mit 2d arbeiten wollen und returnd ein Objekt mit Eigenschaften/Methoden zurück, die uns das entsprechende Arbeiten mit 2d ermöglichen und speichert dieses in die Variable ctx
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Löscht zu Beginn des Zeichnes den Inhalt des Canvas (sonst würde jeder vorher gezeichnete Frame immernoch da sein)
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.poisons);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        // -----------START: SPACE FOR FIXED OBJECTS-----------
        this.addObjectToMap(this.statusBarHealth);
        this.addObjectToMap(this.poisonBar);
        this.addObjectToMap(this.coinBar);
        // -----------END: SPACE FOR FIXED OBJECTS-----------
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => this.draw()); // requestAnimationFrame wird so häufig aufgerufen, wie es die Grafikkarte hergibt
    }

    addObjectToMap(moveableObject) {
        if (moveableObject.otherDirection) { // Vor dem Zeichnen spiegeln, wenn otherdirection == true
            this.flipImage(moveableObject);
        }

        moveableObject.draw(this.ctx);
        //moveableObject.drawFrame(this.ctx);

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

    run() {
        addStoppableIntervallId(setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.createEndboss();
        }, 150))
    }

    checkCollisions() {
        this.checkCollisionBetweenCharacterAndEnemy();
        this.checkCollisionBetweenThrowableObjectsAndEnemy();
        this.checkCollisionBetweenCharacterAndPoison();
        this.checkCollisionBetweenCharacterAndCoin();
    }

    checkCollisionBetweenCharacterAndEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(this.collisionPower);
                this.statusBarHealth.setPercentage(this.character.energy)
                if (this.character.isDead()) {
                    if (!(this.gameIsOver)) {
                        this.setGameOver('CharacterDeath');
                    }
                }
            }
        });
    }
    checkCollisionBetweenThrowableObjectsAndEnemy() {
        this.throwableObjects.forEach((bubble, indexBubble) => {
            this.level.enemies.forEach((enemy, indexEnemy) => {
                if (bubble.isColliding(enemy)) {
                    this.throwableObjects.splice(indexBubble, 1);
                    if (!(bubble.isPoisonedBubble)) {
                        enemy.hit(bubble.bubblePower);
                        enemy.isHitAudio.play();
                    }
                    else {
                        enemy.hit(bubble.bubblePowerPoison);
                        enemy.isHitAudio.play();
                    }
                    if (enemy instanceof Pufferfish) {
                        enemy.offset.height = 10;
                    }
                    if (enemy.isDead()) {
                        enemy.isDyingAudio.play();
                        if (enemy instanceof Endboss) {
                            if (!(this.gameIsOver)) {
                                this.setGameOver('EndbossDeath');
                            }
                        } else {
                            setTimeout(() => this.level.enemies.splice(indexEnemy, 1), 500);
                        }
                    }
                }
            });
        });
    }
    checkCollisionBetweenCharacterAndPoison() {
        this.level.poisons.forEach((poison, index) => {
            if (this.character.isColliding(poison)) {
                this.character.addPoison();
                this.level.poisons.splice(index, 1);
                poisonSound.play();
                this.poisonBar.setPercentage(this.character.poisonAmmunition, 10);
            }
        });
    }
    checkCollisionBetweenCharacterAndCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.addCoin();
                this.level.coins.splice(index, 1);
                coinSound.play();
                this.coinBar.setPercentage(this.character.coinCounter, 10)
            }
        });
    }

    checkThrowObjects() {
        if (this.bubbleShouldBeThrown()) {
            this.throwObject('bubble');
        }
        if (this.bubblePoisonShouldBeThrown()) {
            this.throwObject('bubblePoison');

        }
    }

    throwObject(bubbleType) {
        if (bubbleType == "bubble") {
            this.character.isShooting = true;
            setTimeout(() => {
                let bubble = new ThrowableObject(this.character.x + 150, this.character.y + 130, false);
                this.throwableObjects.push(bubble);
                this.character.isShooting = false;
            }, 700)
        }
        if (bubbleType == "bubblePoison") {
            if (this.character.poisonAmmunition > 0) {
                this.character.isShooting = true;
                setTimeout(() => {
                    let bubblePoison = new ThrowableObject(this.character.x + 150, this.character.y + 130, true);
                    this.throwableObjects.push(bubblePoison);
                    this.character.deletePoison();
                    this.poisonBar.setPercentage(this.character.poisonAmmunition, 10);
                    this.character.isShooting = false;
                }, 700)
            }
        }
    }

    bubbleShouldBeThrown() {
        return this.keyboard.Q && !(this.character.isShooting);
    }

    bubblePoisonShouldBeThrown() {
        return this.keyboard.E && !(this.character.isShooting);
    }

    createEndboss() {
        if (this.character.x > this.level.enbossSpawnPoint && !this.hadFirstContact) {
            this.level.enemies.push(new Endboss());
            this.hadFirstContact = true;
            this.moveEndboss();
        }
    }

    moveEndboss() {
        addStoppableIntervallId(setInterval(() => {
            if (!(this.myEndBoss().isDead())) {
                //MOVE LEFT
                if (this.shouldEndbossMoveLeft()) {
                    this.moveLeft();
                }
                //MOVE RIGHT
                if (this.shouldEndbossMoveRight()) {
                    this.moveRight();
                }
                //MOVE DOWN
                if (this.shouldEndbossMoveDown()) {
                    this.moveDown();
                }
                //MOVE UP
                if (this.shouldEndbossMoveUp()) {
                    this.moveUp();
                }
            }
        }, 1000 / 60));
    }

    shouldEndbossMoveLeft() {
        return this.myEndBoss().x > this.character.x - 50;
    }

    shouldEndbossMoveRight() {
        return this.myEndBoss().x < this.character.x - 50;
    }

    shouldEndbossMoveDown() {
        return this.myEndBoss().y < this.character.y - 100;
    }

    shouldEndbossMoveUp() {
        return this.myEndBoss().y > this.character.y - 100;
    }

    moveLeft() {
        this.myEndBoss().x -= 1.5;
        this.myEndBoss().otherDirection = false;
    }
    moveRight() {
        this.myEndBoss().x += 1.5;
        this.myEndBoss().otherDirection = true;
    }
    moveUp() {
        this.myEndBoss().y -= 1.5;
    }
    moveDown() {
        this.myEndBoss().y += 1.5;

    }

    myEndBoss() {
        return this.level.enemies[this.level.enemies.length - 1];
    }

    setWorldSounds() {
        this.character.setSounds();
        this.level.enemies.forEach((enemy) => {
            enemy.setSounds();
        });
    }

    setGameOver(whoIsDeath) {
        this.gameOver(whoIsDeath);
        this.gameIsOver = true;
    }

    gameOver(whoIsDeath) {
        if (whoIsDeath == 'EndbossDeath') {
            winSound.play();
        }
        if (whoIsDeath == 'CharacterDeath') {
            lostSound.play();
        }
        setTimeout(() => {
            clearIntervalls();
            if (whoIsDeath == 'EndbossDeath') {
                toggleClass('d_none', 'winScreen');
            }
            if (whoIsDeath == 'CharacterDeath') {
                toggleClass('d_none', 'lostScreen');
            }
        }, 2000);
    }

}

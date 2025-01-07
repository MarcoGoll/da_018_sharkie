class World {
    character = new Character("./assets/img/1.Sharkie/3.Swim/1.png");
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    level = level1;
    statusBarHealth = new StatusBar();
    poisonBar = new PoisonBar();
    coinBar = new CoinBar();
    enbossBar = new EnbossLifeBar();
    throwableObjects = [];
    hadFirstContact = false;
    collisionPower = 5;
    attackPower = 7;
    gameIsOver = false;
    isEndbossAttacking = false;

    /**
    * Initializes a new instance of the object, setting up the status bar
    * @param {HTMLCanvasElement} canvas - The canvas element used for rendering the game.
    * @param {Object} keyboard - An object representing the current state of keyboard inputs.
    */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Draws the entire game frame, including dynamic and static objects.
     * Continuously called using requestAnimationFrame.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
        this.statusBarHealth.drawText(this.ctx, 13, this.character.energy, this.statusBarHealth.x + 100, this.statusBarHealth.y + 40);
        this.addObjectToMap(this.poisonBar);
        this.poisonBar.drawText(this.ctx, 20, "x " + this.character.poisonAmmunition, this.poisonBar.x + 35, this.poisonBar.y + 40);
        this.addObjectToMap(this.coinBar);
        this.coinBar.drawText(this.ctx, 20, "x " + this.character.coinCounter, this.coinBar.x + 30, this.coinBar.y + 20);
        if (this.isEndbossAlreadyCreated()) {
            this.addObjectToMap(this.enbossBar);
            this.enbossBar.drawText(this.ctx, 18, "STRESSED WILLY", this.enbossBar.x + 112, this.enbossBar.y + 61);
        }
        // -----------END: SPACE FOR FIXED OBJECTS-----------
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => this.draw());
    }

    /**
     * Adds a single movable object to the canvas, handling mirroring if necessary.
     * @param {Object} moveableObject - The object to be drawn.
     */
    addObjectToMap(moveableObject) {
        if (moveableObject.otherDirection) {
            this.flipImage(moveableObject);
        }
        moveableObject.draw(this.ctx);
        if (moveableObject.otherDirection) {
            this.flipImageBack(moveableObject);
        }
    }

    /**
    * Flips an image horizontally before drawing.
    * @param {Object} moveableObject - The object to flip.
    */
    flipImage(moveableObject) {
        this.ctx.save();
        this.ctx.translate(moveableObject.width, 0);
        this.ctx.scale(-1, 1);
        moveableObject.x = moveableObject.x * -1;
    }

    /**
    * Restores the flipped object's original orientation.
    * @param {Object} moveableObject - The object to restore.
    */
    flipImageBack(moveableObject) {
        moveableObject.x = moveableObject.x * -1;
        this.ctx.restore();
    }

    /**
    * Adds an array of movable objects to the canvas.
    * @param {Object[]} arrayOfMovableObjects - Array of objects to be drawn.
    */
    addObjectsToMap(arryOfMoveableObjects) {
        arryOfMoveableObjects.forEach(moveableObject => {
            this.addObjectToMap(moveableObject);
        });
    }

    /**
     * Sets a reference to the game world in the character object for interaction.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
    * Starts the main game loop, including collision checks and other periodic actions.
    */
    run() {
        addStoppableIntervallId(setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.createEndboss();
        }, 150))
    }

    /**
    * Checks all types of collisions in the game world.
    */
    checkCollisions() {
        this.checkCollisionBetweenCharacterAndEnemy();
        this.checkCollisionBetweenThrowableObjectsAndEnemy();
        this.checkCollisionBetweenCharacterAndPoison();
        this.checkCollisionBetweenCharacterAndCoin();
    }

    /**
    * Checks for collisions between the character and enemies
    */
    checkCollisionBetweenCharacterAndEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (enemy instanceof Endboss) {
                    this.character.hit(this.attackPower);
                } else {
                    this.character.hit(this.collisionPower);
                }
                this.statusBarHealth.setPercentage(this.character.energy)
                if (this.character.isDead()) {
                    if (!(this.gameIsOver)) {
                        this.setGameOver('CharacterDeath');
                    }
                }
            }
        });
    }

    /**
    * Checks for collisions between throwableObjects and enemies
    */
    checkCollisionBetweenThrowableObjectsAndEnemy() {
        this.throwableObjects.forEach((bubble, indexBubble) => {
            this.level.enemies.forEach((enemy, indexEnemy) => {
                if (bubble.isColliding(enemy)) {
                    this.throwableObjects.splice(indexBubble, 1);
                    if (!(bubble.isPoisonedBubble)) {
                        enemy.hit(bubble.bubblePower);
                        if (enemy instanceof Endboss) this.enbossBar.setPercentage(enemy.energy);
                        enemy.isHitAudio.play();
                    }
                    else {
                        enemy.hit(bubble.bubblePowerPoison);
                        if (enemy instanceof Endboss) this.enbossBar.setPercentage(enemy.energy);
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

    /**
    * Checks for collisions between the character and poisons
    */
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

    /**
    * Checks for collisions between the character and coins
    */
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

    /**
    * Checks if a bubble or poisoned bubble should be thrown based on user input.
    */
    checkThrowObjects() {
        if (this.bubbleShouldBeThrown()) {
            this.throwObject('bubble');
        }
        if (this.bubblePoisonShouldBeThrown()) {
            this.throwObject('bubblePoison');

        }
    }

    /**
    * Throws a bubble or a poisoned bubble, depending on the type specified.
    * @param {string} bubbleType - The type of bubble to throw ('bubble' or 'bubblePoison').
    */
    throwObject(bubbleType) {
        if (bubbleType == "bubble") {
            this.character.isShooting = true;
            setTimeout(() => {
                let bubble = new ThrowableObject(this.character.x + 150, this.character.y + 130, false);
                this.throwableObjects.push(bubble);
                this.character.isShooting = false;
            }, 900)
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
                }, 900)
            }
        }
    }

    /**
    * Determines if a regular bubble should be thrown.
    * @returns {boolean} True if the 'Q' key is pressed and the character is not already shooting.
    */
    bubbleShouldBeThrown() {
        return this.keyboard.Q && !(this.character.isShooting);
    }

    /**
    * Determines if a poisoned bubble should be thrown.
    * @returns {boolean} True if the 'E' key is pressed and the character is not already shooting.
    */
    bubblePoisonShouldBeThrown() {
        return this.keyboard.E && !(this.character.isShooting);
    }

    /**
    * Spawns the Endboss if the character reaches the designated spawn point.
    */
    createEndboss() {
        if (this.character.x > this.level.enbossSpawnPoint && !this.hadFirstContact) {
            this.level.enemies.push(new Endboss());
            this.hadFirstContact = true;
            this.moveEndboss();
        }
    }

    /**
    * Determines if the Endboss is already created
    * @returns {boolean} True if the Endboss is already created
    */
    isEndbossAlreadyCreated() {
        return this.hadFirstContact;
    }

    /**
    * Controls the movement of the Endboss, updating its position periodically.
    */
    moveEndboss() {
        addStoppableIntervallId(setInterval(() => {
            if (!(this.myEndBoss().isDead())) {
                if (this.shouldEndbossMoveLeft()) {
                    this.moveLeft();
                }
                if (this.shouldEndbossMoveRight()) {
                    this.moveRight();
                }
                if (this.shouldEndbossMoveDown()) {
                    this.moveDown();
                }
                if (this.shouldEndbossMoveUp()) {
                    this.moveUp();
                }
                this.setEndbossAttack();
            }
        }, 1000 / 60));
    }

    /**
    * Determines if the Endboss should move left.
    * @returns {boolean} True if the Endboss's x-coordinate is greater than the character's x-coordinate - specific value.
    */
    shouldEndbossMoveLeft() {
        return this.myEndBoss().x > this.character.x - 50;
    }

    /**
    * Determines if the Endboss should move right.
    * @returns {boolean} True if the Endboss's x-coordinate is less than the character's x-coordinate - specific value.
    */
    shouldEndbossMoveRight() {
        return this.myEndBoss().x < this.character.x - 50;
    }

    /**
    * Determines if the Endboss should move down.
    * @returns {boolean} True if the Endboss's y-coordinate is less than the character's y-coordinate - specific value.
    */
    shouldEndbossMoveDown() {
        return this.myEndBoss().y < this.character.y - 100;
    }

    /**
    * Determines if the Endboss should move up.
    * @returns {boolean} True if the Endboss's y-coordinate is greater than the character's y-coordinate - specific value.
    */
    shouldEndbossMoveUp() {
        return this.myEndBoss().y > this.character.y - 100;
    }

    /**
    * Determines if the Endboss should attack.
    * @returns {boolean} True if the Endboss's x-coordinate and the character's x-coordinate are pretty close.
    */
    shouldEndbossAttack() {
        return (this.myEndBoss().x - this.character.x) < 200 && (this.myEndBoss().x - this.character.x) > 0
    }

    /**
     * Moves the Endboss left.
    */
    moveLeft() {
        this.myEndBoss().x -= 1.5;
        this.myEndBoss().otherDirection = false;
    }

    /**
     * Moves the Endboss right.
     */
    moveRight() {
        this.myEndBoss().x += 1.5;
        this.myEndBoss().otherDirection = true;
    }

    /**
    * Moves the Endboss up.
    */
    moveUp() {
        this.myEndBoss().y -= 1.5;
    }

    /**
    * Moves the Endboss down.
    */
    moveDown() {
        this.myEndBoss().y += 1.5;
    }

    /**
    * Set boolean if the Endboss is attacking or not
    */
    setEndbossAttack() {
        if (this.shouldEndbossAttack()) {
            this.myEndBoss().isAttacking = true;
            this.myEndBoss().x -= 1;
        }
        else {
            this.myEndBoss().isAttacking = false;
        }
    }

    /**
    * Retrieves the last enemy in the enemy array, which is assumed to be the Endboss.
    * @returns {Object} The Endboss object.
    */
    myEndBoss() {
        return this.level.enemies[this.level.enemies.length - 1];
    }

    /**
    * Sets sound effects for the character and all enemies in the level.
    */
    setWorldSounds() {
        this.character.setSounds();
        this.level.enemies.forEach((enemy) => {
            enemy.setSounds();
        });
    }

    /**
    * Ends the game and sets the appropriate game over state.
    * @param {string} whoIsDeath - Specifies who died ('CharacterDeath' or 'EndbossDeath').
    */
    setGameOver(whoIsDeath) {
        this.gameOver(whoIsDeath);
        this.gameIsOver = true;
    }

    /**
    * Handles game over logic, including playing sounds and displaying the appropriate end screen.
    * @param {string} whoIsDeath - Specifies who died ('CharacterDeath' or 'EndbossDeath').
    */
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

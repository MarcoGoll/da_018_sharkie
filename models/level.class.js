class Level {
    lights;
    enemies;
    backgroundObjects;
    poisons;
    coins;
    levelEndX = AMOUNTBACKGROUNDS * 1440;
    enbossSpawnPoint = (AMOUNTBACKGROUNDS * 1440) - 1800;

    /**
    * Initializes a new instance of the object, setting up the game elements such as lights, enemies,
    * background objects, coins, and poisons. 
    * @param {Array} lights - An array of light objects that will be used in the game.
    * @param {Array} enemies - An array of enemy objects that are present in the game.
    * @param {Array} backgroundObjects - An array of background objects used to render the scene.
    * @param {Array} coins - An array of coin objects that the player can collect.
    * @param {Array} poisons - An array of poison objects that may harm the player.
    */
    constructor(lights, enemies, backgroundObjects, coins, poisons) {
        this.lights = lights;
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisons = poisons;
    }
}
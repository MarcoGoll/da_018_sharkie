class Level {
    lights;
    enemies;
    backgroundObjects;
    poisons;
    coins;
    levelEndX = AMOUNTBACKGROUNDS * 1440;
    enbossSpawnPoint = (AMOUNTBACKGROUNDS * 1440) - 1800;

    constructor(lights, enemies, backgroundObjects, coins, poisons) {
        this.lights = lights;
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisons = poisons;
    }
}
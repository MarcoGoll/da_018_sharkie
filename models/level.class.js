class Level {
    lights;
    enemies;
    backgroundObjects;
    levelEndX = AMOUNTBACKGROUNDS * 1440;
    enbossSpawnPoint = 500;

    constructor(lights, enemies, backgroundObjects) {
        this.lights = lights;
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}
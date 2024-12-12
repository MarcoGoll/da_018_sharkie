class Level {
    lights;
    enemies;
    backgroundObjects;
    levelEndX = AMOUNTBACKGROUNDS * 1440;

    constructor(lights, enemies, backgroundObjects) {
        this.lights = lights;
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}
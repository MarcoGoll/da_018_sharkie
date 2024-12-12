class Level {
    lights;
    enemiesPufferfish;
    enemiesJellyfish;
    backgroundObjects;
    levelEndX = AMOUNTBACKGROUNDS * 1440;

    constructor(lights, enemiesPufferfish, enemiesJellyfish, backgroundObjects) {
        this.lights = lights;
        this.enemiesPufferfish = enemiesPufferfish;
        this.enemiesJellyfish = enemiesJellyfish;
        this.backgroundObjects = backgroundObjects;
    }
}
const LEVEL1 = new Level(
    [
        //Lights
    ],
    [
        //Enemies
        new Pufferfish(((Math.random() * 500) + 180), ((Math.random() * 100)), 100, 95, "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"),
        //new Pufferfish(((Math.random() * 500) + 180), ((Math.random() * 100)), 100, 95, "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"),
        //new Pufferfish(((Math.random() * 500) + 180), ((Math.random() * 100)), 100, 95, "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"),
        //new Pufferfish(((Math.random() * 500) + 180), ((Math.random() * 100)), 100, 95, "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"),
        //new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 150, 180, "./assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
        //new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 150, 180, "./assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
        new Jellyfish(((Math.random() * 500) + 180), ((Math.random() * 500)), 150, 180, "./assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png"),
    ],
    [
        //Backgrounds
    ]

);

setBackgroundsAndLights(AMOUNTBACKGROUNDS);

function setBackgroundsAndLights(amount) {
    let counter = 0;
    for (let i = 0; i < amount; i++) {
        LEVEL1.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/5. Water/L1.png"));
        LEVEL1.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/4.Fondo 2/L1.png"));
        LEVEL1.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/3.Fondo 1/L1.png"));
        LEVEL1.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/2. Floor/L1.png"));
        LEVEL1.lights.push(new Light(counter * 720, "./assets/img/3. Background/Layers/1. Light/1.png"));
        counter++;
        LEVEL1.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/5. Water/L2.png"));
        LEVEL1.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/4.Fondo 2/L2.png"));
        LEVEL1.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/3.Fondo 1/L2.png"));
        LEVEL1.backgroundObjects.push(new BackgroundObject(counter * 720, "./assets/img/3. Background/Layers/2. Floor/L2.png"));
        LEVEL1.lights.push(new Light(counter * 720, "./assets/img/3. Background/Layers/1. Light/2.png"));
        counter++;
    }
}

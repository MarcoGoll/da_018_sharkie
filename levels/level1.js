const LEVEL1 = new Level(
    [
        //Lights
    ],
    [
        //Enemies
        new PufferfishGreen(((Math.random() * 5000) + 300), ((Math.random() * 400)), 80, 75, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishOrange(((Math.random() * 5000) + 300), ((Math.random() * 400)), 90, 85, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishRed(((Math.random() * 5000) + 300), ((Math.random() * 400)), 100, 95, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishGreen(((Math.random() * 5000) + 300), ((Math.random() * 400)), 80, 75, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishOrange(((Math.random() * 5000) + 300), ((Math.random() * 400)), 90, 85, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishRed(((Math.random() * 5000) + 300), ((Math.random() * 400)), 100, 95, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishGreen(((Math.random() * 5000) + 300), ((Math.random() * 400)), 80, 75, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishOrange(((Math.random() * 5000) + 300), ((Math.random() * 400)), 90, 85, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishRed(((Math.random() * 5000) + 300), ((Math.random() * 400)), 100, 95, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishGreen(((Math.random() * 5000) + 300), ((Math.random() * 400)), 80, 75, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishOrange(((Math.random() * 5000) + 300), ((Math.random() * 400)), 90, 85, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishRed(((Math.random() * 5000) + 300), ((Math.random() * 400)), 100, 95, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),

        new PufferfishGreen(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 80, 75, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishOrange(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 90, 85, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishRed(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 100, 95, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishGreen(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 80, 75, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishOrange(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 90, 85, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishRed(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 100, 95, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishGreen(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 80, 75, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishOrange(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 90, 85, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new PufferfishRed(((Math.random() * 5000) + 5300), ((Math.random() * 400)), 100, 95, './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),

        new JellyfishLila(((Math.random() * 2500) + 300), ((Math.random() * 400)), 90, 120, './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'),
        new JellyfishLila(((Math.random() * 2500) + 300), ((Math.random() * 400)), 90, 120, './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'),
        new JellyfishLila(((Math.random() * 2500) + 300), ((Math.random() * 400)), 90, 120, './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'),
        new JellyfishLila(((Math.random() * 2500) + 300), ((Math.random() * 400)), 90, 120, './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png'),
        new JellyfishYellow(((Math.random() * 2500) + 300), ((Math.random() * 400)), 110, 140, './assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png'),
        new JellyfishYellow(((Math.random() * 2500) + 300), ((Math.random() * 400)), 110, 140, './assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png'),
        new JellyfishYellow(((Math.random() * 2500) + 300), ((Math.random() * 400)), 110, 140, './assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png'),
        new JellyfishGreen(((Math.random() * 2500) + 300), ((Math.random() * 400)), 130, 160, './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png'),
        new JellyfishGreen(((Math.random() * 2500) + 300), ((Math.random() * 400)), 130, 160, './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png'),
        new JellyfishPink(((Math.random() * 2500) + 300), ((Math.random() * 400)), 150, 180, './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png'),
        new JellyfishPink(((Math.random() * 2500) + 300), ((Math.random() * 400)), 150, 180, './assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png'),


    ],
    [
        //Backgrounds
    ],
    [
        //Coins
        new Coin(470, 200),
        new Coin(520, 150),
        new Coin(570, 100),
        new Coin(620, 150),
        new Coin(670, 200),

        new Coin(970, 300),
        new Coin(1020, 350),
        new Coin(1070, 400),
        new Coin(1120, 350),
        new Coin(1170, 300),

        new Coin(1570, 150),
        new Coin(1620, 100),
        new Coin(1670, 50),
        new Coin(1720, 100),
        new Coin(1770, 150),

        new Coin(2070, 320),
        new Coin(2120, 370),
        new Coin(2170, 420),
        new Coin(2220, 370),
        new Coin(2270, 320),

    ],
    [
        //Poison CHEATER
        new Poison(10, 0),
        new Poison(10, 80),
        new Poison(10, 160),
        new Poison(10, 240),
        new Poison(10, 320),
        new Poison(10, 400),
        new Poison(60, 0),
        new Poison(60, 80),
        new Poison(60, 160),
        new Poison(60, 240),
        new Poison(60, 320),
        new Poison(60, 400),
        //Poison in WORLD
        new Poison(320, 50),
        new Poison(620, 300),
        new Poison(820, 350),
        new Poison(1020, 380),
        new Poison(1320, 20),
        new Poison(1620, 200),
        new Poison(1920, 250),
        new Poison(2200, 350),
        new Poison(2590, 80),
        new Poison(3000, 210),
        new Poison(3500, 10),
        new Poison(3550, 350),
        new Poison(3600, 210),
        new Poison(3700, 310),

    ],

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

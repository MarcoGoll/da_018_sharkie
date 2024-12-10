let canvasRef;
let world;


function init() {
    canvasRef = document.getElementById('canvas');
    world = new World(canvasRef);





    console.log('My character: ', world.character);
    console.log('My Jelly enemies: ', world.enemiesJellyfish);
    console.log('My Puffer enemies: ', world.enemiesPufferfish);
}


const WIDTH = 720;
const HEIGHT = 480;
const X = 0;
const Y = 0;
const AMOUNTBACKGROUNDS = 5;

let canvasRef;
let world;
let keyboard = new Keyboard();


function init() {
    canvasRef = document.getElementById('canvas');
    world = new World(canvasRef, keyboard);

    console.log('My character: ', world.character);
    console.log('My Jelly enemies: ', world.enemiesJellyfish);
    console.log('My Puffer enemies: ', world.enemiesPufferfish);
}

window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 37:
        case 65:
            keyboard.LEFT = true;
            break;
        case 38:
        case 87:
            keyboard.UP = true;
            break;
        case 39:
        case 68:
            keyboard.RIGHT = true;
            break;
        case 40:
        case 83:
            keyboard.DOWN = true;
            break;
        case 32:
            keyboard.SPACE = true;
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 37:
        case 65:
            keyboard.LEFT = false;
            break;
        case 38:
        case 87:
            keyboard.UP = false;
            break;
        case 39:
        case 68:
            keyboard.RIGHT = false;
            break;
        case 40:
        case 83:
            keyboard.DOWN = false;
            break;
        case 32:
            keyboard.SPACE = false;
            break;
        default:
            break;
    }
})
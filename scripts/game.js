

let canvasRef;
let world;
let keyboard = new Keyboard();


function init() {
    canvasRef = document.getElementById('canvas');
    world = new World(canvasRef, keyboard);
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
        case 'ArrowLeft':
            keyboard.LEFT = true;
            break;
        case 'w':
        case 'ArrowUp':
            keyboard.UP = true;
            break; a
        case 'd':
        case 'ArrowRight':
            keyboard.RIGHT = true;
            break;
        case 's':
        case 'ArrowDown':
            keyboard.DOWN = true;
            break;
        case ' ':
            keyboard.SPACE = true;
            break;
        case 'Shift':
            keyboard.SHIFT = true;
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
        case 'ArrowLeft':
            keyboard.LEFT = false;
            break;
        case 'w':
        case 'ArrowUp':
            keyboard.UP = false;
            break; a
        case 'd':
        case 'ArrowRight':
            keyboard.RIGHT = false;
            break;
        case 's':
        case 'ArrowDown':
            keyboard.DOWN = false;
            break;
        case ' ':
            keyboard.SPACE = false;
            break;
        case 'Shift':
            keyboard.SHIFT = false;
            break;
        default:
            break;
    }
})
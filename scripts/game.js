let canvasRef;
let world;
let keyboard = new Keyboard();
let gameSound = new Audio('./assets/audio/gamesound.mp3');
gameSound.volume = 0.15;
gameSound.loop = true;

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
        case 'q':
            keyboard.Q = true;
            break;
        case 'e':
            keyboard.E = true;
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
        case 'q':
            keyboard.Q = false;
            break;
        case 'e':
            keyboard.E = false;
            break;
        default:
            break;
    }
})

window.addEventListener('mousemove', (event) => {
    //gameSound.play();
})

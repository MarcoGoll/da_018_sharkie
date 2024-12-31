let canvasRef;
let world;
let keyboard = new Keyboard();
let upBTNRef = document.getElementById('btnUP');
let leftBTNRef = document.getElementById('btnLeft');
let downBTNRef = document.getElementById('btnDown');
let rightBTNRef = document.getElementById('btnRight');
let tailAttackBTNRef = document.getElementById('btnTailAttack');
let bubbleAttackBTNRef = document.getElementById('btnBubbleAttack');
let poisonAttackBTNRef = document.getElementById('btnPoisonAttack');
let menueRef = document.getElementById('menue');
let controlMenueRef = document.getElementById('controlMenue');
let lostScreenRef = document.getElementById('lostScreen');
let winScreenRef = document.getElementById('winScreen');
let impressumMenueRef = document.getElementById('impressumMenue');
let controlBTNAreaALLRef = document.getElementById('controlBTNAreaALL');
let descriptionMenueRef = document.getElementById('descriptionMenue');
let enemiesMenueRef = document.getElementById('enemiesMenue');
let itemsMenueRef = document.getElementById('itemsMenue');

function start() {
    canvasRef = document.getElementById('canvas');
    initLevel();
    world = new World(canvasRef, keyboard);
    initSounds();
    setTimeout(() => {
        showGame();
    }, 300);
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keyboard.LEFT = true;
            break;
        case 'w':
        case 'W':
        case 'ArrowUp':
            keyboard.UP = true;
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            keyboard.RIGHT = true;
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            keyboard.DOWN = true;
            break;
        case ' ':
            keyboard.SPACE = true;
            break;
        case 'q':
        case 'Q':
            keyboard.Q = true;
            break;
        case 'e':
        case 'E':
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

upBTNRef.addEventListener('mousedown', () => {
    keyboard.UP = true;
})
upBTNRef.addEventListener('mouseup', () => {
    keyboard.UP = false;
})
upBTNRef.addEventListener('mouseout', () => {
    keyboard.UP = false;
})

leftBTNRef.addEventListener('mousedown', () => {
    keyboard.LEFT = true;
})
leftBTNRef.addEventListener('mouseup', () => {
    keyboard.LEFT = false;
})
leftBTNRef.addEventListener('mouseout', () => {
    keyboard.LEFT = false;
})

downBTNRef.addEventListener('mousedown', () => {
    keyboard.DOWN = true;
})
downBTNRef.addEventListener('mouseup', () => {
    keyboard.DOWN = false;
})
downBTNRef.addEventListener('mouseout', () => {
    keyboard.DOWN = false;
})

rightBTNRef.addEventListener('mousedown', () => {
    keyboard.RIGHT = true;
})
rightBTNRef.addEventListener('mouseup', () => {
    keyboard.RIGHT = false;
})
rightBTNRef.addEventListener('mouseout', () => {
    keyboard.RIGHT = false;
})

tailAttackBTNRef.addEventListener('mousedown', () => {
    keyboard.SPACE = true;
})
tailAttackBTNRef.addEventListener('mouseup', () => {
    keyboard.SPACE = false;
})
tailAttackBTNRef.addEventListener('mouseout', () => {
    keyboard.SPACE = false;
})

bubbleAttackBTNRef.addEventListener('mousedown', () => {
    keyboard.Q = true;
})
bubbleAttackBTNRef.addEventListener('mouseup', () => {
    keyboard.Q = false;
})
bubbleAttackBTNRef.addEventListener('mouseout', () => {
    keyboard.Q = false;
})

poisonAttackBTNRef.addEventListener('mousedown', () => {
    keyboard.E = true;
})
poisonAttackBTNRef.addEventListener('mouseup', () => {
    keyboard.E = false;
})
poisonAttackBTNRef.addEventListener('mouseout', () => {
    keyboard.E = false;
})

function initSounds() {
    setSoundVolume();
    gameSound.play();
}

// FULLSCREEN
function startFullscreen() {
    let fullScreenDiv = document.getElementById('canvas');
    enterFullscreen(fullScreenDiv);
}
function endFullscreen() {
    exitFullscreen();
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) { // for IE (remove June 15,2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) { // for IOS Safari
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function clearIntervalls() {
    intervallIds.forEach(intervallId => {
        clearInterval(intervallId);
    })
}

function showGame() {
    menueRef.classList.add('d_none');
    controlMenueRef.classList.add('d_none');
    descriptionMenueRef.classList.add('d_none');
    enemiesMenueRef.classList.add('d_none');
    itemsMenueRef.classList.add('d_none');
    lostScreenRef.classList.add('d_none');
    winScreenRef.classList.add('d_none');
    impressumMenueRef.classList.add('d_none');
    controlBTNAreaALLRef.classList.remove('d_none');
}

function showMenue() {
    menueRef.classList.remove('d_none');
    controlMenueRef.classList.add('d_none');
    descriptionMenueRef.classList.add('d_none');
    enemiesMenueRef.classList.add('d_none');
    itemsMenueRef.classList.add('d_none');
    impressumMenueRef.classList.add('d_none');
    lostScreenRef.classList.add('d_none');
    winScreenRef.classList.add('d_none');
    controlBTNAreaALLRef.classList.add('d_none');
}

function showDescription() {
    menueRef.classList.add('d_none');
    controlMenueRef.classList.add('d_none');
    descriptionMenueRef.classList.remove('d_none');
    enemiesMenueRef.classList.add('d_none');
    itemsMenueRef.classList.add('d_none');
    impressumMenueRef.classList.add('d_none');
    lostScreenRef.classList.add('d_none');
    winScreenRef.classList.add('d_none');
    controlBTNAreaALLRef.classList.add('d_none');
}

function showControl() {
    menueRef.classList.add('d_none');
    controlMenueRef.classList.remove('d_none');
    descriptionMenueRef.classList.add('d_none');
    enemiesMenueRef.classList.add('d_none');
    itemsMenueRef.classList.add('d_none');
    impressumMenueRef.classList.add('d_none');
    lostScreenRef.classList.add('d_none');
    winScreenRef.classList.add('d_none');
    controlBTNAreaALLRef.classList.add('d_none');
}

function showImpressum() {
    menueRef.classList.add('d_none');
    controlMenueRef.classList.add('d_none');
    descriptionMenueRef.classList.add('d_none');
    enemiesMenueRef.classList.add('d_none');
    itemsMenueRef.classList.add('d_none');
    impressumMenueRef.classList.remove('d_none');
    lostScreenRef.classList.add('d_none');
    winScreenRef.classList.add('d_none');
    controlBTNAreaALLRef.classList.add('d_none');
}

function showEnemies() {
    menueRef.classList.add('d_none');
    controlMenueRef.classList.add('d_none');
    descriptionMenueRef.classList.add('d_none');
    enemiesMenueRef.classList.remove('d_none');
    itemsMenueRef.classList.add('d_none');
    impressumMenueRef.classList.add('d_none');
    lostScreenRef.classList.add('d_none');
    winScreenRef.classList.add('d_none');
    controlBTNAreaALLRef.classList.add('d_none');
}

function showItems() {
    menueRef.classList.add('d_none');
    controlMenueRef.classList.add('d_none');
    descriptionMenueRef.classList.add('d_none');
    enemiesMenueRef.classList.add('d_none');
    itemsMenueRef.classList.remove('d_none');
    impressumMenueRef.classList.add('d_none');
    lostScreenRef.classList.add('d_none');
    winScreenRef.classList.add('d_none');
    controlBTNAreaALLRef.classList.add('d_none');
}
/*====================================================================================================
    GLOBAL VARIABLES
====================================================================================================*/
let canvasRef;
let world;
let keyboard = new Keyboard();
let upBTNRef = document.getElementById('btnUP');
let leftBTNRef = document.getElementById('btnLeft');
let downBTNRef = document.getElementById('btnDown');
let rightBTNRef = document.getElementById('btnRight');
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

/**
* starts the game
*/
function start() {
    canvasRef = document.getElementById('canvas');
    initLevel();
    world = new World(canvasRef, keyboard);
    initSounds();
    setTimeout(() => {
        showX('game');
    }, 300);
}

/**
* add EventListener for Keydown
*/
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

/**
* add EventListener for Keyup
*/
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keyboard.LEFT = false;
            break;
        case 'w':
        case 'W':
        case 'ArrowUp':
            keyboard.UP = false;
            break; a
        case 'd':
        case 'D':
        case 'ArrowRight':
            keyboard.RIGHT = false;
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            keyboard.DOWN = false;
            break;
        case 'q':
        case 'Q':
            keyboard.Q = false;
            break;
        case 'e':
        case 'E':
            keyboard.E = false;
            break;
        default:
            break;
    }
})

/**
* add EventListener for touchstart
*/
upBTNRef.addEventListener('touchstart', e => {
    e.preventDefault();
    keyboard.UP = true;
})

/**
* add EventListener for touchend
*/
upBTNRef.addEventListener('touchend', e => {
    keyboard.UP = false;
})

/**
* add EventListener for touchstart
*/
leftBTNRef.addEventListener('touchstart', e => {
    e.preventDefault();
    keyboard.LEFT = true;
})

/**
* add EventListener for touchend
*/
leftBTNRef.addEventListener('touchend', e => {
    keyboard.LEFT = false;
})

/**
* add EventListener for touchstart
*/
downBTNRef.addEventListener('touchstart', e => {
    e.preventDefault();
    keyboard.DOWN = true;
})

/**
* add EventListener for touchend
*/
downBTNRef.addEventListener('touchend', e => {
    keyboard.DOWN = false;
})

/**
* add EventListener for touchstart
*/
rightBTNRef.addEventListener('touchstart', e => {
    e.preventDefault();
    keyboard.RIGHT = true;
})

/**
* add EventListener for touchend
*/
rightBTNRef.addEventListener('touchend', e => {
    keyboard.RIGHT = false;
})

/**
* add EventListener for touchstart
*/
bubbleAttackBTNRef.addEventListener('touchstart', e => {
    e.preventDefault();
    keyboard.Q = true;
})

/**
* add EventListener for touchend
*/
bubbleAttackBTNRef.addEventListener('touchend', e => {
    keyboard.Q = false;
})

/**
* add EventListener for touchstart
*/
poisonAttackBTNRef.addEventListener('touchstart', e => {
    e.preventDefault();
    keyboard.E = true;
})

/**
* add EventListener for touchend
*/
poisonAttackBTNRef.addEventListener('touchend', e => {
    keyboard.E = false;
})

/**
* add EventListener for touchend
*/
function initSounds() {
    setSoundsMuted();
    gameSound.play();
}

/**
* Add id of stoppable intervall to the array intervallIds
*/
function addStoppableIntervallId(id) {
    intervallIds.push(id);
}

/**
* Clears all intervals for which the interval id is present in the array intervallIds
*/
function clearIntervalls() {
    intervallIds.forEach(intervallId => {
        clearInterval(intervallId);
    })
}

/**
* Displays the overlay that matches the indicator and hides all other overlays
* @param {string} areaToBeDisplayed - Indicator which overlay should be displayed
*/
function showX(areaToBeDisplayed) {
    menueRef.classList.add('d_none');
    controlMenueRef.classList.add('d_none');
    descriptionMenueRef.classList.add('d_none');
    enemiesMenueRef.classList.add('d_none');
    itemsMenueRef.classList.add('d_none');
    lostScreenRef.classList.add('d_none');
    winScreenRef.classList.add('d_none');
    impressumMenueRef.classList.add('d_none');
    controlBTNAreaALLRef.classList.add('d_none');

    switch (areaToBeDisplayed) {
        case 'game':
            controlBTNAreaALLRef.classList.remove('d_none');
            break;
        case 'menue':
            menueRef.classList.remove('d_none');
            break;
        case 'description':
            descriptionMenueRef.classList.remove('d_none');
            break;
        case 'control':
            controlMenueRef.classList.remove('d_none');
            break;
        case 'impressum':
            impressumMenueRef.classList.remove('d_none');
            break;
        case 'enemies':
            enemiesMenueRef.classList.remove('d_none');
            break;
        case 'items':
            itemsMenueRef.classList.remove('d_none');
            break;
        default:
            menueRef.classList.remove('d_none');
            break;
    }
}
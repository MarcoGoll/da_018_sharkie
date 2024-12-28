let muteMode = true;

/**
* Toggled a class of an HTML element
* @param {string} className - Name of the class
* @param {number} identifier - Id of the HTML element
*/
function toggleClass(className, identifier) {
    let element = document.getElementById(identifier);
    element.classList.toggle(className);
}

/**
* change music on/off
*/
function changeMuteMode() {
    let muteBtnRef = document.getElementById('muteBtn');
    if (muteMode == true) {
        muteMode = false;
        muteBtnRef.innerHTML = '<img src="./assets/img/icons/googleFontsIcons/volume_on.svg">';
    } else {
        muteMode = true;
        muteBtnRef.innerHTML = '<img src="./assets/img/icons/googleFontsIcons/volume_off.svg">';
    }
    setSoundVolume();
}

function setSoundVolume() {
    if (muteMode) {
        poisonSound.volume = 0;
        coinSound.volume = 0;
        shootBubbleSound.volume = 0;
        gameSound.volume = 0;
        lostSound.volume = 0;
        winSound.volume = 0;
    }
    else {
        poisonSound.volume = 0.4;
        coinSound.volume = 1;
        shootBubbleSound.volume = 0.4;
        gameSound.volume = 0.15;
        lostSound.volume = 1;
        winSound.volume = 1;
    }

    try {
        world.setWorldSounds();
    } catch (error) {

    }
}
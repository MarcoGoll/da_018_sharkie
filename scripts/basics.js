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
* change muteMode on/off
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
    setSoundsMuted();
}

/**
* set muted attribut of global sounds
*/
function setSoundsMuted() {
    if (muteMode) {
        poisonSound.muted = true;
        coinSound.muted = true;
        shootBubbleSound.muted = true;
        gameSound.muted = true;
        lostSound.muted = true;
        winSound.muted = true;
    }
    else {
        poisonSound.muted = false;
        coinSound.muted = false;
        shootBubbleSound.muted = false;
        gameSound.muted = false;
        gameSound.loop = true;
        lostSound.muted = false;
        winSound.muted = false;
    }

    try {
        world.setWorldSounds();
    } catch (error) {

    }
}
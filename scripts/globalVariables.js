const WIDTH = 720;
const HEIGHT = 480;
const X = 0;
const Y = 0;
const AMOUNTBACKGROUNDS = 3;

let poisonSound = new Audio('./assets/audio/poison.mp3');
poisonSound.volume = 0.4;
let coinSound = new Audio('./assets/audio/coin.mp3');
coinSound.volume = 1;
let shootBubbleSound = new Audio('./assets/audio/shootBubble.mp3');
shootBubbleSound.volume = 0.4;
let lostSound = new Audio('./assets/audio/lost.wav');
lostSound.volume = 1;
let winSound = new Audio('./assets/audio/success.mp3');
winSound.volume = 1;
let gameSound = new Audio('./assets/audio/gamesound.mp3');
gameSound.volume = 0.15;
gameSound.loop = true;



let intervallIds = [];
let muteMode = true;


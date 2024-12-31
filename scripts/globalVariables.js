const WIDTH = 720;
const HEIGHT = 480;
const X = 0;
const Y = 0;
const AMOUNTBACKGROUNDS = 3;

let poisonSound = new Audio('./assets/audio/poison.mp3');
let coinSound = new Audio('./assets/audio/coin.mp3');
let shootBubbleSound = new Audio('./assets/audio/shootBubble.mp3');
let lostSound = new Audio('./assets/audio/lost.wav');
let winSound = new Audio('./assets/audio/success.mp3');
let gameSound = new Audio('./assets/audio/gamesound.mp3');
gameSound.loop = true;

let intervallIds = [];


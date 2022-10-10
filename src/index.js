import { LEVEL, OBJECT_TYPE } from './setup';
import { randomMovement } from './ghostMoves';

// Classes
import { GameBoard } from './GameBoard';
import { Pacman } from './Pacman';
import { Ghost } from './Ghost';

// Sounds
const soundDot = require('url:./sounds/munch.mp3');
const soundPill = require('url:./sounds/pill.mp3');
const soundGameStart = require('url:./sounds/game_start.mp3');
const soundGameOver = require('url:./sounds/death.mp3');
const soundGhost = require('url:./sounds/eat_ghost.mp3');

// Dom elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

// Mobile buttons
const upButton = document.querySelector('#up-button');
const leftButton = document.querySelector('#left-button');
const rightButton = document.querySelector('#right-button');
const downButton = document.querySelector('#down-button');

// Game constants
const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Initial setup
let score = 0;
let timer = 0;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

// Audio
const playAudio = audio => {
  const soundEffect = new Audio(audio);
  soundEffect.play();
};

const gameOver = pacman => {
  playAudio(soundGameOver);

  document.removeEventListener('keydown', e =>
    pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
  );

  gameBoard.showGameStatus(gameWin);
  clearInterval(timer);
  startButton.classList.remove('hide');
};

const checkCollision = (pacman, ghosts) => {
  const collidedGhost = ghosts.find(ghost => pacman.pos === ghost.pos);

  if (collidedGhost) {
    // Pacman eats ghost
    if (pacman.powerPill) {
      playAudio(soundGhost);

      gameBoard.removeObject(collidedGhost.pos, [
        OBJECT_TYPE.GHOST,
        OBJECT_TYPE.SCARED,
        collidedGhost.name,
      ]);
      collidedGhost.pos = collidedGhost.startPos;
      score += 100;
    } else {
      gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PACMAN]);
      gameBoard.rotateDiv(pacman.pos, 0);
      gameOver(pacman);
    }
  }
};

const gameLoop = (pacman, ghosts) => {
  // Move pacman and check ghost collision
  gameBoard.moveCharacter(pacman);
  checkCollision(pacman, ghosts);

  // Move ghost and check ghost collision
  ghosts.forEach(ghost => gameBoard.moveCharacter(ghost));
  checkCollision(pacman, ghosts);

  // Check if pacman eats dots
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.DOT)) {
    playAudio(soundDot);

    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.DOT]);
    gameBoard.dotCount--;
    score += 10;
  }

  // Check if pacman eats powerpill
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.PILL)) {
    playAudio(soundPill);

    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PILL]);
    pacman.powerPill = true;
    score += 50;

    clearTimeout(powerPillTimer);
    powerPillTimer = setTimeout(
      () => (pacman.powerPill = false),
      POWER_PILL_TIME
    );
  }

  // Change ghost scare mode depending on powerpill
  if (pacman.powerPill !== powerPillActive) {
    powerPillActive = pacman.powerPill;
    ghosts.forEach(ghost => (ghost.isScared = pacman.powerPill));
  }

  // Check if all dots have been eaten
  if (gameBoard.dotCount === 0) {
    gameWin = true;
    gameOver(pacman);
  }

  // Show the score
  scoreTable.innerHTML = score;
};

const startGame = () => {
  playAudio(soundGameStart);

  gameWin = false;
  powerPillActive = false;
  score = 0;

  startButton.classList.add('hide');

  gameBoard.createGrid(LEVEL);

  const pacman = new Pacman(2, 289);
  gameBoard.addObject(289, [OBJECT_TYPE.PACMAN]);
  document.addEventListener('keydown', e =>
    pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
  );

  // For mobile version
  upButton.addEventListener('click', e =>
    pacman.handleKeyInput(
      { ...e, keyCode: 38, key: 'ArrowUp' },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  leftButton.addEventListener('click', e =>
    pacman.handleKeyInput(
      { ...e, keyCode: 37, key: 'ArrowLeft' },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  rightButton.addEventListener('click', e =>
    pacman.handleKeyInput(
      { ...e, keyCode: 39, key: 'ArrowRight' },
      gameBoard.objectExist.bind(gameBoard)
    )
  );
  downButton.addEventListener('click', e =>
    pacman.handleKeyInput(
      { ...e, keyCode: 40, key: 'ArrowDown' },
      gameBoard.objectExist.bind(gameBoard)
    )
  );

  const ghosts = [
    new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
    new Ghost(4, 209, randomMovement, OBJECT_TYPE.PINKY),
    new Ghost(3, 230, randomMovement, OBJECT_TYPE.INKY),
    new Ghost(2, 251, randomMovement, OBJECT_TYPE.CLYDE),
  ];

  timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);
};

// Initialize game:
startButton.addEventListener('click', startGame);

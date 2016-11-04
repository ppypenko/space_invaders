"use strict";
var done = false;

function setupGame() {
    if (!done) {
        console.log("type tbeatty for the easter egg");
        buildTitle();
        buildInstructionScreen();
        buildLevelOneScreen();
        buildLevelTwoScreen();
        buildLevelThreeScreen();
        buildVictoryScreen();
        buildGameOverScreen();
        createBooms();
        createEnemies();
        createaiPlayer();
        buildButtons();
        buildScore();
        buildaiPlayer();
        buildHealthBoard();
        setButtonListeners();
        setButtons();
        playMusic();
        done = true;
    }
}

function gameOverScreenView() {
    hideEnemies();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    hideLevelTwoScreen();
    hideLevelThreeScreen();
    hideLevelThreeScreen();
    resetEnemies();
    resetaiPlayer();
    hideaiPlayer();
    hideHealthBoard();
    showGameOverScreen();
    showContinueButton();
}

function instructionScreenView() {
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    showInstructionScreen();
    showMenuButton();
}

function levelOneView() {
    incrementEnemyLevel(counter);
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    showLevelOneScreen();
    resetEnemies();
    resetaiPlayer();
    showScore();
    showHealthBoard();
    showPlayButton();
    showBattlers(64);
    GAME_STATES.GAME_ON = true;
}

function levelOnePlay() {
    aiPlayerHit();
    nextEnemy(32, 1);
    enemyBeat();
    aiPlayerLost();
    fireEnemyShots();
    moveEnemyShots();
    hitEnemies();
    moveEnemies();
    aiPlayerFuncs();
    hidePlayButton();
}

function levelTwoView() {
    incrementEnemyLevel(counter);
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    hideLevelOneScreen();
    showLevelTwoScreen();
    hideEnemies();
    hideaiPlayer();
    resetEnemies();
    resetaiPlayer();
    showScore();
    showHealthBoard();
    showPlayButton();
    showBattlers(128);
}

function levelTwoPlay() {
    aiPlayerHit();
    nextEnemy(64, 1);
    enemyBeat();
    aiPlayerLost();
    fireEnemyShots();
    moveEnemyShots();
    hitEnemies();
    moveEnemies();
    aiPlayerFuncs();
    hidePlayButton();
}

function levelThreeView() {
    incrementEnemyLevel(counter);
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    showLevelThreeScreen();
    hideEnemies();
    hideaiPlayer();
    resetEnemies();
    resetaiPlayer();
    showScore();
    showHealthBoard();
    showPlayButton();
    showBattlers(256);
}

function levelThreePlay() {
    aiPlayerHit();
    nextEnemy(128, 1);
    enemyBeat();
    aiPlayerLost();
    fireEnemyShots();
    moveEnemyShots();
    hitEnemies();
    moveEnemies();
    aiPlayerFuncs();
    hidePlayButton();
}

function moveOn() {
    gameStart();
}

function nextLevel() {
    switch (counter) {
    case 0:
        levelOneView();
        break;
    case 1:
        levelTwoView();
        break;
    case 2:
        levelThreeView();
        break;
    case 3:
        gameVictory();
        break;
    }
}

function nextLevelPlay() {
    switch (counter) {
    case 0:
        levelOnePlay();
        break;
    case 1:
        levelTwoPlay();
        break;
    case 2:
        levelThreePlay();
        break;
    }
}

function titleScreenView() {
    hideInstructionScreen();
    hideMenuButton();
    hideContinueButton();
    hideVictoryScreen();
    hideGameOverScreen();
    resetEnemyLevel();
    showTitle();
    showPlayGameButton();
    showInstructionButton();
}

function victoryScreenView() {
    hideEnemies();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    hideLevelThreeScreen();
    hideEnemies();
    resetEnemies();
    resetaiPlayer();
    hideaiPlayer();
    hideScore();
    hideHealthBoard();
    hideLevelTwoScreen();
    hideLevelThreeScreen(); // when all levels are implemented probably this will be the only level we would need to hide
    showVictoryScreen();
    showContinueButton();

}
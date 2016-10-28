"use strict";

function setupGame() {
    buildTitle();
    buildInstructionScreen();
    buildLevelOneScreen();
    createEnemies();
    createaiPlayer();
    createaiPlayer();
    buildButtons();
    buildScore();
    buildaiPlayer();
    buildHealthBoard();
    setButtonListeners();
    setButtons();
}

function titleScreenView() {
    hideInstructionScreen();
    hideMenuButton();
    showTitle();
    showPlayGameButton();
    showInstructionButton();
}

function instructionScreenView() {
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    showInstructionScreen();
    showMenuButton();
}

function levelOneView() {
    if (!GAME_STATES.GAME_ON) {
        hideTitle();
        hidePlayGameButton();
        hideInstructionButton();
        showLevelOneScreen();
        resetEnemies();
        resetaiPlayer();
        showScore();
        showHealthBoard();
        showPlayButton();
        GAME_STATES.GAME_ON = true;
    }
}

function levelOnePlay() {
    aiPlayerHit();
    enemyBeat();
    aiPlayerLost();
    fireEnemyShots();
    moveEnemyShots();
    hitEnemies();
    nextEnemy();
    moveEnemies();
    aiPlayerFuncs();
    hidePlayButton();
}

function gameVictory() {
    hideaiPlayer();
    hideEnemies();
    hideLevelOneScreen();
}

function gameOver() {
    hideaiPlayer();
    hideEnemies();
    hideLevelOneScreen();
}

function levelTwoView() {
    showLevelTwoScreen();
}

function levelThreeView() {
    showLevelThreeScreen();
}

function victoryView() {

}

function gameOverView() {

}
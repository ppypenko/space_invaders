"use strict";

function setupGame() {
    buildTitle();
    buildInstructionScreen();
    buildLevelOneScreen();
    buildLevelTwoScreen();
    buildLevelThreeScreen();
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
        showBattlers();
        GAME_STATES.GAME_ON = true;
    }
}

function levelOnePlay() {
    aiPlayerHit();
    nextEnemy();
    enemyBeat();
    aiPlayerLost();
    fireEnemyShots();
    moveEnemyShots();
    hitEnemies();
    moveEnemies();
    aiPlayerFuncs();
    hidePlayButton();
}

function victoryScreenView() {
    hideaiPlayer();
    hideEnemies();
    hideLevelOneScreen();
    
}

function gameOverScreenView() {
    hideaiPlayer();
    hideEnemies();
    hideLevelOneScreen();
}

function levelTwoView() {
    hideLevelOneScreen();
    showLevelTwoScreen();
}

function levelTwoPlay() {

}

function levelThreeView() {
    showLevelThreeScreen();
}

function levelTwoPlay() {

}


function victoryView() {

}

function gameOverView() {

}
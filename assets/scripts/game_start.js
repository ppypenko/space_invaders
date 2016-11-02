"use strict";

function setupGame() {
    buildTitle();
    buildInstructionScreen();
    buildLevelOneScreen();
    buildLevelTwoScreen();
    buildLevelThreeScreen();
    createEnemies();
    createBooms();
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
        showBattlers(32);
        GAME_STATES.GAME_ON = true;
    }
}

function levelOnePlay() {
    aiPlayerHit();
    nextEnemy(16, 1);
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
    hideLevelTwoScreen();
    hideLevelThreeScreen(); // when all levels are implemented probably this will be the only level we would need to hide

    buildVictoryScreen();
    showVictoryScreen();

}

function gameOverScreenView() {
    hideaiPlayer();
    hideEnemies();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    hideLevelThreeScreen();

    buildGameOverScreen();
    showGameOverScreen();
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

function moveOn() {

}

function nextLevel() {

}


function victoryView() {

}

function gameOverView() {

}
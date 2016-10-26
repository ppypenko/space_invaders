"use strict";

function setupGame() {
    buildTitle();
    buildInstructionScreen();
    buildLevelOneScreen();
    createEnemies();
    createaiPlayer();
    buildButtons();
    buildScore();
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
        GAME_STATES.GAME_ON = true;
    }
}

function levelOnePlay() {
    enemyBeat();
    aiPlayerLost();
    fireEnemyShots();
    moveEnemyShots();
    hitEnemies();
    nextEnemy();
    moveEnemies();
    aiPlayerFuncs();
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

//timerText = new createjs.Text("Score: ", score, "24px Sans-Serif", "#fff");
//timertext.x = 0;
//timerText.y = 0;
//timerText.visible = false;
//stage.addChild(timerText);
//
//
//score += points;
//timerText.text = "Score: " + score;
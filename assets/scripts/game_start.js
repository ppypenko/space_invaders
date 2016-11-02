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

function gameOverScreenView() {
    hideaiPlayer();
    hideEnemies();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    hideLevelTwoScreen();
    hideLevelThreeScreen();
    hideLevelThreeScreen();
    resetEnemies();
    
    resetaiPlayer();
    buildGameOverScreen();
    hideHealthBoard();
    showGameOverScreen();
}

function instructionScreenView() {
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    showInstructionScreen();
    showMenuButton();
}

function levelOneView() {
    console.log("You used the function" + counter + " times");
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    showLevelOneScreen();
    resetEnemies();
    resetaiPlayer();
    showScore();
    showHealthBoard();
    showPlayButton();
    showBattlers(16);
    GAME_STATES.GAME_ON = true;
}

function levelOnePlay() {
    aiPlayerHit();
    nextEnemy(3, 1);
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
    //console.log("You used the function " + counter + " times");
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    hideLevelOneScreen();
    showLevelTwoScreen();
    hideEnemies();
    resetEnemies();
    resetaiPlayer();
    showScore();
    showHealthBoard();
    showPlayButton();
    showBattlers(2);
}

function levelTwoPlay() {
    aiPlayerHit();
    nextEnemy(2, 1);
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
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    showLevelThreeScreen();
    hideEnemies();
    resetEnemies();
    resetaiPlayer();
    showScore();
    showHealthBoard();
    showPlayButton();
    showBattlers(3);
}

function levelThreePlay() {
    aiPlayerHit();
    nextEnemy(3, 1);
    enemyBeat();
    aiPlayerLost();
    fireEnemyShots();
    moveEnemyShots();
    hitEnemies();
    moveEnemies();
    aiPlayerFuncs();
    hidePlayButton();
}

function moveOn(){
    //GAME_STATES.GAME_ON = false;
    gameStart();
}

function nextLevel() {
    switch(counter) {
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

function nextLevelPlay(){
    switch(counter) {
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
    showTitle();
    showPlayGameButton();
    showInstructionButton();
}

function victoryScreenView() {
    hideaiPlayer();
    hideEnemies();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    hideLevelThreeScreen();
    hideEnemies();
    resetEnemies();
    resetaiPlayer();
    hideScore();
    hideHealthBoard();
    hideLevelTwoScreen();
    hideLevelThreeScreen(); // when all levels are implemented probably this will be the only level we would need to hide
    
    buildVictoryScreen();
    showVictoryScreen();
    
}
function victoryView() {

}

function gameOverView() {

}
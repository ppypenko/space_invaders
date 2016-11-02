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
        showBattlers(5);
        GAME_STATES.GAME_ON = true;
    }
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

function victoryScreenView() {
    hideaiPlayer();
    hideEnemies();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    hideLevelThreeScreen();
    resetEnemies();
    resetaiPlayer();
    hideScore();
    hideHealthBoard();
    hideBattlers();
    hideMotherShips();
    hideMothershipShots();
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
    hideLevelTwoScreen();
    hideLevelThreeScreen();
    hideLevelThreeScreen();
    resetEnemies();
    
    resetaiPlayer();
    buildGameOverScreen();
    hideHealthBoard();
    showGameOverScreen();
    hideBattlers();
    hideMotherShips();
    hideMothershipShots();
}

function levelTwoView() {
    console.log("You used the function " + counter + " times");
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    hideLevelOneScreen();
    showLevelTwoScreen();
    resetEnemies();
    resetaiPlayer();
    showScore();
    showHealthBoard();
    showPlayButton();
    showBattlers(64);
    hideMotherShips();
    GAME_STATES.GAME_ON = true;
}

function levelTwoPlay() {
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
    if(counter === 1){
        levelTwoView();
    }else if(counter === 2){
        levelThreeView();
    }
}

function nextLevel(){
    
}

function levelThreeView() {
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    hideLevelOneScreen();
    hideLevelTwoScreen();
    showLevelThreeScreen();
    resetEnemies();
    resetaiPlayer();
    showScore();
    showHealthBoard();
    showPlayButton();
    showBattlers(64);
    hideMotherShips();
    GAME_STATES.GAME_ON = true;
}

function levelTwoPlay() {
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


function nextLevel() {

}


function victoryView() {

}

function gameOverView() {

}
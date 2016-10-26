function setupGame() {
    buildTitle();
    buildInstructionScreen();
    buildLevelOneScreen();
    initEnemies();
    initPlayer();
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
    hideTitle();
    hidePlayGameButton();
    hideInstructionButton();
    showLevelOneScreen();
    resetEnemies();
    resetPlayer();
    showScore();
    showHealthBoard();
}

function levelOnePlay() {
    enemyBeat();
    playerLost();
    fireEnemyShots();
    moveEnemyShots();
    hitEnemies();
    nextEnemy();
    moveEnemies();
    playerFuncs();
}

function gameVictory() {
    hidePlayer();
    hideEnemies();
    hideLevelOneScreen();
}

function gameOver() {
    hidePlayer();
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
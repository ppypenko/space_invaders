function setupGame() {
    buildTitle();
    buildInstructionScreen();
    buildLevelOneScreen();
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

function instructionScreenView(){
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
    showScore();
    showHealthBoard();
}

function levelTwoView() {
    showLevelTwoScreen();
}

function levelThreeView() {
    showLevelThreeScreen();
}

function victoryView(){
    
}

function gameOverView(){
    
}
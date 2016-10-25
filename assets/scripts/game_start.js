function setupGame() {
    buildTitle();
    buildButtons();
    setButtons();    
}

function titleScreenView() {
    showTitle();
    showPlayGameButton();
    showInstructionButton();
}

function levelOneView() {
    hideTitle();
    hidePlayGameButton();
    hideMenuButton();
    hideMenuButton();
    showLevelOneScreen();
}

function levelTwoView() {
    showLevelTwoScreen();
}

function levelThreeView() {
    showLevelThreeScreen();
}
function setupGame() {
    buildTitle();
    buildPlayGameButton();
    buildContinueButton();
    buildInstructionsButton();
    buildMenuButton();
    buildPlayButton();
}

function titleScreenView() {
    showTitle();
    showPlayGameButton();
    showMenuButton();
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
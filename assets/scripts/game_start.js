function setupGame() {
    buildTitle();
    buildPlayGameButton();
    buildContinueButton();
    buildInstructionsButton();
    buildMenuButton();
    buildPlayButton();
    titleScreenView();
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
function setupGame() {
    buildTitle();
<<<<<<< HEAD
    buildPlayGameButton();
    buildContinueButton();
    buildInstructionsButton();
    buildMenuButton();
    buildPlayButton();
=======
    buildButtons();
    setButtons();    
>>>>>>> dae7740dada899fe28c409b6649b9022f36dc5b3
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
function setupGame() {
    buildTitle();
    buildInstructionScreen();
    buildLevelOneScreen();
    buildButtons();
    
    
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
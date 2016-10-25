"use strict";

var playGameButton, continueGameButton, instructionButton, menuButton, playButton;

function buildPlayGameButton(){
    playGameButton = new createjs.Bitmap(queue.getResult("playGameButton"));
    playGameButton.x = 0;
    playGameButton.y = 0;
    playGameButton.visible = false;
    stage.addChild(playGameButton);
    stage.update();
}

function showPlayGameButton(){
    playGameButton.visible = true;
    stage.update();
}

function hidePlayGameButton(){
    playGameButton.visible = false;
}

function buildContinueButton(){
    continueGameButton = new createjs.Bitmap(queue.getResult("continueButton"));
    continueGameButton.x = 0;
    continueGameButton.y = 0;
    continueGameButtonButton.visible = false;
    stage.addChild(continueGameButton);
    stage.update();
}

function showContinueButton(){
    continueGameButton.visible = true;
    stage.update();
}

function hideContinueButton(){
    continueGameButton.visible = false;
}

function buildInstructionsButton(){
    instructionButton = new createjs.Bitmap(queue.getResult("instructionsButton"));
    instructionButton.x = 0;
    instructionButton.y = 0;
    instructionButton.visible = false;
    stage.addChild(instructionButton);
    stage.update();
}

function showInstructionButton(){
    instructionButton.visible = true;
    stage.update();
}

function hideInstructionButton(){
    instructionButton.visible = false;
}

function buildMenuButton(){
    menuButton = new createjs.Bitmap(queue.getResult("menuButton"));
    menuButton.x = 0;
    menuButton.y = 0;
    menuButton.visible = false;
    stage.addChild(menuButton);
    stage.update();
}

function showMenuButton(){
    menuButton.visible = true;
    stage.update();
}

function hideMenuButton(){
    menuButton.visible = false;
}

function buildPlayButton(){
    playButton = new createjs.Bitmap(queue.getResult("playButton"));
    playButton.x = 0;
    playButton.y = 0;
    playButton.visible = false;
    stage.addChild(playButton);
    stage.update();
}

function showPlayButton(){
    playButton.visible = true;
    stage.update();
}

function hidePlayButton(){
    playGameButton.visible = false;
}
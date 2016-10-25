"use strict";

var instructionScreen;

function buildInstructionScreen() {
    instructionScreen = new createjs.Bitmap(queue.getResult("instruction"));
    instructionScreen.x = 0;
    instructionScreen.y = 0;
    instructionScreen.visible = false;
    stage.addChild(instructionScreen);
    stage.update();
}

function showTitle(){
    instructionScreen.visible = true;
}

function hideTitle(){
    instructionScreen.visible = false;
}
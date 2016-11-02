"use strict";

var levelTwoScreen;

function buildLevelTwoScreen() {
    levelTwoScreen = new createjs.Bitmap(queue.getResult("levelTwo"));
    levelTwoScreen.x = 0;
    levelTwoScreen.y = 0;
    levelTwoScreen.visible = false;
    stage.addChild(levelTwoScreen);
}

function showLevelTwoScreen() {
    levelTwoScreen.visible = true;
}

function hideLevelTwoScreen() {
    levelTwoScreen.visible = false;
}
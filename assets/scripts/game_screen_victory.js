"use strict";

var victoryScreen;

function buildVictoryScreen() {
    victoryScreen = new createjs.Bitmap(queue.getResult("victory"));
    victoryScreen.x = 0;
    victoryScreen.y = 0;
    victoryScreen.visible = false;
    stage.addChild(victoryScreen);
}

function showVictoryScreen() {
    victoryScreen.visible = true;
}

function hideVictoryScreen() {
    victoryScreen.visible = false;
}
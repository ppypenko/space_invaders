"use strict";

var gameOverScreen;

function buildGameOverScreen() {
    gameOverScreen = new createjs.Bitmap(queue.getResult("gameOver"));
    gameOverScreen.x = 0;
    gameOverScreen.y = 0;
    gameOverScreen.visible = false;
    stage.update(gameOverScreen);
}

function showGameOverScreen() {
    gameOverScreen.visible = true;
}

function hideGameOverScreen() {
    gameOverScreen.visible = false;
}
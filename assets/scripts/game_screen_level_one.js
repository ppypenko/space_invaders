"use strict";

var levelOneScreen;
var firstLevelBgIndex;

function buildLevelOneScreen() {
    levelOneScreen = new createjs.Bitmap(queue.getResult("levelOne"));
    levelOneScreen.x = 0;
    levelOneScreen.y = 0;
    levelOneScreen.visible = false;
    stage.addChild(levelOneScreen);
    firstLevelBgIndex = stage.getChildIndex(levelOneScreen);
}

function showLevelOneScreen() {
    levelOneScreen.visible = true;
}

function hideLevelOneScreen() {
    levelOneScreen.visible = false;
}
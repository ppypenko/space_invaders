"use strict";

var levelThreeScreen;

function buildLevelThreeScreen(){
    levelThreeScreen = new createjs.Bitmap(queue.getResult("levelThree"));
    levelThreeScreen.x = 0;
    levelThreeScreen.y = 0;
    levelThreeScreen.visible = false;
    stage.update(levelThreeScreen);
}

function showLevelThreeScreen(){
    levelThreeScreen.visible = true;
}

function hideLevelThreeScreen(){
    levelThreeScreen.visible = false;
}
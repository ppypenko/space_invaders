"use strict";

var creditsScreen;

function buildCreditsScreen() {
    creditsScreen = new createjs.Bitmap(queue.getResult("credits"));
    creditsScreen.x = 0;
    creditsScreen.y = 0;
    creditsScreen.visible = false;
    stage.addChild(creditsScreen);
}

function showCreditsScreen(){
    creditsScreen.visible = true;
}

function hideCreditsScreen(){
    creditsScreen.visible = false;
}
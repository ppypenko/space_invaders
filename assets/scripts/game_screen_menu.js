"use strict";
var titleScreen;

function buildTitle() {
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    titleScreen.x = 0;
    titleScreen.y = 0;
    titleScreen.visible = false;
    console.log("this added the title to the stage");
    stage.addChild(titleScreen);
    stage.update();
}

function showTitle(){
    console.log("this made the title screen visible");
    titleScreen.visible = true;
    stage.update();
}

function hideTitle(){
    titleScreen.visible = false;
}
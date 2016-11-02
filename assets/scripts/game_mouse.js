"use strict";
var mouseX, mouseY = 0;

function mouseInit() {
    stage.on("stagemousemove", function (evt) {
        mouseX = Math.floor(evt.stageX);
        mouseY = Math.floor(evt.stageY);
    });
    stage.on("mousedown", function (evt) {});
    stage.on("pressup", function (evt) {});
}
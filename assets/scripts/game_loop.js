"use strict";
var FPS = 30;

function loop() {
    menu();
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);
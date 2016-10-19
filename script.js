"use strict";
var stage, queue;
var manifest = [
    {
        src: "title.png", id: "title"
    },
    {
        src: "instruction.png", id: "instruction"
    },
    {
        src: "levelOne", id: "levelOne"
    },
    {
        src: "levelTwo", id: "levelTwo"
    },
    {
        src: "levelThree", id: "levelThree"
    },
    {
        src: "gameOver", id: "gameOver"
    },
    {
        src: "victory", id: "victory"
    }
];

function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
}

function loadComplete(evt) {
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instruction"));
    levelOneScreen = new createjs.Bitmap(queue.getResult("levelOne"));
    levelTwoScreen = new createjs.Bitmap(queue.getResult("levelTwo"));
    levelThreeScreen = new createjs.Bitmap(queue.getResult("levelThree"));
    gameOverScreen = new createjs.Bitmap(queue.getResult("gameOver"));
    victoryScreen = new createjs.Bitmap(queue.getResult("victory"));
    test();
}

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

(function main() { //Main
    setupCanvas();
    loadFiles();
})();
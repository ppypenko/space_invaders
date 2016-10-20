"use strict";
var stage, queue;
var manifest = [{
        src: "scripts/game_buttons.js"
}, {
        src: "scripts/game_enemy.js"
}, {
        src: "scripts/game_engine.js"
}, {
        src: "scripts/game_keys.js"
}, {
        src: "scripts/game_mouse.js"
}, {
        src: "scripts/game_player.js"
}, {
        src: "scripts/game_screen_credits.js"
}, {
        src: "scripts/game_screen_instructions.js"
}, {
        src: "scripts/game_screen_levels.js"
}, {
        src: "scripts/game_screen_menu.js"
}, {
        src: "scripts/game_screen_over.js"
}, {
        src: "scripts/game_screen_victory.js"
}, {
        src: "scripts/game_sound.js"
}, {
        src: "scripts/game_state.js"
}, {
        src: "images/battler.png",
        id: "battler"
}, {
        src: "images/mothership.png",
        id: "mothership"
}, {
        src: "images/speeder.png",
        id: "speeder"
}, {
        src: "images/title.png",
        id: "title"
}, {
        src: "images/instructions.png",
        id: "instructions"
}, {
        src: "images/levelOne.png",
        id: "levelOne"
}, {
        src: "images/levelTwo.png",
        id: "levelTwo"
}, {
        src: "images/levelThree.png",
        id: "levelThree"
}, {
        src: "images/gameOver.png",
        id: "gameOver"
}, {
        src: "images/victory.png",
        id: "victory"
}

];

function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
}

function loadComplete(evt) {
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
"use strict";
var stage, queue;
var manifest = [{
    src: "scripts/game_buttons.js"
}, {
    src: "scripts/game_enemy.js"
}, {
    src: "scripts/game_engine.js"
}, {
    src: "scripts/game_explosion.js"
}, {
    src: "scripts/game_keys.js"
}, {
    src: "scripts/game_start.js"
}, {
    src: "scripts/game_mouse.js"
}, {
    src: "scripts/game_player.js"
}, {
    src: "scripts/game_screen_credits.js"
}, {
    src: "scripts/game_screen_instructions.js"
}, {
    src: "scripts/game_screen_level_one.js"
}, {
    src: "scripts/game_screen_level_two.js"
}, {
    src: "scripts/game_screen_level_three.js"
}, {
    src: "scripts/game_screen_menu.js"
}, {
    src: "scripts/game_screen_over.js"
}, {
    src: "scripts/game_screen_victory.js"
}, {
    src: "scripts/game_sound.js"
}, {
    src: "scripts/game_states.js"
}, {
    src: "images/boom_battler.png",
    id: "boom_battler"
}, {
    src: "images/boom_mothership.png",
    id: "boom_mothership"
}, {
    src: "images/boom_speeder.png",
    id: "boom_speeder"
}, {
    src: "images/boom_tank.png",
    id: "boom_tank"
}, {
    src: "images/battlershot.png",
    id: "battlershot"
}, {
    src: "images/battler.png",
    id: "battler"
}, {
    src: "images/mothership.png",
    id: "mothership"
}, {
    src: "images/mothershipshot.png",
    id: "mothershipshot"
}, {
    src: "images/speeder.png",
    id: "speeder"
}, {
    src: "images/speedershot.png",
    id: "speedershot"
}, {
    src: "images/tanks.png",
    id: "tanks"
}, {
    src: "images/turrent.png",
    id: "turrent"
}, {
    src: "images/tankshot.png",
    id: "tankshot"
}, {
    src: "images/tankshotpowered.png",
    id: "tankshotpowered"
}, {
    src: "images/title.png",
    id: "title"
}, {
    src: "images/instructions.png",
    id: "instruction"
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
}, {
    src: "images/playGameButton.png",
    id: "playGameButton"
}, {
    src: "images/playButton.png",
    id: "playButton"
}, {
    src: "images/continueButton.png",
    id: "continueButton"
}, {
    src: "images/instructionButton.png",
    id: "instructionButton"
}, {
    src: "images/menuButton.png",
    id: "menuButton"
}, {
    src: "images/healthDrop.png",
    id: "healthDrop"
}, {
    src: "scripts/game_loop.js"
}];

function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
}

function loadComplete(evt) {
    GAME_STATES.STATE = GAME_STATES.INIT;
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
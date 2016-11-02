"use strict";
var soundon = true;

function playMusic() {
    createjs.Sound.play("alien", {
        loop: -1
    });
}

function playLaser() {
    createjs.Sound.play("laser");
}

function playZap() {
    createjs.Sound.play("zap");
}

function playBoom() {
    createjs.Sound.play("explosion");
}
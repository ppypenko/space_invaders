"use strict";
var KEYCODE_LEFT = 37,
    KEYCODE_UP = 38,
    KEYCODE_RIGHT = 39,
    KEYCODE_DOWN = 40,
    KEYCODE_W = 87,
    KEYCODE_A = 65,
    KEYCODE_S = 83,
    KEYCODE_D = 68,
    KEYCODE_SPACE = 32;

function handleKeyDown(evt) {
    if (!evt) {
        var evt = window.event
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        player.moveLeft = true;
        return false;
    case KEYCODE_UP:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_RIGHT:
        player.moveRight = true;
        return false;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_W:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_A:
        player.moveLeft = true;
        return false;
    case KEYCODE_S:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_D:
        player.moveRight = true;
        return false;
    case KEYCODE_SPACE:
        return false;
    }
}

function handleKeyUp(evt) {
    if (!evt) {
        var evt = window.event
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        player.moveLeft = false;
        return false;
    case KEYCODE_UP:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_RIGHT:
        player.moveRight = false;
        return false;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_W:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_A:
        player.moveLeft = false;
        return false;
    case KEYCODE_S:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_D:
        player.moveRight = false;
        return false;
    case KEYCODE_SPACE:
        player.fire = true;
        return false;
    }
}


document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;
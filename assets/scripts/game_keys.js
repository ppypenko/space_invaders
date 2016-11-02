"use strict";
var KEYCODE_LEFT = 37,
    KEYCODE_UP = 38,
    KEYCODE_RIGHT = 39,
    KEYCODE_DOWN = 40,
    KEYCODE_W = 87,
    KEYCODE_A = 65,
    KEYCODE_S = 83,
    KEYCODE_D = 68,
    KEYCODE_SPACE = 32,
    KEYCODE_ENTER = 13,
    KEYCODE_T = 84,
    KEYCODE_B = 66,
    KEYCODE_E = 69,
    KEYCODE_Y = 89;

function handleKeyDown(evt) {
    if (!evt) {
        evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        aiPlayer.moveLeft = true;
        return false;
    case KEYCODE_UP:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_RIGHT:
        aiPlayer.moveRight = true;
        return false;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_W:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_A:
        aiPlayer.moveLeft = true;
        return false;
    case KEYCODE_S:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_D:
        aiPlayer.moveRight = true;
        return false;
    case KEYCODE_SPACE:
        return false;
    }
}

function handleKeyUp(evt) {
    if (!evt) {
        evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        aiPlayer.moveLeft = false;
        return false;
    case KEYCODE_UP:
        console.log(evt.keyCode + " up");
            showPlayButton();
        return false;
    case KEYCODE_RIGHT:
        aiPlayer.moveRight = false;
        return false;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_W:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_A:
        cheatCode("a");
        aiPlayer.moveLeft = false;
        return false;
    case KEYCODE_S:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_D:
        aiPlayer.moveRight = false;
        return false;
    case KEYCODE_SPACE:
        aiPlayer.fire = true;
        return false;
    case KEYCODE_ENTER:
        enterCheatCode();
        return false;
    case KEYCODE_T:
        cheatCode("t");
        return false;
    case KEYCODE_B:
        cheatCode("b");
        return false;
    case KEYCODE_E:
        cheatCode("e");
        return false;
    case KEYCODE_Y:
        cheatCode("y");
        return false;
    }
}


document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;
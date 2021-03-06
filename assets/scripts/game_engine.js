"use strict";

function menu() {
    switch (GAME_STATES.STATE) {
    case GAME_STATES.INIT:
        setupGame();
        gameMenu();
        break;
    case GAME_STATES.MENU:
        titleScreenView();
        break;
    case GAME_STATES.INSTRUCTIONS:
        instructionScreenView();
        break;
    case GAME_STATES.CREDITS:
        gameCredits();
        break;
    case GAME_STATES.OVER:
        gameOverScreenView();
        break;
    case GAME_STATES.VICTORY:
        victoryScreenView();
        break;
    case GAME_STATES.CONTINUE:
        nextLevelPlay();
        break;
    case GAME_STATES.PAUSE:
        gamePause();
        break;
    case GAME_STATES.START:
        nextLevel();
        break;
    default:
        break;
    }
    stage.update();
}
"use strict";


function menu(){
    switch(GAME_STATES.STATE){
        case GAME_STATES.INIT:
            console.log("this ran this function");
            setupGame();
            gameSetup();
            break;
        case GAME_STATES.MENU:
            gameMenu();
            break;
        case GAME_STATES.INSTRUCTIONS:
            gameInstructions();
            break;
        case GAME_STATES.CREDITS:
            gameCredits();
            break;
        case GAME_STATES.OVER:
            gameOver();
            break;
        case GAME_STATES.VICTORY:
            gameVictory();
            break;
        case GAME_STATES.CONTINUE:
            gameContinue();
            break;
        case GAME_STATES.PAUSE:
            gamePause();
            break;
        case GAME_STATES.START:
            gameStart();
            break;
        default:
            break;
    }
    stage.update();
}



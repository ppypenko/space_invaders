"use strict";

var gameState = ;

function menu(gameState){
    case GAME_STATES.INIT:
        gameSetup();
        break;
    case GAME_STATES.MENU:
        gameMenu();
        break;
    case GAME_STATES.INSTRUCTIONS:
        gameInstructions();
        break;
    default:
        break;
}
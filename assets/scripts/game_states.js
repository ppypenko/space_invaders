"use strict";
var GAME_STATES ={
    STATE: 0,
    INIT: 0,
    MENU: 1,
    INSTRUCTIONS: 2,
    CREDITS: 3,
    OVER: 4,
    VICTORY: 5,
    CONTINUE: 6,
    PAUSE: 7,
    START: 8
};
function gameSetup(){
    GAME_STATES.STATE = GAME_STATES.INIT;
}
function gameMenu(){
    GAME_STATES.STATE = GAME_STATES.MENU;
}
function gameInstructions(){
    GAME_STATES.STATE = GAME_STATES.INSTRUCTIONS;
}
function gameCredits(){
    GAME_STATES.STATE = GAME_STATES.CREDITS;
}
function gameOver(){
    GAME_STATES.STATE = GAME_STATES.OVER;
}
function gameVictory(){
    GAME_STATES.STATE = GAME_STATES.VICTORY;
}
function gameContinue(){
    GAME_STATES.STATE = GAME_STATES.CONTINUE;
}
function gamePause(){
    GAME_STATES.STATE = GAME_STATES.PAUSE;
}
function gameStart(){
    GAME_STATES.STATE = GAME_STATES.START;
}
"use strict";
var player = {
    tank: {},
    shot: {},
    shotClones: [],
    cloneSize: 20,
    damage: 1,
    health: 3,
    score: 0,
    healthDropChance: 50,
    moveLeft: false,
    moveRight: false
};

function damagePlayer(dmg) {
    player.health -= dmg;
    if (player.health <= 0) {
        gameOver();
    }
}

function playerHealthPickup() {

}
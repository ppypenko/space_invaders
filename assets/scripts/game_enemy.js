"use strict";
var enemy = {
    mothershipUfo: {
        ufo: {},
        shot: {},
        shotClones: [],
        speed: 5,
        health: 50,
        shotSpeed: 10,
        shotDamage: 5
    },
    battlerUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        shotClones: [],
        cloneSize: 200,
        ufoSpeed: 5,
        health: 1,
        shotSpeed: 10,
        shotDamage: 1
    },
    speederUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        shotClones: [],
        cloneSize: 100,
        ufoSpeed: 10,
        health: 3,
        shotSpeed: 15,
        shotDamage: 2
    }
};

function buildEnemies() {

}

function buildMothershipUfo() {
    enemy.mothershipUfo.ufo = new createjs.Bitmap(queue.getResult("mothership"));
    enemy.mothershipUfo.ufo.regX = enemy.mothershipUfo.ufo.getBounds().width / 2;
    enemy.mothershipUfo.ufo.regY = enemy.mothershipUfo.ufo.getBounds().height / 2;
    enemy.mothershipUfo.ufo.visible = false;
}

function buildSpeederUfo() {
    enemy.speederUfo.ufo = new createjs.Bitmap(queue.getResult("speeder"));
    enemy.speederUfo.ufo.regX = enemy.speederUfo.ufo.getBounds().width / 2;
    enemy.speederUfo.ufo.regY = enemy.speederUfo.ufo.getBounds().height / 2;
    enemy.speederUfo.ufo.visible = false;
}

function buildBattlerUfo() {
    enemy.battlerUfo.ufo = new createjs.Bitmap(queue.getResult("battler"));
    enemy.battlerUfo.ufo.regX = enemy.battlerUfo.ufo.getBounds().width / 2;
    enemy.battlerUfo.ufo.regY = enemy.battlerUfo.ufo.getBounds().height / 2;
    enemy.battlerUfo.ufo.visible = false;
}

function cloneSpeederUfo() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        enemy.speederUfo.ufoClones.push(enemy.speederUfo.ufo.clone());
        stage.addChild(enemy.speederUfo.ufoClones[i]);
    }
}

function cloneBattlerUfo() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones.push(enemy.battlerUfo.ufo.clone());
        stage.addChild(enemy.battlerUfo.ufoClones[i]);
    }
}
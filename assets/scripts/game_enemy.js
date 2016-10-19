"use strict";
var enemy = {
    mothershipUfo: {},
    mothershipShot: {},
    mothershipUfo: {
        ufo: {},
        shot: {},
        shotClones: [],
        speed: 5,
        health: 50,
        shotSpeed: 10
    },
    mainUfos: {
        ufo: {},
        shot: {},
        ufoClones: [],
        shotClones: [],
        ufoSpeed: 5,
        health: 1,
        shotSpeed: 10,
        shotDamage: 1
    },
    speederUfos: {
        ufo: {},
        shot: {},
        ufoClones: [],
        shotClones: [],
        speed: 10,
        health: 3,
        shotSpeed: 15,
        shotDamage: 2
    }
}

function buildEnemies() {

}

function buildMothershipUfo() {
    enemy.mothershipUfo = new createjs.Bitmap(queue.getResult("mothership"));
    enemy.mothershipUfo.regX = enemy.mothershipUfo.getBounds().width / 2;
    enemy.mothershipUfo.regY = enemy.mothershipUfo.getBounds().height / 2;
    enemy.mothershipUfo.visible = false;
}

function buildSpeederUfo() {
    enemy.mothershipUfo = new createjs.Bitmap(queue.getResult("mothership"));
    enemy.mothershipUfo.regX = enemy.mothershipUfo.getBounds().width / 2;
    enemy.mothershipUfo.regY = enemy.mothershipUfo.getBounds().height / 2;
    enemy.mothershipUfo.visible = false;
}

function buildMainUfo() {

}

function cloneSpeederUfo() {

}

function cloneMainUfo() {

}
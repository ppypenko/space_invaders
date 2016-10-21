"use strict";
var enemy = {
    mothershipUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        shotClones: [],
        cloneSize: 1,
        shotCloneSize: 5,
        ufoSpeed: 5,
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
        shotDamage: 1,
        dropChance: 800
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
        shotDamage: 2,
        dropChance: 800
    }
};

function buildMothershipUfo() {
    enemy.mothershipUfo.ufo = new createjs.Bitmap(queue.getResult("mothership"));
    enemy.mothershipUfo.ufo.regX = enemy.mothershipUfo.ufo.getBounds().width / 2;
    enemy.mothershipUfo.ufo.regY = enemy.mothershipUfo.ufo.getBounds().height / 2;
    enemy.mothershipUfo.ufo.visible = false;
}

function buildMothershipShot() {
    enemy.mothershipUfo.shot = new createjs.Bitmap(queue.getResult("mothershipshot"));
    enemy.mothershipUfo.shot.regX = enemy.mothershipUfo.shot.getBounds().width / 2;
    enemy.mothershipUfo.shot.regY = enemy.mothershipUfo.shot.getBounds().height / 2;
    enemy.mothershipUfo.shot.visible = false;
}

function buildSpeederUfo() {
    enemy.speederUfo.ufo = new createjs.Bitmap(queue.getResult("speeder"));
    enemy.speederUfo.ufo.regX = enemy.speederUfo.ufo.getBounds().width / 2;
    enemy.speederUfo.ufo.regY = enemy.speederUfo.ufo.getBounds().height / 2;
    enemy.speederUfo.ufo.visible = false;
}

function buildSpeederShot() {
    enemy.speederUfo.shot = new createjs.Bitmap(queue.getResult("speedershot"));
    enemy.speederUfo.shot.regX = enemy.speederUfo.shot.getBounds().width / 2;
    enemy.speederUfo.shot.regY = enemy.speederUfo.shot.getBounds().height / 2;
    enemy.speederUfo.shot.visible = false;
}

function buildBattlerUfo() {
    enemy.battlerUfo.ufo = new createjs.Bitmap(queue.getResult("battler"));
    enemy.battlerUfo.ufo.regX = enemy.battlerUfo.ufo.getBounds().width / 2;
    enemy.battlerUfo.ufo.regY = enemy.battlerUfo.ufo.getBounds().height / 2;
    enemy.battlerUfo.ufo.visible = false;
}

function buildBattlerShot() {
    enemy.battlerUfo.shot = new createjs.Bitmap(queue.getResult("battler"));
    enemy.battlerUfo.shot.regX = enemy.battlerUfo.shot.getBounds().width / 2;
    enemy.battlerUfo.shot.regY = enemy.battlerUfo.shot.getBounds().height / 2;
    enemy.battlerUfo.shot.visible = false;
}

function buildEnemies() {
    buildMothershipUfo();
    buildMothershipShot();
    buildSpeederUfo();
    buildSpeederShot();
    buildBattlerUfo();
    buildBattlerShot();
}

function cloneSpeederUfo() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        enemy.speederUfo.ufoClones.push(enemy.speederUfo.ufo.clone());
        stage.addChild(enemy.speederUfo.ufoClones[i]);
    }
}

function cloneSpeederShot() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        enemy.speederUfo.shotClones.push(enemy.speederUfo.shot.clone());
        stage.addChild(enemy.speederUfo.shotClones[i]);
    }
}

function cloneBattlerUfo() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones.push(enemy.battlerUfo.ufo.clone());
        stage.addChild(enemy.battlerUfo.ufoClones[i]);
    }
}

function cloneBattlerShot() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.shotClones.push(enemy.battlerUfo.shot.clone());
        stage.addChild(enemy.battlerUfo.shotClones[i]);
    }
}

function cloneMotherShipUfo() {
    var i = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        enemy.mothershipUfo.ufoClones.push(enemy.mothershipUfo.ufo.clone());
        stage.addChild(enemy.mothershipUfo.ufoClones[i]);
    }
}

function cloneMotherShipShot() {
    var i = 0,
        length = enemy.mothershipUfo.cloneSize * enemy.mothershipUfo.shotCloneSize;
    for (i = 0; i < length; i += 1) {
        enemy.mothershipUfo.shotClones.push(enemy.mothershipUfo.shot.clone());
        stage.addChild(enemy.mothershipUfo.shotClones[i]);
    }
}

function cloneEnemies() {
    cloneSpeederUfo();
    cloneSpeederShot();
    cloneBattlerUfo();
    cloneBattlerShot();
    cloneMotherShipUfo();
    cloneMotherShipShot();
}

function InitEnemies() {
    buildEnemies();
    cloneEnemies();
}

function hideBattlers() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones[i].visible = false;
    }
}

function hideSpeeders() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        enemy.speederUfo.ufoClones[i].visible = false;
    }
}

function hideMotherShips() {
    var i = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        enemy.mothershipUfo.ufoClones[i].visible = false;
    }
}

function hideEnemies() {
    hideBattlers();
    hideSpeeders();
    hideMotherShips();
}

function showBattlers() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones[i].visible = true;
    }
}

function showSpeeders() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        enemy.speederUfo.ufoClones[i].visible = true;
    }
}

function showMotherShips() {
    var i = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        enemy.mothershipUfo.ufoClones[i].visible = true;
    }
}

function showEnemies() {
    showBattlers();
    showSpeeders();
    showMotherShips();
}

function resetBattlers() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones[i].visible = false;
        enemy.battlerUfo.ufoClones[i].x = 400;
        enemy.battlerUfo.ufoClones[i].y = -150;
    }
}

function resetSpeeders() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        enemy.speederUfo.ufoClones[i].visible = false;
        enemy.speederUfo.ufoClones[i].x = 400;
        enemy.speederUfo.ufoClones[i].y = -150;
    }
}

function resetMotherships() {
    var i = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        enemy.mothershipUfo.ufoClones[i].visible = false;
        enemy.mothershipUfo.ufoClones[i].x = 400;
        enemy.mothershipUfo.ufoClones[i].y = -150;
    }
}

function resetEnemies() {
    resetBattlers();
    resetSpeeders();
    resetMotherships();
}

function moveBattlers() {
    var i = 0,
        left = false;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        if (enemy.battlerUfo.ufoClones[i].visible) {
            left = (Math.floor((Math.random() * 2)) === 0);
            if (left) {
                if (enemy.battlerUfo.ufoClones[i].x - enemy.battlerUfo.ufoSpeed > 0) {
                    enemy.battlerUfo.ufoClones[i].x -= enemy.battlerUfo.ufoSpeed;
                } else {
                    enemy.battlerUfo.ufoClones[i].x += enemy.battlerUfo.ufoSpeed;
                }
            } else {
                if (enemy.battlerUfo.ufoClones[i].x + enemy.battlerUfo.ufoSpeed < 800) {
                    enemy.battlerUfo.ufoClones[i].x += enemy.battlerUfo.ufoSpeed;
                } else {
                    enemy.battlerUfo.ufoClones[i].x -= enemy.battlerUfo.ufoSpeed;
                }
            }
            left = (Math.floor((Math.random() * enemy.battlerUfo.dropChance)) === 0);
            if (left) {
                enemy.battlerUfo.ufoClones[i].y += enemy.battlerUfo.ufoSpeed
            }
        }
    }
}

function moveSpeeders() {
    var i = 0,
        left = false;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        if (enemy.speederUfo.ufoClones[i].visible) {
            left = (Math.floor((Math.random() * 2)) === 0);
            if (left) {
                if (enemy.speederUfo.ufoClones[i].x - enemy.speederUfo.ufoSpeed > 0) {
                    enemy.speederUfo.ufoClones[i].x -= enemy.speederUfo.ufoSpeed;
                } else {
                    enemy.speederUfo.ufoClones[i].x += enemy.speederUfo.ufoSpeed;
                }
            } else {
                if (enemy.speederUfo.ufoClones[i].x + enemy.speederUfo.ufoSpeed < 800) {
                    enemy.speederUfo.ufoClones[i].x += enemy.speederUfo.ufoSpeed;
                } else {
                    enemy.speederUfo.ufoClones[i].x -= enemy.speederUfo.ufoSpeed;
                }
            }
            left = (Math.floor((Math.random() * enemy.speederUfo.dropChance)) === 0);
            if (left) {
                enemy.speederUfo.ufoClones[i].y += enemy.speederUfo.ufoSpeed
            }
        }
    }
}

function moveMotherShips() {
    var i = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        if (enemy.mothershipUfo.ufoClones[i].y < 100) {
            enemy.mothershipUfo.ufoClones[i].y += enemy.mothershipUfo.ufoSpeed;
        } else {
            if () {

            } else {

            }
        }
    }
}
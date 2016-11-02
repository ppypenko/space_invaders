"use strict";
var counter = 0;
var enemy = {
    mothershipUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        ufoHealth: [],
        shotClones: [],
        cloneSize: 1,
        shotCloneSize: 5,
        shotCloneSpread: 5,
        ufoSpeed: 3,
        health: 20,
        shotSpeed: 8,
        shotDamage: 5,
        points: 100,
        boom: 2,
        show: false
    },
    battlerUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        ufoHealth: [],
        shotClones: [],
        cloneSize: 256,
        ufoSpeed: 5,
        health: 1,
        shotSpeed: 10,
        shotDamage: 1,
        fireChance: 800,
        moveLeft: false,
        points: 10,
        boom: 0,
        show: false
    },
    speederUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        ufoHealth: [],
        shotClones: [],
        cloneSize: 128,
        ufoSpeed: 10,
        health: 3,
        shotSpeed: 15,
        shotDamage: 2,
        fireChance: 800,
        moveLeft: false,
        points: 5,
        boom: 1,
        show: false
    },
    enemyLevel: 1
};

function incrementEnemyLevel() {
    enemy.enemyLevel += 1;
}

function resetEnemyLevel() {
    enemy.enemyLevel = 1;
}

function buildUfo(ufo, img) {
    ufo.ufo = new createjs.Bitmap(queue.getResult(img));
    ufo.ufo.regX = ufo.ufo.getBounds().width / 2;
    ufo.ufo.regY = ufo.ufo.getBounds().height / 2;
    ufo.ufo.visible = false;
}

function buildShot(ufo, img) {
    ufo.shot = new createjs.Bitmap(queue.getResult(img));
    ufo.shot.regX = ufo.shot.getBounds().width / 2;
    ufo.shot.regY = ufo.shot.getBounds().height / 2;
    ufo.shot.visible = false;
}

function buildEnemies() {
    buildUfo(enemy.mothershipUfo, "mothership");
    buildUfo(enemy.speederUfo, "speeder");
    buildUfo(enemy.battlerUfo, "battler");
    buildShot(enemy.mothershipUfo, "mothershipshot");
    buildShot(enemy.speederUfo, "speedershot");
    buildShot(enemy.battlerUfo, "battlershot");
}

function cloneUfos(ufo) {
    var i = 0;
    for (i = 0; i < ufo.cloneSize; i += 1) {

        ufo.ufoHealth[i] = ufo.health;
        ufo.ufoClones.push(ufo.ufo.clone());
        stage.addChild(ufo.ufoClones[i]);
    }
}

function cloneUfoShot(ufo) {
    var i = 0;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        ufo.shotClones.push(ufo.shot.clone());
        stage.addChild(ufo.shotClones[i]);
    }
}

function cloneMotherShipShot() {
    var i = 0,
        e = 0,
        u = 0,
        spread = [],
        shotsper = [];
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        shotsper = [];
        for (e = 0; e < enemy.mothershipUfo.shotCloneSize; e += 1) {
            spread = [];
            for (u = 0; u < enemy.mothershipUfo.shotCloneSpread; u += 1) {
                spread.push(enemy.mothershipUfo.shot.clone());
                stage.addChild(spread[u]);
            }
            shotsper.push(spread);
        }
        enemy.mothershipUfo.shotClones.push(shotsper);
    }
}

function cloneEnemies() {
    cloneUfos(enemy.battlerUfo);
    cloneUfos(enemy.speederUfo);
    cloneUfos(enemy.mothershipUfo);
    cloneUfoShot(enemy.battlerUfo);
    cloneUfoShot(enemy.speederUfo);
    cloneMotherShipShot();
}

function createEnemies() {
    buildEnemies();
    cloneEnemies();
}

function hideUfos(ufo) {
    var i = 0;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        ufo.ufoClones[i].visible = false;
    }
}

function hideMothershipShots() {
    var i = 0,
        e = 0,
        u = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        for (e = 0; e < enemy.mothershipUfo.shotCloneSize; e += 1) {
            for (u = 0; u < enemy.mothershipUfo.shotCloneSpread; u += 1) {
                enemy.mothershipUfo.shotClones[i][e][u].visible = false;
            }
        }
    }
}

function hideShots(ufo) {
    var i = 0;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        ufo.shotClones[i].visible = false;
    }
}

function hideEnemies() {
    hideUfos(enemy.battlerUfo);
    hideUfos(enemy.speederUfo);
    hideUfos(enemy.mothershipUfo);
    hideMothershipShots();
    hideShots(enemy.battlerUfo);
    hideShots(enemy.speederUfo);
}

function showEnemy(ufo, amount) {
    var i = 0;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        if (amount > 0) {
            ufo.ufoClones[i].visible = true;
            amount -= 1;
        }
    }
    ufo.show = true;
}

function showBattlers(amount) {
    showEnemy(enemy.battlerUfo, amount);
}

function showSpeeders(amount) {
    showEnemy(enemy.speederUfo, amount);
}

function showMotherShips(amount) {
    showEnemy(enemy.mothershipUfo, amount);
}

function showEnemies() {
    showBattlers();
    showSpeeders();
    showMotherShips();
}

function resetBattlers() {
    var i = 0,
        x = 0,
        y = 0,
        length = 7,
        padx = 89,
        pady = -50;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {

        enemy.battlerUfo.ufoClones[i].x = (padx * x);
        enemy.battlerUfo.ufoClones[i].y = (pady * y);
        enemy.battlerUfo.ufoHealth[i] = enemy.battlerUfo.health * enemy.enemyLevel;
        if (x < length) {
            x += 1;
        } else {
            x = 0;
            y += 1;
        }
    }
    enemy.battlerUfo.show = false;
}

function resetSpeeders() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        if ((Math.floor(Math.random() * 2) === 0)) {
            enemy.speederUfo.ufoClones[i].x = Math.floor(Math.random() * 200) - 300;
        } else {
            enemy.speederUfo.ufoClones[i].x = Math.floor(Math.random() * 200) + 900;
        }
        enemy.speederUfo.ufoClones[i].y = Math.floor(Math.random() * 300);
        enemy.speederUfo.ufoHealth[i] = enemy.speederUfo.health * enemy.enemyLevel;
    }
    enemy.speederUfo.show = false;
}

function resetMotherships() {
    var i = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        enemy.mothershipUfo.ufoClones[i].x = 400;
        enemy.mothershipUfo.ufoClones[i].y = -150;
        enemy.mothershipUfo.ufoHealth[i] = enemy.mothershipUfo.health * enemy.enemyLevel;
    }
    enemy.mothershipUfo.show = false;
}

function resetEnemies() {
    resetBattlers();
    resetSpeeders();
    resetMotherships();
}

function moveLeft() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones[i].x -= enemy.battlerUfo.ufoSpeed;
    }
}

function moveRight() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones[i].x += enemy.battlerUfo.ufoSpeed;
    }
}

function moveBattlers() {
    var i = 0;

    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        if (enemy.battlerUfo.ufoClones[i].x >= 785 && enemy.battlerUfo.ufoClones[i].visible) {
            dropBattlers();
            enemy.battlerUfo.moveLeft = true;
            break;
        } else if (enemy.battlerUfo.ufoClones[i].x <= 15 && enemy.battlerUfo.ufoClones[i].visible) {
            dropBattlers();
            enemy.battlerUfo.moveLeft = false;
            break;
        }
    }
    if (enemy.battlerUfo.moveLeft) {
        moveLeft();
    } else {
        moveRight();
    }
}

function dropBattlers() {
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones[i].y += enemy.battlerUfo.ufoSpeed;
    }
}

function moveSpeeders() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        if (enemy.speederUfo.ufoClones[i].visible) {
            if (enemy.speederUfo.ufoClones[i].moveLeft) {
                if (enemy.speederUfo.ufoClones[i].x - enemy.speederUfo.ufoSpeed > 0) {
                    enemy.speederUfo.ufoClones[i].x -= enemy.speederUfo.ufoSpeed;
                } else {
                    enemy.speederUfo.ufoClones[i].moveLeft = false;
                    enemy.speederUfo.ufoClones[i].x += enemy.speederUfo.ufoSpeed;
                }
            } else {
                if (enemy.speederUfo.ufoClones[i].x + enemy.speederUfo.ufoSpeed < 800) {
                    enemy.speederUfo.ufoClones[i].x += enemy.speederUfo.ufoSpeed;
                } else {
                    enemy.speederUfo.ufoClones[i].moveLeft = true;
                    enemy.speederUfo.ufoClones[i].x -= enemy.speederUfo.ufoSpeed;
                }
            }
        }
    }
}

function moveMotherShips() {
    var i = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        if (enemy.mothershipUfo.ufoClones[i].visible) {
            if (enemy.mothershipUfo.ufoClones[i].y < 100) {
                enemy.mothershipUfo.ufoClones[i].y += enemy.mothershipUfo.ufoSpeed;
            } else {
                if (aiPlayer.tank.x < enemy.mothershipUfo.ufoClones[i].x) {
                    if (aiPlayer.tank.x < enemy.mothershipUfo.ufoClones[i].x - enemy.mothershipUfo.ufoSpeed) {
                        enemy.mothershipUfo.ufoClones[i].x -= 1;
                    } else {
                        enemy.mothershipUfo.ufoClones[i].x -= enemy.mothershipUfo.ufoSpeed;
                    }
                } else if (aiPlayer.tank.x > enemy.mothershipUfo.ufoClones[i].x) {
                    if (aiPlayer.tank.x > enemy.mothershipUfo.ufoClones[i].x + enemy.mothershipUfo.ufoSpeed) {
                        enemy.mothershipUfo.ufoClones[i].x += 1;
                    } else {
                        enemy.mothershipUfo.ufoClones[i].x += enemy.mothershipUfo.ufoSpeed;
                    }
                }
            }
        }
    }
}

function moveEnemies() {
    moveBattlers();
    moveSpeeders();
    moveMotherShips();
}

function nextEnemy(speederAmount, mothershipAmount) {
    if (ufosBeat(enemy.battlerUfo) && enemy.battlerUfo.show) {
        showSpeeders(speederAmount);
        enemy.battlerUfo.show = false;
    } else if (ufosBeat(enemy.speederUfo) && enemy.speederUfo.show) {
        showMotherShips(mothershipAmount);
        enemy.speederUfo.show = false;
    }
}

function hitUfos(ufo) {
    var i = 0,
        e = 0,
        pt;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        for (e = 0; e < aiPlayer.cloneSize; e += 1) {
            if (ufo.ufoClones[i].visible) {
                if (aiPlayer.shotClones[e].visible) {
                    pt = ufo.ufoClones[i].globalToLocal(aiPlayer.shotClones[e].x, aiPlayer.shotClones[e].y);
                    if (ufo.ufoClones[i].hitTest(pt.x, pt.y)) {
                        aiPlayer.shotClones[e].visible = false;
                        ufo.ufoHealth[i] -= aiPlayer.damage;
                        if (ufo.ufoHealth[i] <= 0) {
                            ufo.ufoClones[i].visible = false;
                            calculateScore(ufo.points);
                            playExplosion(ufo.boom, ufo.ufoClones[i].x, ufo.ufoClones[i].y);
                        }
                    }
                } else if (aiPlayer.powerShotClones[e].visible) {
                    pt = ufo.ufoClones[i].globalToLocal(aiPlayer.powerShotClones[e].x, aiPlayer.powerShotClones[e].y);
                    if (ufo.ufoClones[i].hitTest(pt.x, pt.y)) {
                        ufo.ufoHealth[i] -= aiPlayer.cheatDamage;
                        if (ufo.ufoHealth[i] <= 0) {
                            ufo.ufoClones[i].visible = false;
                            calculateScore(ufo.points);
                            playExplosion(ufo.boom, ufo.ufoClones[i].x, ufo.ufoClones[i].y);
                        }
                    }
                }
            }
        }
    }
}

function hitBattlers() {
    hitUfos(enemy.battlerUfo);
}

function hitSpeeders() {
    hitUfos(enemy.speederUfo);
}

function hitMotherships() {
    hitUfos(enemy.mothershipUfo);
}

function hitEnemies() {
    hitBattlers();
    hitSpeeders();
    hitMotherships();
}

function fireBattlerShot() {
    var i = 0,
        fire = false;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        fire = (Math.floor((Math.random() * enemy.battlerUfo.fireChance)) === 0);
        if (fire && enemy.battlerUfo.ufoClones[i].visible && !enemy.battlerUfo.shotClones[i].visible) {
            enemy.battlerUfo.shotClones[i].x = enemy.battlerUfo.ufoClones[i].x;
            enemy.battlerUfo.shotClones[i].y = enemy.battlerUfo.ufoClones[i].y;
            enemy.battlerUfo.shotClones[i].visible = true;
        }
    }
}

function fireSpeederShot() {
    var i = 0,
        fire = false;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        fire = (Math.floor((Math.random() * enemy.speederUfo.fireChance)) === 0);
        if (fire && enemy.speederUfo.ufoClones[i].visible && !enemy.speederUfo.shotClones[i].visible) {
            enemy.speederUfo.shotClones[i].x = enemy.speederUfo.ufoClones[i].x;
            enemy.speederUfo.shotClones[i].y = enemy.speederUfo.ufoClones[i].y;
            enemy.speederUfo.shotClones[i].visible = true;
        }
    }
}

function fireMothershipShot() {
    var i = 0,
        e = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        for (e = 0; e < enemy.mothershipUfo.shotCloneSize; e += 1) {
            if (enemy.mothershipUfo.ufoClones[i].visible) {
                if (!enemy.mothershipUfo.shotClones[i][e][0].visible && !enemy.mothershipUfo.shotClones[i][e][1].visible && !enemy.mothershipUfo.shotClones[i][e][2].visible && !enemy.mothershipUfo.shotClones[i][e][3].visible && !enemy.mothershipUfo.shotClones[i][e][4].visible) {
                    enemy.mothershipUfo.shotClones[i][e][0].x = enemy.mothershipUfo.ufoClones[i].x;
                    enemy.mothershipUfo.shotClones[i][e][1].x = enemy.mothershipUfo.ufoClones[i].x;
                    enemy.mothershipUfo.shotClones[i][e][2].x = enemy.mothershipUfo.ufoClones[i].x;
                    enemy.mothershipUfo.shotClones[i][e][3].x = enemy.mothershipUfo.ufoClones[i].x;
                    enemy.mothershipUfo.shotClones[i][e][4].x = enemy.mothershipUfo.ufoClones[i].x;

                    enemy.mothershipUfo.shotClones[i][e][0].y = enemy.mothershipUfo.ufoClones[i].y;
                    enemy.mothershipUfo.shotClones[i][e][1].y = enemy.mothershipUfo.ufoClones[i].y;
                    enemy.mothershipUfo.shotClones[i][e][2].y = enemy.mothershipUfo.ufoClones[i].y;
                    enemy.mothershipUfo.shotClones[i][e][3].y = enemy.mothershipUfo.ufoClones[i].y;
                    enemy.mothershipUfo.shotClones[i][e][4].y = enemy.mothershipUfo.ufoClones[i].y;

                    enemy.mothershipUfo.shotClones[i][e][0].visible = true;
                    enemy.mothershipUfo.shotClones[i][e][1].visible = true;
                    enemy.mothershipUfo.shotClones[i][e][2].visible = true;
                    enemy.mothershipUfo.shotClones[i][e][3].visible = true;
                    enemy.mothershipUfo.shotClones[i][e][4].visible = true;
                    break;
                }
            }
        }
    }
}

function moveMothershipShots() {
    var i = 0,
        e = 0,
        u = 0,
        middle = (enemy.mothershipUfo.shotCloneSpread / 2);
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        for (e = 0; e < enemy.mothershipUfo.shotCloneSize; e += 1) {
            for (u = 0; u < enemy.mothershipUfo.shotCloneSpread; u += 1) {
                if (enemy.mothershipUfo.shotClones[i][e][u].visible) {
                    switch (u) {
                    case 0:
                        enemy.mothershipUfo.shotClones[i][e][u].x -= 6;
                        enemy.mothershipUfo.shotClones[i][e][u].y += enemy.mothershipUfo.shotSpeed;
                        break;
                    case 1:
                        enemy.mothershipUfo.shotClones[i][e][u].x -= 3;
                        enemy.mothershipUfo.shotClones[i][e][u].y += enemy.mothershipUfo.shotSpeed;
                        break;
                    case 2:
                        enemy.mothershipUfo.shotClones[i][e][u].y += enemy.mothershipUfo.shotSpeed;
                        break;
                    case 3:
                        enemy.mothershipUfo.shotClones[i][e][u].x += 3;
                        enemy.mothershipUfo.shotClones[i][e][u].y += enemy.mothershipUfo.shotSpeed;
                        break;
                    case 4:
                        enemy.mothershipUfo.shotClones[i][e][u].x += 6;
                        enemy.mothershipUfo.shotClones[i][e][u].y += enemy.mothershipUfo.shotSpeed;
                        break;
                    }
                }
                if (enemy.mothershipUfo.shotClones[i][e][u].x > 800 || enemy.mothershipUfo.shotClones[i][e][u].x < 0 || enemy.mothershipUfo.shotClones[i][e][u].y > 600) {
                    enemy.mothershipUfo.shotClones[i][e][u].visible = false;
                }
            }
        }
    }
}

function moveBattlerShots() {
    moveShots(enemy.battlerUfo);
}

function moveSpeederShots() {
    moveShots(enemy.speederUfo);
}

function fireEnemyShots() {
    fireBattlerShot();
    fireSpeederShot();
    fireMothershipShot();
}

function moveEnemyShots() {
    moveMothershipShots();
    moveBattlerShots();
    moveSpeederShots();
}

function moveShots(ufo) {
    var i = 0;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        if (ufo.shotClones[i].visible) {
            ufo.shotClones[i].y += ufo.shotSpeed;
        }
        if (ufo.shotClones[i].y > 600) {
            ufo.shotClones[i].visible = false;
        }
    }
}

function aiPlayerLost() {
    groundReached(enemy.battlerUfo);
    groundReached(enemy.speederUfo);
    aiPlayerHit();
}

function aiPlayerHit() {
    mothershipShotHitaiPlayer();
    ufoShotHitaiPlayer(enemy.battlerUfo);
    ufoShotHitaiPlayer(enemy.speederUfo);
}

function ufoShotHitaiPlayer(ufo) {
    var i = 0,
        pt;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        if (ufo.shotClones[i].visible) {
            pt = aiPlayer.tank.globalToLocal(ufo.shotClones[i].x, ufo.shotClones[i].y);
            if (aiPlayer.tank.hitTest(pt.x, pt.y)) {
                damageaiPlayer(ufo.shotDamage);
                ufo.shotClones[i].visible = false;
            }
        }
    }
}

function mothershipShotHitaiPlayer() {
    var i = 0,
        x = 0,
        y = 0,
        pt;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        for (x = 0; x < enemy.mothershipUfo.shotCloneSize; x += 1) {
            for (y = 0; y < enemy.mothershipUfo.shotCloneSpread; y += 1) {
                if (enemy.mothershipUfo.shotClones[i][x][y].visible) {
                    pt = aiPlayer.tank.globalToLocal(enemy.mothershipUfo.shotClones[i][x][y].x, enemy.mothershipUfo.shotClones[i][x][y].y);
                    if (enemy.mothershipUfo.shotClones[i][x][y].hitTest(pt.x, pt.y) && enemy.mothershipUfo.shotClones[i][x][y].visible) {
                        damageaiPlayer(enemy.mothershipUfo.shotDamage);
                        enemy.mothershipUfo.shotClones[i][x][y].visible = false;
                    }
                }
            }
        }
    }
}

function groundReached(ufo) {
    var i = 0;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        if (ufo.ufoClones[i].visible && ufo.ufoClones[i].y > 590) {
            gameOver();
        }
    }
}

function ufosBeat(ufo) {
    var i = 0,
        check = true;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        if (ufo.ufoClones[i].visible) {
            check = false;
            break;
        }
    }
    return check;
}

function enemyBeat() {
    if (ufosBeat(enemy.mothershipUfo) && ufosBeat(enemy.speederUfo) && ufosBeat(enemy.battlerUfo)) {
        
        
        counter++;
        console.log(counter);
        moveOn();
    }
}
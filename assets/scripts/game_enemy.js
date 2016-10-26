"use strict";
var enemy = {
    mothershipUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        shotClones: [],
        cloneSize: 1,
        shotCloneSize: 5,
        shotCloneSpread: 5,
        ufoSpeed: 5,
        health: 50,
        shotSpeed: 10,
        shotDamage: 5,
        points: 100,
        boom: 2,
        show: false
    },
    battlerUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        shotClones: [],
        cloneSize: 80,
        ufoSpeed: 5,
        health: 1,
        shotSpeed: 10,
        shotDamage: 1,
        fireChance: 800,
        moveLeft: false,
        points: 10,
        boom: 0,
        show: true
    },
    speederUfo: {
        ufo: {},
        shot: {},
        ufoClones: [],
        shotClones: [],
        cloneSize: 50,
        ufoSpeed: 10,
        health: 3,
        shotSpeed: 15,
        shotDamage: 2,
        fireChance: 800,
        moveLeft: false,
        points: 5,
        boom: 1,
        show: false
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
    enemy.battlerUfo.shot = new createjs.Bitmap(queue.getResult("battlershot"));
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
    enemy.speederUfo.ufo.health = enemy.speederUfo.health;
    enemy.speederUfo.ufo.moveLeft = enemy.speederUfo.moveLeft;
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
    enemy.battlerUfo.ufo.health = enemy.battlerUfo.health;
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
    enemy.mothershipUfo.ufo.health = enemy.mothershipUfo.health;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {

        enemy.mothershipUfo.ufoClones.push(enemy.mothershipUfo.ufo.clone());
        stage.addChild(enemy.mothershipUfo.ufoClones[i]);
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
    cloneSpeederUfo();
    cloneBattlerUfo();
    cloneMotherShipUfo();
    cloneSpeederShot();
    cloneBattlerShot();
    cloneMotherShipShot();
}

function createEnemies() {
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
    hideBattlers();
    hideSpeeders();
    hideMotherShips();
    hideMothershipShots();
    hideShots(enemy.battlerUfo);
    hideShots(enemy.speederUfo);
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
    var i = 0,
        x = 0,
        y = 0,
        length = 8,
        padx = 89,
        pady = -50;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        enemy.battlerUfo.ufoClones[i].visible = true;
        if (x < length) {
            x += 1;
        } else {
            x = 0;
            y += 1;
        }
        enemy.battlerUfo.ufoClones[i].x = (padx * x);
        enemy.battlerUfo.ufoClones[i].y = (pady * y);
    }
}

function resetSpeeders() {
    var i = 0;
    for (i = 0; i < enemy.speederUfo.cloneSize; i += 1) {
        enemy.speederUfo.ufoClones[i].visible = true;
        if ((Math.floor(Math.random() * 2) === 0)) {
            enemy.speederUfo.ufoClones[i].x = Math.floor(Math.random() * 200) - 300;
        } else {
            enemy.speederUfo.ufoClones[i].x = Math.floor(Math.random() * 200) + 900;
        }
        enemy.speederUfo.ufoClones[i].y = Math.floor(Math.random() * 400);
    }
}

function resetMotherships() {
    var i = 0;
    for (i = 0; i < enemy.mothershipUfo.cloneSize; i += 1) {
        enemy.mothershipUfo.ufoClones[i].visible = true;
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
    var i = 0;
    for (i = 0; i < enemy.battlerUfo.cloneSize; i += 1) {
        if (enemy.battlerUfo.ufoClones[i].visible) {
            if (enemy.battlerUfo.moveLeft) {
                if (enemy.battlerUfo.ufoClones[i].x - enemy.battlerUfo.ufoSpeed > 0) {
                    enemy.battlerUfo.ufoClones[i].x -= enemy.battlerUfo.ufoSpeed;
                } else {
                    enemy.battlerUfo.moveLeft = false;
                    dropBattlers();
                    break;
                }
            } else {
                if (enemy.battlerUfo.ufoClones[i].x + enemy.battlerUfo.ufoSpeed < 800) {
                    enemy.battlerUfo.ufoClones[i].x += enemy.battlerUfo.ufoSpeed;
                } else {
                    enemy.battlerUfo.moveLeft = true;
                    dropBattlers();
                    break;
                }
            }
        }
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
                    if (aiPlayer.tank.x > enemy.mothershipUfo.ufoClones[i].x - enemy.mothershipUfo.ufoSpeed) {
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

function nextEnemy() {
    if (enemy.battlerUfo.show) {
        showBattlers();
        enemy.battlerUfo.show = false;
    } else if (enemy.speederUfo.show) {
        showSpeeders();
        enemy.speederUfo.show = false;
    } else if (enemy.mothershipUfo.show) {
        showMotherShips();
        enemy.mothershipUfo.show = false;
    }
    if (ufosBeat(enemy.battlerUfo)) {
        enemy.speederUfo.show = true;
    } else if (ufosBeat(enemy.speederUfo)) {
        enemy.mothershipUfo.show = true;
    }
}

function hitUfos(ufo, aiPlayer) {
    var i = 0,
        e = 0,
        pt;
    for (i = 0; i < ufo.cloneSize; i += 1) {
        for (e = 0; e < aiPlayer.cloneSize; e += 1) {
            if (ufo.ufoClones[i].visible && aiPlayer.shotClones[e].visible) {
                pt = ufo.ufoClones[i].globalToLocal(aiPlayer.shotClones[e].x, aiPlayer.shotClones[e].y);
                if (ufo.ufoClones[i].hitTest(pt.x, pt.y)) {
                    aiPlayer.shotClones[e].visible = false;
                    damageUfoHealth(ufo.ufoClones[i], aiPlayer.damage, ufo.points, ufo.boom);
                }
            }
        }
    }
}

function hitBattlers() {
    hitUfos(enemy.battlerUfo, aiPlayer);
}

function hitSpeeders() {
    hitUfos(enemy.speederUfo, aiPlayer);
}

function hitMotherships() {
    hitUfos(enemy.mothershipUfo, aiPlayer);
}

function hitEnemies() {
    hitBattlers();
    hitSpeeders();
    hitMotherships();
}

function damageUfoHealth(ufo, dmg, points, boom) {
    ufo.health -= dmg;
    if (ufo.health <= 0) {
        ufo.visible = false;
        calculateScore(points);
    }
    playExplosion(boom, ufo.x, ufo.y);
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
                        enemy.mothershipUfo.shotClones[i][e][u].x -= 2;
                        enemy.mothershipUfo.shotClones[i][e][u].y -= enemy.mothershipUfo.shotSpeed;
                        break;
                    case 1:
                        enemy.mothershipUfo.shotClones[i][e][u].x -= 1;
                        enemy.mothershipUfo.shotClones[i][e][u].y -= enemy.mothershipUfo.shotSpeed;
                        break;
                    case 2:
                        enemy.mothershipUfo.shotClones[i][e][u].y -= enemy.mothershipUfo.shotSpeed;
                        break;
                    case 3:
                        enemy.mothershipUfo.shotClones[i][e][u].x += 1;
                        enemy.mothershipUfo.shotClones[i][e][u].y -= enemy.mothershipUfo.shotSpeed;
                        break;
                    case 4:
                        enemy.mothershipUfo.shotClones[i][e][u].x += 2;
                        enemy.mothershipUfo.shotClones[i][e][u].y -= enemy.mothershipUfo.shotSpeed;
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
    for (i = 0; i < ufo.shotCloneSize; i += 1) {
        if (ufo.shotClones[i].visible) {
            pt = aiPlayer.tank.globalToLocal(ufo.shotClones[i].x, ufo.shotClones[i].y);
            if (ufo.shotClones[i].hitTest(pt.x, pt.y)) {
                damageaiPlayer(ufo.shotDamage);
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
        gameVictory();
    }
}
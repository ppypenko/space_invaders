"use strict";
var aiPlayer = {
    tank: {},
    turrent: {},
    shot: {},
    healthDrop: {},
    shotClones: [],
    cloneSize: 20,
    damage: 1,
    health: 3,
    score: 0,
    scoreBoard: {},
    healthBoard: {},
    healthDropChance: 50,
    moveLeft: false,
    moveRight: false,
    speed: 5,
    fire: false,
    shotSpeed: 10
};

function buildaiPlayer() {
    var t = new createjs.SpriteSheet({
        images: [queue.getResult("tanks")],
        frames: {
            width: 80,
            height: 34,
            count: 2,
            regX: 0,
            regY: 0,
            spacing: 3,
            margin: 0
        },
        animations: {
            move: [0, 1, "move", 0.5]
        }
    });
    aiPlayer.tank = new createjs.Sprite(t);
    aiPlayer.tank.visible = false;
    aiPlayer.tank.regX = aiPlayer.tank.getBounds().width / 2;
    aiPlayer.tank.regY = aiPlayer.tank.getBounds().height / 2;

    aiPlayer.turrent = new createjs.Bitmap(queue.getResult("turrent"));
    aiPlayer.turrent.regX = aiPlayer.turrent.getBounds().width / 2;
    aiPlayer.turrent.regY = aiPlayer.turrent.getBounds().height / 2;
    aiPlayer.turrent.visible = false;

    stage.addChild(aiPlayer.turrent);
    stage.addChild(aiPlayer.tank);
}

function buildTankShot() {
    aiPlayer.shot = new createjs.Bitmap(queue.getResult("tankshot"));
    aiPlayer.shot.regX = aiPlayer.shot.getBounds().width / 2;
    aiPlayer.shot.regY = aiPlayer.shot.getBounds().height / 2;
    aiPlayer.shot.visible = false;
}

function cloneTankShots() {
    var i = 0;
    for (i = 0; i < aiPlayer.cloneSize; i += 1) {
        aiPlayer.shotClones.push(aiPlayer.shot.clone());
        stage.addChild(aiPlayer.shotClones[i]);
    }
}

function buildHealthDrop() {
    aiPlayer.healthDrop = new createjs.Bitmap(queue.getResult("healthDrop"));
    aiPlayer.healthDrop.regX = aiPlayer.healthDrop.getBounds().width / 2;
    aiPlayer.healthDrop.regY = aiPlayer.healthDrop.getBounds().height / 2;
    aiPlayer.healthDrop.visible = false;
}

function createaiPlayer() {
    buildTankShot();
    cloneTankShots();
    buildHealthDrop();
    buildaiPlayer();
}

function damageaiPlayer(dmg) {
    aiPlayer.health -= dmg;
    if (aiPlayer.health <= 0) {
        gameOver();
    }
}

function healthDrop(x, y) {
    var e = Math.floor(Math.random() * aiPlayer.healthDropChance);
    if (e === 0 && !aiPlayer.healthDrop.visible) {
        aiPlayer.healthDrop.visible = true;
    }
}

function healthPickup() {
    var pt,
        h = 0;
    if (aiPlayer.healthDrop.visible) {
        pt = aiPlayer.tank.globalToLocal(aiPlayer.healthDrop.x, aiPlayer.healthDrop.y);
        if (aiPlayer.tank.hitTest(pt.x, pt.y)) {
            h = Math.floor(Math.random() * 10);
            if (h >= 0 && h <= 6) {
                aiPlayer.health += 1;
            } else if (h >= 7 && h <= 8) {
                aiPlayer.health += 2;
            } else {
                aiPlayer.health += 3;
            }
            aiPlayer.healthDrop.visible = false;
        }
    }
}

function moveHealthDrop() {
    if (aiPlayer.healthDrop.visible && aiPlayer.healthDrop.y < 580) {
        aiPlayer.healthDrop.y += 20;
    }
}

function aiPlayerFire() {
    var i = 0;
    if (aiPlayer.fire) {
        for (i = 0; i < aiPlayer.cloneSize; i += 1) {
            if (!aiPlayer.shotClones[i].visible) {
                aiPlayer.shotClones[i].x = aiPlayer.turrent.x;
                aiPlayer.shotClones[i].y = aiPlayer.turrent.y;
                aiPlayer.shotClones[i].visible = true;
                aiPlayer.fire = false;
                break;
            }
        }
    }
}

function aiPlayerMoveShot() {
    var i = 0;
    for (i = 0; i < aiPlayer.cloneSize; i += 1) {
        if (aiPlayer.shotClones[i].visible) {
            aiPlayer.shotClones[i].y -= aiPlayer.shotSpeed;
        }
        if (aiPlayer.shotClones[i].y < 0) {
            aiPlayer.shotClones[i].visible = false;
        }
    }
}

function aiPlayerMovement() {
    if (aiPlayer.moveLeft) {
        aiPlayer.tank.x -= aiPlayer.speed;
        aiPlayer.turrent.x -= aiPlayer.speed;
    } else {

    }
    if (aiPlayer.moveRight) {
        aiPlayer.tank.x += aiPlayer.speed;
        aiPlayer.turrent.x += aiPlayer.speed;
    }
    if (aiPlayer.moveRight || aiPlayer.moveLeft) {
        aiPlayer.tank.gotoAndPlay("move");
    } else {
        aiPlayer.tank.gotoAndStop();
    }

}

function aiPlayerFuncs() {
    healthPickup();
    moveHealthDrop();
    aiPlayerFire();
    aiPlayerMoveShot();
    aiPlayerMovement();
}

function resetaiPlayer() {
    aiPlayer.tank.x = 400;
    aiPlayer.turrent.x = 400;
    aiPlayer.tank.y = 570;
    aiPlayer.turrent.y = 545;
    aiPlayer.tank.visible = true;
    aiPlayer.turrent.visible = true;
}

function hideaiPlayer() {
    var i = 0;
    aiPlayer.tank.visible = false;
    aiPlayer.turrent.visible = false;
    for (i = 0; i < aiPlayer.cloneSize; i += 1) {
        aiPlayer.shotClones[i].visible = false;
    }
}

function buildScore() {
    aiPlayer.scoreBoard = new createjs.Text("Score: ", "bold 28px Arial", "#ffffff");
    aiPlayer.scoreBoard.x = 625;
    aiPlayer.scoreBoard.y = 10;
    aiPlayer.scoreBoard.visible = false;
    stage.addChild(aiPlayer.scoreBoard);
}

function showScore() {
    aiPlayer.scoreBoard.visible = true;
    aiPlayer.scoreBoard.text = "Score: " + aiPlayer.score;
}

function hideScore() {
    aiPlayer.scoreBoard.visible = false;
}

function buildHealthBoard() {
    aiPlayer.healthBoard = new createjs.Text("Health: ", "bold 28px Arial", "#ffffff");
    aiPlayer.healthBoard.x = 50;
    aiPlayer.healthBoard.y = 10;
    aiPlayer.healthBoard.visible = false;
    stage.addChild(aiPlayer.healthBoard);
}

function showHealthBoard() {
    aiPlayer.healthBoard.visible = true;
    aiPlayer.healthBoard.text = "Health: " + aiPlayer.health;
}

function hideHealthBoard() {
    aiPlayer.healthBoard.visible = false;
}

function calculateScore(points) {
    aiPlayer.score += points;
    aiPlayer.scoreBoard.text = "Score: " + aiPlayer.score;
}
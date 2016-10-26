"use strict";
var player = {
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

function buildPlayer() {
    player.tank = new creajs.SpriteSheet({
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
            move: [0, 1, "move", .5]
        }
    });
    player.tank.regX = player.tank.getBounds().width / 2;
    player.tank.regY = player.tank.getBounds().height / 2;
    player.tank.visible = false;

    player.turrent = new creatjs.Bitmap(queue.getResult("turrent"));
    player.turrent.regX = player.turrent.getBounds().width / 2;
    player.turrent.regY = (player.turrent.getBounds().height / 4) * 3;
    player.turrent.visible = false;
}

function buildTankShot() {
    player.shot = new creatjs.Bitmap(queue.getResult("tankshot"));
    player.shot.regX = player.shot.getBounds().width / 2;
    player.shot.regY = player.shot.getBounds().height / 2;
    player.shot.visible = false;
}

function cloneTankShots() {
    var i = 0;
    for (i = 0; i < player.cloneSize; i += 1) {
        player.shotClones.push(player.shot.clone());
        stage.addChild(player.shotClones[i]);
    }
}

function buildHealthDrop() {
    player.healthDrop = new creatjs.Bitmap(queue.getResult("healthDrop"));
    player.healthDrop.regX = player.healthDrop.getBounds().width / 2;
    player.healthDrop.regY = player.healthDrop.getBounds().height / 2;
    player.healthDrop.visible = false;
}

function initPlayer() {
    buildPlayer();
    buildTankShot();
    cloneTankShots();
    buildHealthDrop();
}

function damagePlayer(dmg) {
    player.health -= dmg;
    if (player.health <= 0) {
        gameOver();
    }
}

function healthDrop(x, y) {
    var e = Math.floor(Math.random() * player.healthDropChance);
    if (e === 0 && !player.healthDrop.visible) {
        player.healthDrop.visible = true;
    }
}

function healthPickup() {
    var pt,
        h = 0;
    if (player.healthDrop.visible) {
        pt = player.tank.globalToLocal(player.healthDrop.x, player.healthDrop.y);
        if (player.tank.hitTest(pt.x, pt.y)) {
            h = Math.floor(Math.random() * 10);
            if (h >= 0 && h <= 6) {
                player.health += 1;
            } else if (h >= 7 && h <= 8) {
                player.health += 2;
            } else {
                player.health += 3;
            }
            player.healthDrop.visible = false;
        }
    }
}

function moveHealthDrop() {
    if (player.healthDrop.visible && player.healthDrop.y < 580) {
        player.healthDrop.y += 20;
    }
}

function playerFire() {
    var i = 0;
    if (player.fire) {
        for (i = 0; i < player.cloneSize; i += 1) {
            if (!player.shotClones[i].visible) {
                player.shotClones[i].x = player.turrent.x;
                player.shotClones[i].y = player.turrent.y;
                player.shotClones[i].visible = true;
                player.fire = false;
                break;
            }
        }
    }
}

function playerMoveShot() {
    var i = 0;
    for (i = 0; i < player.cloneSize; i += 1) {
        if (player.shotClones[i].visible) {
            player.shotClones[i].y -= player.shotSpeed;
        }
        if (player.shotClones[i].y < 0) {
            player.shotClones[i].visible = false;
        }
    }
}

function playerMovement() {
    if (player.moveLeft) {
        player.tank.x -= player.speed;
        player.turrent.x -= player.speed;
    }
    if (player.moveRight) {
        player.tank.x += player.speed;
        player.turrent.x += player.speed;
    }
}

function playerFuncs() {
    healthPickup();
    moveHealthDrop();
    playerFire();
    playerMoveShot();
    playerMovement();
}

function buildScore(){
    player.scoreBoard = new createjs.Text("Score: ", player.score, "48px Sans-Serif", "#fff");
    player.scoreBoard.x = 700;
    player.scoreBoard.y = 10;
    player.scoreBoard.visible = false;
    stage.addChild(player.scoreBoard);
}

function showScore(){
    player.scoreBoard.visible = true;
}

function hideScore(){
    player.scoreBoard.visible = false;
}

function buildHealthBoard(){
    player.healthBoard = new createjs.Text("Health: ", player.healthBoard, "48px Sans-Serif", "#fff");
    player.healthBoard.x = 50;
    player.healthBoard.y = 10;
    player.healthBoard.visible = false;
    stage.addChild(player.healthBoard);
}

function showHealthBoard(){
    player.healthBoard.visible = true;
}

function hideHealthBoard(){
    player.healthBoard.visible = false;
}

function calculateScore(points){
    player.score += points;
    player.scoreBoard.text = "Score: " + player.score;
}

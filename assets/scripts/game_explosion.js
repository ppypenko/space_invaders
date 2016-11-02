"use strict";
var boom = {
    boom1: {},
    boom2: {},
    boom2Clones: [],
    boom3: {},
    boom3Clones: [],
    boom4: {},
    boom4Clones: []
};

function buildExplosion(boom, img) {
    var sheet = new createjs.SpriteSheet({
        images: [queue.getResult("img")],
        frames: {
            width: 256,
            height: 256,
            count: 67,
            regX: 0,
            regY: 0,
            spacing: 1,
            margin: 0
        },
        animations: {
            boom: [0, 66, false, .5]
        }
    });
    boom = new createjs.Sprite(sheet);
    boom.visible = false;
    boom.addEventListener("animationend", function (this) {
        console.log(this);
        this.visible = false;
    });
}

function buildMothershipExlosion() {
    var sheet = new createjs.SpriteSheet({
        images: [queue.getResult("boom_mothership")],
        frames: {
            width: 256,
            height: 256,
            count: 67,
            regX: 0,
            regY: 0,
            spacing: 1,
            margin: 0
        },
        animations: {
            boom: [0, 66, false, .5]
        }
    });
    boom.boom4 = new createjsSprite(sheet);
    boom.boom4.visible = false;
    boom.boom4.addEventListener("animationend", function (this) {
        console.log(this);
        this.visible = false;
    });
}

function buildBooms() {
    buildExplosion(boom.boom1, "boom_tank");
    buildExplosion(boom.boom2, "boom_battler");
    buildExplosion(boom.boom3, "boom_speeder");
    buildMothershipExlosion();
}

function cloneBoom(size, obj, clones) {
    var i = 0;
    for (i = 0; i < size; i += 1) {
        clones.push(obj.clone());
        stage.addChild(clones[i]);
    }
}

function cloneBooms() {
    cloneBoom(enemy.battlerUfo.cloneSize, boom.boom2, boom.boom2Clones);
    cloneBoom(enemy.speeder.cloneSize, boom.boom3, boom.boom3Clones);
    cloneBoom(enemy.mothershipUfo.cloneSize, boom.boom4, boom.boom4Clones);
}

function createBooms() {
    buildBooms();
    cloneBooms();
}

function boom1() {
    boom.boom1.visible = true;
    boom.boom1.gotoAndPlay("boom");
}

function playExplosion(n, i, x, y) {
    switch (n) {
    case 0:
        healthDrop(x, y);
        boom.boom2Clones[i].x = x;
        boom.boom2Clones[i].y = y;
        boom.boom2Clones[i].visible = true;
        boom.boom2Clones[i].gotoAndPlay("boom");
        break;
    case 1:
        healthDrop(x, y);
        boom.boom3Clones[i].x = x;
        boom.boom3Clones[i].y = y;
        boom.boom3Clones[i].visible = true;
        boom.boom3Clones[i].gotoAndPlay("boom");
        break;
    case 2:
        boom.boom4Clones[i].x = x;
        boom.boom4Clones[i].y = y;
        boom.boom4Clones[i].visible = true;
        boom.boom4Clones[i].gotoAndPlay("boom");
        break;
    }
}
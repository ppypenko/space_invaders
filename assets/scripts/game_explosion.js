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

function buildExplosion() {
    var sheet = {},
        boomers = ["boom_tank", "boom_battler", "boom_speeder"],
        results = [],
        i = 0;
    for (i = 0; i < boomers.length; i += 1) {
        sheet = new createjs.SpriteSheet({
            images: [queue.getResult(boomers[i])],
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
        results.push(sheet);
    }
    boom.boom1 = new createjs.Sprite(results[0]);
    boom.boom2 = new createjs.Sprite(results[1]);
    boom.boom3 = new createjs.Sprite(results[2]);

    boom.boom1.regX = boom.boom1.getBounds().width / 2;
    boom.boom1.regY = boom.boom1.getBounds().height / 2;
    boom.boom2.regX = boom.boom2.getBounds().width / 2;
    boom.boom2.regY = boom.boom2.getBounds().height / 2;
    boom.boom3.regX = boom.boom3.getBounds().width / 2;
    boom.boom3.regY = boom.boom3.getBounds().height / 2;

    boom.boom1.visible = false;
    boom.boom2.visible = false;
    boom.boom3.visible = false;
}

function buildMothershipExlosion() {
    var sheet = new createjs.SpriteSheet({
        images: [queue.getResult("boom_mothership")],
        frames: {
            width: 352,
            height: 352,
            count: 57,
            regX: 0,
            regY: 0,
            spacing: 1,
            margin: 0
        },
        animations: {
            boom: [0, 56, false, .5]
        }
    });
    boom.boom4 = new createjs.Sprite(sheet);
    boom.boom4.regX = boom.boom4.getBounds().width / 2;
    boom.boom4.regY = boom.boom4.getBounds().height / 2;
    boom.boom4.visible = false;
}

function buildBooms() {
    buildExplosion();
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
    cloneBoom(enemy.speederUfo.cloneSize, boom.boom3, boom.boom3Clones);
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
    playBoom();
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
"use strict";

var btn = {
        Play: {},
        Menu: {},
        Continue: {},
        Instruct: {},
        PlayGame: {}
    },
    sheets = ["playButton", "menuButton", "instructionsButton", "continueButton", "playGameButton"];

function buildButtons() {
    var btnSheet = [],
        i = 0,
        length = sheets.length;
    for (i = 0; i < length; i += 1) {
        btnSheet.push(new createjs.SpriteSheet({
            images: [queue.getResult(sheets[i])],
            frames: {
                width: 93,
                height: 32,
                count: 3,
                regX: 0,
                regY: 0,
                spacing: 2,
                margin: 0
            },
            animations: {
                btnOff: [0, 0, "btnOff", 0],
                btnHov: [1, 1, "btnHov", 0],
                btnClck: [2, 2, "btnClck", 0]
            }
        }));
    }
    btn.Play = new createjs.Sprite(btnSheet[0]);
    btn.Menu = new createjs.Sprite(btnSheet[1]);
    btn.Instruct = new createjs.Sprite(btnSheet[2]);
    btn.Continue = new createjs.Sprite(btnSheet[3]);
    btn.PlayGame = new createjs.Sprite(btnSheet[4]);
    stage.addChild(btn.Play);
    stage.addChild(btn.Menu);
    stage.addChild(btn.Instruct);
    stage.addChild(btn.Continue);
    stage.addChild(btn.PlayGame);
}

function setButtonListeners() {
    stage.enableMouseOver();

    btn.Play.on("click", function (evt) {
        btn.Play.gotoAndPlay("btnOff");
        gameStart();
    });
    btn.Play.on("mouseover", function (evt) {
        btn.Play.gotoAndPlay("btnHov");
    });
    btn.Play.on("mouseout", function (evt) {
        btn.Play.gotoAndPlay("btnOff");
    });
    btn.Play.on("mousedown", function (evt) {
        btn.Play.gotoAndPlay("btnClck");
    });

    btn.Menu.on("click", function (evt) {
        btn.Menu.gotoAndPlay("btnOff");
        gameMenu();
    });
    btn.Menu.on("mouseover", function (evt) {
        btn.Menu.gotoAndPlay("btnHov");
    });
    btn.Menu.on("mouseout", function (evt) {
        btn.Menu.gotoAndPlay("btnOff");
    });
    btn.Menu.on("mousedown", function (evt) {
        btn.Menu.gotoAndPlay("btnClck");
    });

    btn.Instruct.on("click", function (evt) {
        btn.Instruct.gotoAndPlay("btnOff");
        gameInstructions();
    });
    btn.Instruct.on("mouseover", function (evt) {
        btn.Instruct.gotoAndPlay("btnHov");
    });
    btn.Instruct.on("mouseout", function (evt) {
        btn.Instruct.gotoAndPlay("btnOff");
    });
    btn.Instruct.on("mousedown", function (evt) {
        btn.Instruct.gotoAndPlay("btnClck");
    });

    btn.Continue.on("click", function (evt) {
        btn.Continue.gotoAndPlay("btnOff");
        gameContinue();
    });
    btn.Continue.on("mouseover", function (evt) {
        btn.Continue.gotoAndPlay("btnHov");
    });
    btn.Continue.on("mouseout", function (evt) {
        btn.Continue.gotoAndPlay("btnOff");
    });
    btn.Continue.on("mousedown", function (evt) {
        btn.Continue.gotoAndPlay("btnClck");
    });

    btn.PlayGame.on("click", function (evt) {
        btn.PlayGame.gotoAndPlay("btnOff");
        gameSetup();
    });
    btn.PlayGame.on("mouseover", function (evt) {
        btn.PlayGame.gotoAndPlay("btnHov");
    });
    btn.PlayGame.on("mouseout", function (evt) {
        btn.PlayGame.gotoAndPlay("btnOff");
    });
    btn.PlayGame.on("mousedown", function (evt) {
        btn.PlayGame.gotoAndPlay("btnClck");
    });
}

function showPlayGameButton() {
    btn.PlayGame.visible = true;
}

function hidePlayGameButton() {
    btn.PlayGame.visible = false;
}

function showContinueButton() {
    btn.Continue.visible = true;
}

function hideContinueButton() {
    btn.Continue.visible = false;
}

function showInstructionButton() {
    btn.Instruct.visible = true;
}

function hideInstructionButton() {
    btn.Instruct.visible = false;
}

function showMenuButton() {
    btn.Menu.visible = true;
}

function hideMenuButton() {
    btn.Menu.visible = false;
}

function showPlayButton() {
    btn.Play.visible = true;
}

function hidePlayButton() {
    btn.Play.visible = false;
}
var FPS = 30;

function loop() {
    console.log("test");
    menu();
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);
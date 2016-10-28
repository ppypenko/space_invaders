"use strict";

function playExplosion(n, x, y) {
    switch (n) {
    case 0:
        healthDrop(x, y);
        console.log("battler hit");
        break;
    case 1:
        healthDrop(x, y);
        console.log("speeder hit");
        break;
    case 2:
        console.log("mothership hit");
        break;
    }
}
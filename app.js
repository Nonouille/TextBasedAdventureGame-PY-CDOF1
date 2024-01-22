"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
//We'll use readline process to read and write question to the user
var readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
//Let's introduce the game and get to know the player
var playerName = "";
console.log("\n\n\n");
console.log("Welcome, young adventurer.");
console.log("My name is Nestor. I am the master of this game. The omniscient in your future adventures and potentially, your future killer.\n");
readline.question("First things first, what's your name ? ", function (name) {
    playerName = name;
    console.log("\nHello, ".concat(playerName, "!"));
    readline.close();
});

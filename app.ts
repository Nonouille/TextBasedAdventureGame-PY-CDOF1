import {createInterface} from "readline";

//We'll use readline process to read and write question to the user
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

//Let's introduce the game and get to know the player
let playerName = "";
console.log("\n\n\n");
console.log("Welcome, young adventurer.");
console.log("My name is Nestor. I am the master of this game. The omniscient in your future adventures and potentially, your future killer.\n");
readline.question("First things first, what's your name ? ", name => {
    playerName = name;
    console.log(`\nHello, ${playerName}!`);
    readline.close();
});



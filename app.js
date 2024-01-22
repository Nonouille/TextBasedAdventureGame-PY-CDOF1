var prompt = require('prompt-sync')();
//Let's introduce the game and get to know the player
var playerName = "";
console.log("\n\n\n");
console.log("Welcome, young adventurer.");
console.log("My name is Nestor. I am the master of this game. The omniscient in your future adventures and potentially, your future killer.\n");
console.log("First things first, what's your name ?");
playerName = prompt("Enter your name : ");
console.log("Well, nice to meet you ".concat(playerName, "!\n\n"));
console.log("Welcome to the wonderful world of Decentrol.\nThere is something I want to know about you ...\n");
var startGame = "";
while (startGame.toLowerCase() != "yes" && startGame.toLowerCase() != "no") {
    console.log();
    console.log("Are you brave enough for me to carry a mission on you ?");
    startGame = prompt("(Yes/No) ");
    switch (startGame.toLowerCase()) {
        case 'yes':
            console.log('Super, come with me !');
            break;
        case 'no':
            console.log('I\' ll wait for someone else to save us then...');
            break;
        default:
            console.log('I may not have understood your answer ...');
    }
}

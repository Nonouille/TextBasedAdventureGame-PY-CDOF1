var prompt = require('prompt-sync')();
//Let's introduce the game and get to know the player

function typeEffect(text) {
    for (let i = 0; i < text.length; i++) {
        process.stdout.write(text.charAt(i));
        // Use 'ping' command for delay on Windows
        require('child_process').execSync('ping 127.0.0.1 -n 1 -w 500 > nul');
    }
    console.log(); // Move to the next line after typing
}

var playerName = "";
console.log("\n\n\n");
typeEffect("Welcome, young adventurer.");
typeEffect("My name is Nestor. I am the master of this game. The omniscient in your future adventures and potentially, your future killer.\n");
typeEffect("First things first, what's your name ?");
playerName = prompt("Enter your name : ");
typeEffect("Well, nice to meet you ".concat(playerName, "!\n\n"));
typeEffect("Welcome to the wonderful world of Decentrol.\nThere is something I want to know about you ...\n");
var startGame = "";
while (startGame.toLowerCase() != "yes" && startGame.toLowerCase() != "no") {
    console.log();
    typeEffect("Are you brave enough for me to carry a mission on you ?");
    startGame = prompt("(Yes/No) ");
    switch (startGame.toLowerCase()) {
        case 'yes':
            typeEffect('Super, come with me !');
            break;
        case 'no':
            typeEffect('I\'ll wait for someone else to save us then...');
            break;
        default:
            typeEffect('I may not have understood your answer ...');
    }
}

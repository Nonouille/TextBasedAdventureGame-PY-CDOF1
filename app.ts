// @ts-ignore
var prompt = require('prompt-sync')();
//Let's introduce the game and get to know the player

class Player {
    playerName: string;
    playerClass: string;
    health: number;
    attack: number;
    defense: number;

    constructor(playerName: string, playerClass: string, health: number, attack: number, defense: number) {
        this.playerName = playerName;
        this.playerClass = playerClass;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

    displayStats(): void {
        typeEffect(`\n${this.playerName}, the ${this.playerClass}`);
        typeEffect(`Stats:\n  Health: ${this.health}\n  Attack: ${this.attack}\n  Defense: ${this.defense}\n`);
    }
}

function createPlayer(playerName: string, playerClass: string): Player {
    switch (playerClass.toLowerCase()) {
        case 'sorcerer':
            return new Player(playerName, 'Sorcerer', 80, 40, 20);
        case 'barbarian':
            return new Player(playerName, 'Barbarian', 100, 30, 30);
        case 'paladin':
            return new Player(playerName, 'Paladin', 90, 35, 25);
        case 'bard':
            return new Player(playerName, 'Bard', 70, 45, 15);
        default:
            // Default to a generic class if input is not recognized
            return new Player(playerName, 'Adventurer', 75, 35, 20);
    }
}

function typeEffect(text) {
    for (let i = 0; i < text.length; i++) {
        process.stdout.write(text.charAt(i));
        // Use 'ping' command for delay on Windows
        require('child_process').execSync('ping 127.0.0.1 -n 1 -w 100 > nul');
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
//adding choice of classes :
typeEffect("Choose your class: Sorcerer, Barbarian, Paladin, Bard");
const playerClass: string = prompt("Enter your class: ");

// Create player based on chosen class
const player: Player = createPlayer(playerName, playerClass);

// Display player stats
player.displayStats();



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

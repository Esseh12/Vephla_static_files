let playerName = "Alex";
let playerHealth = 100;
let playerWeapon = "Sword";
let playerHasKey = false;

console.log("Welcome to the Adventure Game, " + playerName + "!");
console.log("Your journey begins now...");

// Encounter 1
let choice1 = "left";
if (choice1 === "left") {
    console.log(playerName + " walks left and encounters a wild wolf.");
    if (playerWeapon === "Sword") {
        console.log(playerName + " bravely fights the wolf with the " + playerWeapon + ".");
        playerHealth -= 20;
        console.log(playerName + "'s health is now " + playerHealth + ".");
    } else {
        console.log(playerName + " tries to run away, but the wolf catches up and bites.");
        playerHealth -= 50;
        console.log(playerName + "'s health is now " + playerHealth + ".");
    }
} else {
    console.log(playerName + " walks right and finds a hidden path.");
}

// Encounter 2
let choice2 = "explore";
if (choice2 === "explore") {
    console.log(playerName + " decides to explore the hidden path and finds a chest.");
    if (playerHasKey) {
        console.log(playerName + " uses the key to open the chest and finds a healing potion.");
        playerHealth += 30;
        console.log(playerName + "'s health is now " + playerHealth + ".");
    } else {
        console.log(playerName + " does not have a key to open the chest.");
    }
} else {
    console.log(playerName + " decides to move on without exploring.");
}

// Encounter 3
let choice3 = "talk";
if (choice3 === "talk") {
    console.log(playerName + " encounters a friendly traveler and decides to talk.");
    console.log("The traveler gives " + playerName + " a key.");
    playerHasKey = true;
} else {
    console.log(playerName + " ignores the traveler and keeps moving.");
}

// Encounter 4
let choice4 = "fight";
if (choice4 === "fight") {
    console.log(playerName + " encounters a bandit and chooses to fight.");
    if (playerWeapon === "Sword") {
        console.log(playerName + " fights valiantly with the " + playerWeapon + ".");
        playerHealth -= 30;
        console.log(playerName + "'s health is now " + playerHealth + ".");
    } else {
        console.log(playerName + " is unarmed and takes heavy damage.");
        playerHealth -= 60;
        console.log(playerName + "'s health is now " + playerHealth + ".");
    }
} else {
    console.log(playerName + " tries to sneak past the bandit.");
    let sneakSuccess = true;
    if (sneakSuccess) {
        console.log(playerName + " successfully sneaks past the bandit.");
    } else {
        console.log(playerName + " fails to sneak past and gets attacked.");
        playerHealth -= 40;
        console.log(playerName + "'s health is now " + playerHealth + ".");
    }
}

// Final Outcome
if (playerHealth > 0) {
    console.log(playerName + " reaches the end of the journey with " + playerHealth + " health left.");
    if (playerHasKey) {
        console.log(playerName + " uses the key to open the final door and finds a treasure!");
    } else {
        console.log(playerName + " reaches the final door but cannot open it without a key.");
    }
} else {
    console.log(playerName + " collapses from injuries before reaching the end.");
}

console.log("Thank you for playing the Adventure Game, " + playerName + "!");

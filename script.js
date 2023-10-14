function rollDie() {
    return Math.floor(Math.random() * 6) + 1;  // Generate a random number between 1 and 6
}

function rollDice() {
    const dice1 = rollDie();
    const dice2 = rollDie();
    const total = dice1 + dice2;

    // Update the dice elements and total
    document.getElementById("die1").innerText = dice1;
    document.getElementById("die2").innerText = dice2;
    document.getElementById("totalValue").innerText = total;
}

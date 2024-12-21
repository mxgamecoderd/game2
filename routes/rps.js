const express = require('express');
const router = express.Router();

// Array of possible choices for the game
const choices = ['rock', 'paper', 'scissors'];

// Game logic
router.get('/:choice', (req, res) => {
    const userChoice = req.params.choice.toLowerCase();

    // Validate user input
    if (!choices.includes(userChoice)) {
        return res.json({ message: "Invalid choice! Please choose rock, paper, or scissors." });
    }

    // Generate random choice for bot
    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result of the game
    let result;
    if (userChoice === botChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    // Respond with the result
    res.json({ 
        message: `You chose ${userChoice}, I chose ${botChoice}. ${result}` 
    });
});

module.exports = router;

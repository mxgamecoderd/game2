const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const rpsRoute = require('./routes/rps');

// Middleware
app.use(express.json());

// Routes
app.use('/api/rps', rpsRoute);

// Root endpoint
app.get('/', (req, res) => {
    res.send("Welcome to the Rock, Paper, Scissors API! Use /api/rps to play.");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

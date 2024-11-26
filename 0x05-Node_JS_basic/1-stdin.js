// Import the necessary module
const readline = require('readline');

// Create an interface to read input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for user's name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    // Display the user's name
    console.log(`Your name is: ${name}`);

    // Close the interface
    rl.close();
});

// Handle the closing event
rl.on('close', () => {
    console.log('This important software is now closing');
});

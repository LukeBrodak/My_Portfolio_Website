const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

console.log('Starting server...'); // Add this line

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log('Received request for /'); // Add this line
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err); // Add this line
    } else {
        console.log(`Server is running at http://localhost:${port}`);
    }
});

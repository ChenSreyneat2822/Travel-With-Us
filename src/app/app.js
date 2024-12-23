
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the node_modules directory
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/font-awesome/css')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Adjust the path as necessary
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
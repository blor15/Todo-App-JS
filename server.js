const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

//route to the root
//This will also send my index.html into the webpage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// The server port connection
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
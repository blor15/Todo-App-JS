const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

//route to the root
//This will also send my index.html into the webpage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// The server port connection
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// Static Files
app.use(express.static('public'))

app.use(express.static(__dirname + 'public/style.css'))
app.use(express.static(__dirname + 'public/index.html'))
app.use(express.static(__dirname + 'public/index.js'))

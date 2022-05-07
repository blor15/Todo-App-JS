//Web server
const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;


//route to the root
//This will also send my index.html into the webpage
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// The server port connection
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// Static Files
// Used to build out the webpage and functionality
const path = require('path');
// app.use(express.static(path.join(__dirname, "build")));

// app.use(express.static(__dirname + 'public/style.css'))
// app.use(express.static(__dirname + 'public/index.html'))
// app.use(express.static(__dirname + 'public/index.js'))

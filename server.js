const express = require('express');
const app = express();

const PORT = 3000;

//route to the root
app.get('/', (req, res) => {
    res.send('Hello World');
});

// The server port connection
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
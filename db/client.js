//Connects our DB
const { Client } = require('pg');

const client = new Client('postgres://localhost:5432/todoapp-dev');

module.exports = {
    client,
};
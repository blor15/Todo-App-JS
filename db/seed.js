const { client } = require('./client');
const { rebuildDB } = require('./init_db');

rebuilDB()
    .catch(console.error)
    .finally(() => client.end());


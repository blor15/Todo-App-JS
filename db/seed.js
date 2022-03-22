const { client } = require('./client');
const { rebuildDB } = require('./init_db');

client.connect()
    .then(rebuildDB)
    .catch(console.error)
    .finally(() => client.end());


const { client } = require('./client');

async function createTables() {
    try {
        console.log('Starting to build tables...');
        await client.query(`
        CREATE TABLE todo(
          id SERIAL PRIMARY KEY NOT NULL,
          task text UNIQUE,
          status INTEGER DEFAULT 0  
        );`);
        console.log('Finished creating tables');
    } catch (error) {
        console.error('Error creating tables');

        throw error;
    }
};


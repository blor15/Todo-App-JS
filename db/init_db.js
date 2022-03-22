const { client } = require('./client');

const {
    createInitialTodos
} = require("./seed_data");

async function dropTables() {
    try {
        console.log("Starting to drop tables...");

        await client.query(`
        DROP TABLE IF EXISTS todo;`);

        console.log("Finished dropping tables!");
    } catch (error) {
        console.error("Error while dropping tables!");
        throw error;
    }
}


async function createTables() {
    try {
        console.log('Starting to build tables...');
        await client.query(`
        CREATE TABLE todo(
          id SERIAL PRIMARY KEY NOT NULL,
          title VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL
        );`);
        console.log('Finished creating tables');
    } catch (error) {
        console.error('Error creating tables');

        throw error;
    }
};

async function rebuildDB() {
    try {

        await dropTables();
        await createTables();
        await createInitialTodos();
        console.log('Finished rebuilding db!');
    } catch (error) {
        console.error('Error during rebuildDB');
        throw error;
    }
}

module.exports = {
    rebuildDB
}

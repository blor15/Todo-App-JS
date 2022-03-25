const { client } = require('./client');

const {
    createInitialTasks,
    createInitialUsers
} = require("./seed_data");

async function dropTables() {
    try {
        console.log("Starting to drop tables...");

        await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS task;`);

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
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        CREATE TABLE task(
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
        await createInitialTasks();
        await createInitialUsers();
        console.log('Finished rebuilding db!');
    } catch (error) {
        console.error('Error during rebuildDB');
        throw error;
    }
}

module.exports = {
    rebuildDB
}

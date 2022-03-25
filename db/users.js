const { user } = require('pg/lib/defaults');
const { client } = require('./client');

async function createUser({ name }) {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
                INSERT INTO users(name)
                VALUES($1)
                ON CONFLICT DO NOTHING
                RETURNING *
            `, [name]);

        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser
}

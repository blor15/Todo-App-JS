const client = require('./client');

async function createTodo({
    title,
    description
}) {
    try {
        const {
            rows: [todo],
        } = await client.query(
            `
            INSERT INTO todo (title, description)
            VALUES ($1, $2)
            ON CONFLICT DO NOTHING
            RETURNING *;
            `,
            [title, description]
        );
        return todo
    } catch (error) {
        throw error;
    }
}

module.exports = { createTodo }
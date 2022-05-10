const { client } = require('./client');

async function createTask({
    title,
    description
}) {
    try {
        const {
            rows: [task],
        } = await client.query(
            `
            INSERT INTO task (title, description)
            VALUES ($1, $2)
            ON CONFLICT DO NOTHING
            RETURNING *;
            `,
            [title, description]
        );
        console.log(task)
        return task

    } catch (error) {
        throw error;
    }
}


module.exports = { createTask }
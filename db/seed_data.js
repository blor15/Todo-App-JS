const { mockTodo } = require('./mock_data');
const { createTodo } = require('./todos');


async function createInitialTodos() {
    console.log('Starting to create mock todos');
    try {
        const todos = await Promise.all(mockTodo.map((todo) => createTodo(todo))
        );
        console.log('Finished creating todo');
        return todos;
    } catch (error) {
        console.error('Error creating todo');
        throw error;
    }
}

module.exports = {
    createInitialTodos
};
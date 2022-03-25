const { mockTask } = require('./mock_data');
const { createTask } = require('./task');


async function createInitialTasks() {
    console.log('Starting to create mock task');
    try {
        const tasks = await Promise.all(mockTask.map((task) => createTask(task))
        );
        console.log('Finished creating task');
        return tasks;
    } catch (error) {
        console.error('Error creating task');
        throw error;
    }
}

module.exports = {
    createInitialTasks
};
// This file is to create our initial data and to see if our tables are filling correctly
const { mockTask, mockUser } = require('./mock_data');
const { createTask } = require('./task');
const { createUser } = require('./users');


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

async function createInitialUsers() {
    console.log('Starting to create initial users');
    try {
        const users = await Promise.all(mockUser.map((user) => createUser(user))
        );
        console.log('Finished creating users');
        return users;
    } catch (error) {
        console.error('Error creating users');
        throw error;
    }
}

module.exports = {
    createInitialTasks,
    createInitialUsers
};
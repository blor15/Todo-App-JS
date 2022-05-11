const { rebuildDB } = require('../db/init_db');
const { createTask } = require('../db/task');
const { client } = require('../db/client');

describe('Database', () => {
    beforeAll(async () => {
        await rebuildDB();
    })
    afterAll(async () => {
        await client.end();
    })
    describe('Tasks', () => {
        describe('createTask({ title, description })', () => {
            it('Creates and returns a new task', async () => {
                const taskToCreate = { title: 'testing', description: 'testing function' };
                const createdTask = await createTask(taskToCreate)
                expect(createdTask.title).toBe(taskToCreate.title);
                expect(createdTask.description).toBe(taskToCreate.description);
            })
        })
    })

})
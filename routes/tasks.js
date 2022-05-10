const express = require('express');

const tasksRouter = express.Router()

tasksRouter.get('/tasks', async (req, res, next) => {
    try {
        const tasks = await createTask();

        res.send(tasks)
    }
    catch (err) {
        next(err)
    }
});

module.exports = tasksRouter;
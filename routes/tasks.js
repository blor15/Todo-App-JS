const express = require('express');
const { mockTask } = require('../db/mock_data');

const tasksRouter = express.Router()

tasksRouter.get('/', async (req, res, next) => {
    try {
        const tasks = await mockTask;

        res.send(tasks)
    }
    catch (err) {
        next(err)
    }
});

module.exports = tasksRouter;
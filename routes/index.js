const express = require('express');

const apiRouter = express.Router();

apiRouter.get("/health", (req, res, next) => {
    res.status(200).send({
        message: "Api is online",
    })
});

const tasksRouter = require('./tasks')
apiRouter.use("/tasks", tasksRouter);

module.exports = apiRouter;
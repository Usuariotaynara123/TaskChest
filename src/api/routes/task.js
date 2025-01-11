const express = require('express');
const { getAllTasks, createTask } = require('../controllers/task');

const taskRoutes = express.Router({ mergeParams: true });

taskRoutes.post('/create', createTask);
taskRoutes.post('/getUserTasks', getAllTasks);

module.exports = taskRoutes;
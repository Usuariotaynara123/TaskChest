const express = require('express');
const { createTask } = require('../controllers/task');

const taskRoutes = express.Router();

taskRoutes.post('/create', createTask);

module.exports = taskRoutes;
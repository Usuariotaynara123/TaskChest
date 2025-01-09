const express = require('express');
const getAllTasks = require('../controllers/task')

const taskRoutes = express.Router();

taskRoutes.get('/', getAllTasks)

module.exports = taskRoutes;
const express = require('express');
const { Tarefa } = require('../models/database');

async function createTask(req, res) {
    let currentTask = await Tarefa.create({titulo: req.body.tittle, descrição: req.body.description, prazo: req.body.term, CategoriaNome: req.body.category, status: 0})
    res.send(currentTask);
}

async function getAllTasks(req, res){
    res.send(`Estou vivo, ${req.params}`);
}

module.exports = { getAllTasks, createTask };

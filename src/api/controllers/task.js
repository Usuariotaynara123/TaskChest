const express = require('express');
const { Tarefa } = require('../models/database');

async function createTask(req, res) {
    try{
        let currentTask = await Tarefa.create({titulo: req.body.tittle, descricao: req.body.description, prazo: req.body.term, CategoriaNome: req.body.category, status: 0, UsuarioUsername: req.params.id})
        res.send(currentTask);
    }catch(error){ 
        res.send(error.name) 
    }
}

async function getAllTasks(req, res){
    let userTaskLists = await Tarefa.findAll({where: {
         UsuarioUsername: req.params.id
    }});
    res.send(userTaskLists);
}

module.exports = { getAllTasks, createTask };

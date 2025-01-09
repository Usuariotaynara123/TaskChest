const express = require('express');
const taskRoutes = require('./task')

class Router extends express.Router{
    constructor(){
        super();
        this.use(express.static('D:/documentos/Programacao/TaskChest/src/public'));

        this.get('/', (req, res) => {
            res.sendFile('D:/documentos/Programacao/TaskChest/src/public/pages/main/index.html');
        });

        this.use('/task', taskRoutes)
    }
}

new Router();

module.exports = Router;
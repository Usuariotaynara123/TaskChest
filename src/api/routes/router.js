const express = require('express');
const taskRoutes = require('./task');
const loginRoutes = require('./login');

class Router extends express.Router{
    constructor(){
        super({ mergeParams: true });
        this.use(express.static('D:/documentos/Programacao/TaskChest/src/public'));
        this.use(express.json());
        this.use('/:id', this);

        this.get('/', (req, res) => {
            res.sendFile('D:/documentos/Programacao/TaskChest/src/public/pages/main/index.html');
        });

        //Subrota das tasks
        this.use('/task', taskRoutes);

        //Subrota de login
        this.use('/login', loginRoutes);
    }
}

module.exports = Router;
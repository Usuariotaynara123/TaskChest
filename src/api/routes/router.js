const express = require('express');
const taskRoutes = require('./task');
const loginRoutes = require('./login');
const path = require('path');

class Router extends express.Router{
    constructor(){
        super({ mergeParams: true });
        this.use(express.static(path.join(__dirname, '../../public')));
        this.use(express.json());
        this.use('/:id', this);

        this.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../../public/pages/main/index.html'));
        });

        //Subrota das tasks
        this.use('/task', taskRoutes);

        //Subrota de login
        this.use('/login', loginRoutes);
    }
}

module.exports = Router;
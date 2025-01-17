const express = require('express');
const taskRoutes = require('./task');
const loginRoutes = require('./login');
const path = require('path');

class Router extends express.Router{
    constructor(){
        super({ mergeParams: true });
        this.use(express.static(path.join(__dirname, '../../public')));//Fornece os arquivos que estão em public para o navegador
        this.use(express.json());//Define que as rotas se comunicam com json
        this.use('/:id', this);

        this.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../../public/pages/main/index.html'));//Define que quando o navegador pesquisar por localhost vai enviar a página
        });

        //Subrota das tasks
        this.use('/task', taskRoutes);

        //Subrota de login
        this.use('/login', loginRoutes);
    }
}

module.exports = Router;
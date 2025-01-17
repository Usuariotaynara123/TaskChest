const express = require('express');
const { Usuario } = require('../models/database');

async function singUpIn(req, res) {
    try{
        if(!req.params.id){ //Tenta criar o usuário se não estiver logado
            let currentUser = await Usuario.create({username: req.body.username, senha: req.body.password});
            res.send(`/${currentUser.username}`);
        }
        else{
            res.send('/')
        }
    }
    catch(error){ //Não conseguiu criar o usuário ele tenta entrar com aquele usuário
        if(error.name == 'SequelizeUniqueConstraintError'){
            let currentUser = await Usuario.findByPk(req.body.username);
                if(currentUser.dataValues.senha == req.body.password){
                    res.send(`/${currentUser.username}`);
                }
                else{
                    res.send('');
                }
        }
    }
}

module.exports = { singUpIn };
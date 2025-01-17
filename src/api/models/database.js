const { Sequelize } = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres'});//Conecta com o banco de dados no outro conteiner

module.exports = database;

const Tarefa = require('./Tarefa');
const Usuario = require('./Usuario');
const Categoria = require('./Categoria');

Usuario.hasMany(Tarefa);//Faz os relacionamentos
Tarefa.belongsTo(Usuario);

Categoria.hasMany(Tarefa, {foreignKey: 'CategoriaNome'});
Tarefa.belongsTo(Categoria, {foreignKey: 'CategoriaNome'});

database.sync({force: true}).then(console.log('\n Banco de dados sincronizado!')).then(async () => { await Categoria.bulkCreate([ { nome: 'estudos' }, { nome: 'trabalho' }, { nome: 'dia-a-dia' }, { nome: 'outros' }]) });//Sincroniza e cria alguns valores no banco de dados

module.exports = { Usuario, Tarefa, Categoria}
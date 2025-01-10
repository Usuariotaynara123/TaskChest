const { Model, DataTypes } = require('sequelize');
const database = require('./database');

class Tarefa extends Model {}

Tarefa.init(
    {
        titulo: DataTypes.STRING,
        descrição: DataTypes.STRING,
        prazo: DataTypes.DATEONLY,
        status: DataTypes.BOOLEAN,
    },
    {
        sequelize: database,
        timestamps: false,
        schema: 'taskChest'
    }
);

module.exports = Tarefa;
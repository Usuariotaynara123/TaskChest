const { Model, DataTypes } = require('sequelize');
const database = require('./database');

class Usuario extends Model {}

Usuario.init(
    {
        username: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        senha: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize: database,
        timestamps: false,
        schema: 'taskChest'
    }
)

module.exports = Usuario;
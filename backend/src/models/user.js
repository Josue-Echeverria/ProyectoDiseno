const { sequelize } = require('../config/db');  // Importa la instancia de Sequelize correctamente
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    puntuacion: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    idDireccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'usuario',
    timestamps: false,
    freezeTableName: true, 
});

module.exports = User;


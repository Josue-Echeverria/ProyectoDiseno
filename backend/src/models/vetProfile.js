const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

const VetProfile = sequelize.define('VetProfile', {
    idVeterinario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroCuenta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'veterinario',  // Asegura que Sequelize usa el nombre de tabla exacto
    timestamps: false,  // Configura esto según tus necesidades
    freezeTableName: true,  // Deshabilita el plural automático del nombre de la tabla
    createdAt: false,  // Deshabilitar la creación de columnas automáticas de timestamp
    updatedAt: false,
});

module.exports = VetProfile;


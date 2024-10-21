const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User', // Hace referencia al modelo de Usuario
      key: 'idUsuario' // Hace referencia a la columna idUsuario
    }
  }
}, {
  timestamps: true
});

module.exports = VetProfile;

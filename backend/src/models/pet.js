const { DataTypes } = require('sequelize');
const {sequelize } = require('../config/db');
const User = require('./user');
//const Especie = require('./Especie');
//const Raza = require('./Raza');

const Pet = sequelize.define('Pet', {
  idMascota: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User', // Hace referencia al modelo de Usuario
      key: 'idUsuario' // Hace referencia a la columna idUsuario
    }
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  raza: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'mascota',
  timestamps: false,
  freezeTableName: true, 
});

User.hasMany(Pet, { foreignKey: 'idUser' });
Pet.belongsTo(User, { foreignKey: 'idUser' });

module.exports = Pet;

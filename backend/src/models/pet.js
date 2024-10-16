const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Especie = require('./Especie');
const Raza = require('./Raza');

const Pet = sequelize.define('Pet', {
  idPet: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'idUser',
    },
    allowNull: false,
  },
  idEspecie: {
    type: DataTypes.INTEGER,
    references: {
      model: Especie,
      key: 'idEspecie',
    },
    allowNull: false,
  },
  idRaza: {
    type: DataTypes.INTEGER,
    references: {
      model: Raza,
      key: 'idRaza',
    },
  },
  birthdate: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'pet',
  timestamps: false,
});

User.hasMany(Pet, { foreignKey: 'idUser' });
Pet.belongsTo(User, { foreignKey: 'idUser' });

module.exports = Pet;

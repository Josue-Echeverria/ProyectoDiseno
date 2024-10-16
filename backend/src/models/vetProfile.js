const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VetProfile = sequelize.define('VetProfile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  clinicName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialization: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // Hace referencia al modelo de Usuario
      key: 'id'
    }
  }
}, {
  timestamps: true
});

module.exports = VetProfile;

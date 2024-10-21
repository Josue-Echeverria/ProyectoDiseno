const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const VetProfile = require('./VetProfile');

const Appointment = sequelize.define('Appointment', {
  idAppointment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  idUsUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'idUser',
    },
    allowNull: false,
  },
  idVetProfile: {
    type: DataTypes.INTEGER,
    references: {
      model: VetProfile,
      key: 'idVetProfile',
    },
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    defaultValue: 'pending',
  },
}, {
  tableName: 'appointment',
  timestamps: false,
});

User.hasMany(Appointment, { foreignKey: 'idUser' });
Appointment.belongsTo(User, { foreignKey: 'idUser' });

VetProfile.hasMany(Appointment, { foreignKey: 'idVetProfile' });
Appointment.belongsTo(VetProfile, { foreignKey: 'idVetProfile' });

module.exports = Appointment;


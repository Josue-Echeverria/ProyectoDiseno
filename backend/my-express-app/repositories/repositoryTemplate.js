// repositories/repositoryTemplate.js

const { Sequelize } = require('sequelize');
const { MSSQL_HOST, MSSQL_USER, MSSQL_PASSWORD, MSSQL_DATABASE } = require('../config/db');

const sequelize = new Sequelize(MSSQL_DATABASE, MSSQL_USER, MSSQL_PASSWORD, {
  host: MSSQL_HOST,
  dialect: 'mssql',
});

const connectToMSSQL = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MSSQL server');
  } catch (error) {
    console.error('Error connecting to MSSQL server:', error);
  }
};

// Add your repository functions here

module.exports = {
  connectToMSSQL,
  // Export your repository functions here
};
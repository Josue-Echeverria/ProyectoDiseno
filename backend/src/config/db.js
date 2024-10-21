const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize('db1', 'admindev', 'S0lo2slow', {
  host: 'db1dev.database.windows.net',
  dialect: 'mssql',
  //port: 1433, // MSSQL Default port
  //driver: 'tedious',
  //logging: false, // Disable logging for cleaner output
  //dialectOptions: {
      //options: {
          //encrypt: true, // Encryption is typically required for Azure SQL
          //trustServerCertificate: false, // Only set to true for development/testing, false for production
      //},
  //},
});


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a MSSQL establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos MSSQL:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = { sequelize, connectDB };

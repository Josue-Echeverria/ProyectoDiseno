const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  port: process.env.DB_PORT || 1433, // MSSQL Default port
  logging: false, // Disable logging for cleaner output
  dialectOptions: {
      options: {
          encrypt: false, // Encryption is typically required for Azure SQL
          trustServerCertificate: false, // Only set to true for development/testing, false for production
      },
  },
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

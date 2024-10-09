const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  port: process.env.DB_PORT || 1433,  // Puerto por defecto para MSSQL
  logging: false,
  dialectOptions: {
    options: {
      encrypt: true, // Si utilizas Azure u otro servicio que requiera cifrado
      trustServerCertificate: true, // Solo en desarrollo, si necesitas evitar problemas de certificados
    },
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a MSSQL establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos MSSQL:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
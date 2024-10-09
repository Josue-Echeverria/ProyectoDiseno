const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mssql',
  host: 'your-host',
  port: 'your-port',
  database: 'your-database',
  username: 'your-username',
  password: 'your-password',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connectDB, sequelize };
const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const app = express();
const routes = require('./routes/v1');

// Middlewares
app.use(express.json());

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const vetProfileRoutes = require('./routes/vetProfileRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const medicalRecordRoutes = require('./routes/medicalRecordRoutes');

app.use('/api/users', userRoutes);
app.use('/api/vets', vetProfileRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/medical-records', medicalRecordRoutes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// Iniciar servidor y sincronizar modelos
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync();  // Sincronizar modelos con la base de datos
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
};

startServer();
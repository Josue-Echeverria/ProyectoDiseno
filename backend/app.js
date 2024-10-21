const express = require('express');
const { connectDB, sequelize } = require('./src/config/db');
const app = express();

// Middlewares
app.use(express.json());

// Importar rutas
const userRoutes = require('./src/routes/v1/userRoutes');
const vetProfileRoutes = require('./src/routes/v1/vetProfileRoutes');
const appointmentRoutes = require('./src/routes/v1/appointmentRoute');
const petRoutes = require('./src/routes/v1/petRoutes');


app.use('/api/users', userRoutes);
app.use('/api/vets', vetProfileRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/pets', petRoutes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// Iniciar servidor y sincronizar modelos
const PORT = process.env.PORT || 3000;

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